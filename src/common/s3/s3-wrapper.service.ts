import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { S3Service } from "@softvence/s3";

type UploadFile = {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
};

const {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
    HeadObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

@Injectable()
export class S3WrapperService implements OnModuleInit {
    private readonly logger = new Logger(S3WrapperService.name);
    private s3Client: any;
    private bucket: string;
    private region: string;
    private readonly maxFileSize: number = 5 * 1024 * 1024;

    constructor(private readonly s3Service: S3Service) {}

    onModuleInit() {
        this.bucket = process.env.AWS_S3_BUCKET_NAME || process.env.AWS_BUCKET_NAME!;
        this.region = process.env.AWS_BUCKET_REGION!;
        const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
        const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

        if (!this.bucket) {
            throw new Error(
                "AWS_S3_BUCKET_NAME or AWS_BUCKET_NAME environment variable is not set",
            );
        }
        if (!this.region) {
            throw new Error("AWS_BUCKET_REGION environment variable is not set");
        }
        if (!accessKeyId) {
            throw new Error("AWS_ACCESS_KEY_ID environment variable is not set");
        }
        if (!secretAccessKey) {
            throw new Error("AWS_SECRET_ACCESS_KEY environment variable is not set");
        }

        if (accessKeyId.includes("your-aws") || secretAccessKey.includes("your-aws")) {
            this.logger.warn(
                "AWS credentials appear to be placeholder values. Please set valid AWS credentials in your .env file",
            );
        }

        const clientConfig: any = {
            region: this.region,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        };

        this.s3Client = new S3Client(clientConfig);
        this.logger.log(
            `S3WrapperService initialized with bucket: ${this.bucket}, region: ${this.region}`,
        );
    }

    async uploadFile(
        file: UploadFile,
        options?: {
            maxSize?: number;
            folder?: string;
            metadata?: Record<string, string>;
        },
    ): Promise<{
        url: string;
        bucket: string;
        region: string;
        originalName: string;
        size: number;
        mimeType: string;
        extension: string;
        folder: string;
        key: string;
    }> {
        try {
            const maxSize = options?.maxSize || this.maxFileSize;
            if (file.size > maxSize) {
                throw new Error(
                    `File size ${file.size} bytes exceeds maximum allowed size of ${maxSize} bytes`,
                );
            }

            const ext = file.originalname.split(".").pop();
            const folder = options?.folder || this.getFolderByMimeType(file.mimetype);
            const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
            const s3Key = `${folder}/${uniqueName}`;

            const putCommandParams: any = {
                Bucket: this.bucket,
                Key: s3Key,
                Body: file.buffer,
                ContentType: file.mimetype,
            };

            if (options?.metadata) {
                putCommandParams.Metadata = options.metadata;
            }

            await this.s3Client.send(new PutObjectCommand(putCommandParams));

            this.logger.log(`File uploaded successfully: ${s3Key}`);

            const url = `https://${this.bucket}.s3.${this.region}.amazonaws.com/${s3Key}`;

            return {
                url,
                originalName: file.originalname,
                size: file.size,
                bucket: this.bucket,
                region: this.region,
                mimeType: file.mimetype,
                extension: ext || "",
                folder,
                key: s3Key,
            };
        } catch (error: any) {
            this.logger.error(`Failed to upload file: ${error?.message}`, error?.stack);

            if (error.name === "InvalidAccessKeyId" || error.name === "SignatureDoesNotMatch") {
                throw new Error(
                    `AWS credentials are invalid. Please check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env file. Original error: ${error.message}`,
                );
            }
            if (error.name === "NoSuchBucket") {
                throw new Error(
                    `S3 bucket "${this.bucket}" does not exist or you don't have access to it. Please check your AWS_BUCKET_NAME/AWS_S3_BUCKET_NAME and bucket permissions. Original error: ${error.message}`,
                );
            }
            if (error.name === "AccessDenied") {
                throw new Error(
                    `Access denied to S3 bucket "${this.bucket}". Please check your AWS credentials and bucket permissions. Original error: ${error.message}`,
                );
            }

            throw new Error(`Failed to upload file: ${error?.message || "Unknown error"}`);
        }
    }

    async uploadFiles(
        files: UploadFile[],
        options?: {
            maxSize?: number;
            folder?: string;
            metadata?: Record<string, string>;
        },
    ): Promise<
        Array<{
            url: string;
            originalName: string;
            size: number;
            bucket?: string;
            region?: string;
            mimeType?: string;
            extension?: string;
            folder?: string;
            key?: string;
        }>
    > {
        try {
            const uploadPromises = files.map((file) => this.uploadFile(file, options));
            const results = await Promise.all(uploadPromises);
            this.logger.log(`Successfully uploaded ${results.length} files`);
            return results;
        } catch (error: any) {
            this.logger.error(`Failed to upload files: ${error?.message}`, error?.stack);
            throw new Error(`Failed to upload files: ${error?.message || "Unknown error"}`);
        }
    }

    async downloadFile(s3Key: string): Promise<{
        body: Buffer;
        contentType: string;
        contentLength: number;
        metadata?: Record<string, string>;
    }> {
        try {
            const command = new GetObjectCommand({
                Bucket: this.bucket,
                Key: s3Key,
            });

            const response = await this.s3Client.send(command);

            const chunks: Uint8Array[] = [];
            for await (const chunk of response.Body as any) {
                chunks.push(chunk);
            }
            const body = Buffer.concat(chunks);

            this.logger.log(`File downloaded successfully: ${s3Key}`);

            return {
                body,
                contentType: response.ContentType || "application/octet-stream",
                contentLength: response.ContentLength || body.length,
                metadata: response.Metadata,
            };
        } catch (error: any) {
            this.logger.error(`Failed to download file: ${error?.message}`, error?.stack);
            if (error.name === "NoSuchKey" || error.name === "NotFound") {
                throw new Error(`File not found: ${s3Key}`);
            }
            throw new Error(`Failed to download file: ${error?.message || "Unknown error"}`);
        }
    }

    async deleteFile(s3Key: string): Promise<void> {
        try {
            await this.s3Client.send(
                new DeleteObjectCommand({
                    Bucket: this.bucket,
                    Key: s3Key,
                }),
            );

            this.logger.log(`File deleted successfully: ${s3Key}`);
        } catch (error: any) {
            this.logger.error(`Failed to delete file: ${error?.message}`, error?.stack);
            throw new Error(`Failed to delete file: ${error?.message || "Unknown error"}`);
        }
    }

    async fileExists(s3Key: string): Promise<boolean> {
        try {
            await this.s3Client.send(
                new HeadObjectCommand({
                    Bucket: this.bucket,
                    Key: s3Key,
                }),
            );
            return true;
        } catch (error: any) {
            if (error.name === "NotFound" || error.name === "NoSuchKey") {
                return false;
            }
            this.logger.error(`Failed to check file existence: ${error?.message}`, error?.stack);
            throw new Error(`Failed to check file existence: ${error?.message || "Unknown error"}`);
        }
    }

    async getPresignedUrl(
        s3Key: string,
        expiresIn: number = 3600,
    ): Promise<{
        url: string;
        expiresAt: Date;
    }> {
        try {
            const command = new GetObjectCommand({
                Bucket: this.bucket,
                Key: s3Key,
            });

            const url = await getSignedUrl(this.s3Client, command, { expiresIn });

            const expiresAt = new Date();
            expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn);

            this.logger.log(`Presigned URL generated for: ${s3Key}`);

            return {
                url,
                expiresAt,
            };
        } catch (error: any) {
            this.logger.error(`Failed to generate presigned URL: ${error?.message}`, error?.stack);
            throw new Error(
                `Failed to generate presigned URL: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async getPresignedUploadUrl(
        s3Key: string,
        contentType: string,
        expiresIn: number = 3600,
    ): Promise<{
        url: string;
        expiresAt: Date;
    }> {
        try {
            const command = new PutObjectCommand({
                Bucket: this.bucket,
                Key: s3Key,
                ContentType: contentType,
            });

            const url = await getSignedUrl(this.s3Client, command, { expiresIn });

            const expiresAt = new Date();
            expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn);

            this.logger.log(`Presigned upload URL generated for: ${s3Key}`);

            return {
                url,
                expiresAt,
            };
        } catch (error: any) {
            this.logger.error(
                `Failed to generate presigned upload URL: ${error?.message}`,
                error?.stack,
            );
            throw new Error(
                `Failed to generate presigned upload URL: ${error?.message || "Unknown error"}`,
            );
        }
    }

    extractS3KeyFromUrl(url: string): string | null {
        try {
            const patterns = [
                /grant-sources\/[^/]+\.pdf/i,
                /images\/[^/]+\.(jpg|jpeg|png|gif|webp)/i,
                /videos\/[^/]+\.(mp4|avi|mov|wmv)/i,
                /files\/[^/]+\.\w+/i,
            ];

            for (const pattern of patterns) {
                const match = url.match(pattern);
                if (match) {
                    return match[0];
                }
            }

            try {
                const urlObj = new URL(url);
                const pathParts = urlObj.pathname.split("/").filter((p) => p);
                if (pathParts.length > 1) {
                    return pathParts.slice(1).join("/");
                }
                return pathParts.join("/") || null;
            } catch {
                return null;
            }
        } catch {
            return null;
        }
    }

    private getFolderByMimeType(mimeType: string): string {
        if (mimeType === "application/pdf") {
            return "grant-sources";
        }
        if (mimeType.startsWith("image/")) {
            return "images";
        }
        if (mimeType.startsWith("video/")) {
            return "videos";
        }
        return "files";
    }
}
