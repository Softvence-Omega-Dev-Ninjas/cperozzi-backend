import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";
import { S3WrapperService } from "../../common/s3/s3-wrapper.service";
import { CreateInternalGrantSourceDto } from "./dto/create-grant-source.dto";
import { UpdateInternalGrantSourceDto } from "./dto/update-grant-source.dto";
import { InternalGrantSourceResponseDto } from "./grant-source.response.dto";

// Type for file uploads (compatible with Express.Multer.File and custom file objects)
type UploadFile = {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
};

@Injectable()
export class GrantSourceService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly s3Service: S3WrapperService,
    ) {}

    // ----------------- CREATE -----------------
    async create(
        createDto: CreateInternalGrantSourceDto,
        pdfFile?: UploadFile,
    ): Promise<InternalGrantSourceResponseDto> {
        try {
            // Validate organization exists before creating grant source
            const organization = await this.prisma.organization.findUnique({
                where: { id: createDto.organizationId },
            });

            if (!organization) {
                throw new BadRequestException(
                    `Organization with id ${createDto.organizationId} does not exist`,
                );
            }

            let opportunityPdf: string | undefined = createDto.opportunityPdf;

            // Upload PDF file to S3 if provided
            if (pdfFile) {
                try {
                    // Validate file type
                    if (pdfFile.mimetype !== "application/pdf") {
                        throw new BadRequestException("Only PDF files are allowed");
                    }

                    const s3Response = await this.s3Service.uploadFile(pdfFile);
                    opportunityPdf = s3Response.url;
                } catch (uploadError: any) {
                    throw new BadRequestException(
                        `Failed to upload PDF file: ${uploadError?.message || "Unknown error"}`,
                    );
                }
            }

            const grantSource = await this.prisma.internalGrantSource.create({
                data: {
                    ...createDto,
                    opportunityPdf,
                },
            });

            return this.mapToResponseDto(grantSource);
        } catch (error: any) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            // Handle Prisma foreign key constraint errors
            if (error.code === "P2003") {
                throw new BadRequestException(
                    `Organization with id ${createDto.organizationId} does not exist`,
                );
            }
            throw new BadRequestException(
                `Failed to create grant source: ${error?.message || "Unknown error"}`,
            );
        }
    }

    // ----------------- FIND ALL -----------------
    async findAll(): Promise<InternalGrantSourceResponseDto[]> {
        try {
            const grants = await this.prisma.internalGrantSource.findMany({
                orderBy: { createdAt: "desc" },
            });
            return grants.map((g) => this.mapToResponseDto(g));
        } catch (error: any) {
            throw new BadRequestException(
                `Failed to fetch grant sources: ${error?.message || "Unknown error"}`,
            );
        }
    }

    // ----------------- FIND ONE -----------------
    async findOne(id: string): Promise<InternalGrantSourceResponseDto> {
        try {
            const grant = await this.prisma.internalGrantSource.findUnique({ where: { id } });
            if (!grant) {
                throw new NotFoundException(`Grant source with id ${id} not found`);
            }
            return this.mapToResponseDto(grant);
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to fetch grant source: ${error?.message || "Unknown error"}`,
            );
        }
    }

    // ----------------- UPDATE -----------------
    async update(
        id: string,
        updateDto: UpdateInternalGrantSourceDto,
        pdfFile?: UploadFile,
    ): Promise<InternalGrantSourceResponseDto> {
        try {
            const grant = await this.prisma.internalGrantSource.findUnique({ where: { id } });
            if (!grant) {
                throw new NotFoundException(`Grant source with id ${id} not found`);
            }

            let opportunityPdf: string | undefined = updateDto.opportunityPdf;

            // Upload PDF file to S3 if provided
            if (pdfFile) {
                try {
                    // Validate file type
                    if (pdfFile.mimetype !== "application/pdf") {
                        throw new BadRequestException("Only PDF files are allowed");
                    }

                    // Delete old file if it exists and is being replaced
                    if (grant.opportunityPdf) {
                        try {
                            // Extract S3 key from URL
                            const s3Key = this.s3Service.extractS3KeyFromUrl(grant.opportunityPdf);
                            if (s3Key) {
                                await this.s3Service.deleteFile(s3Key);
                            }
                        } catch (deleteError: any) {
                            // Log error but don't fail the update if deletion fails
                            console.warn(`Failed to delete old file: ${deleteError?.message}`);
                        }
                    }

                    const s3Response = await this.s3Service.uploadFile(pdfFile);
                    opportunityPdf = s3Response.url;
                } catch (uploadError: any) {
                    throw new BadRequestException(
                        `Failed to upload PDF file: ${uploadError?.message || "Unknown error"}`,
                    );
                }
            }

            const updatedGrant = await this.prisma.internalGrantSource.update({
                where: { id },
                data: {
                    ...updateDto,
                    opportunityPdf,
                },
            });

            return this.mapToResponseDto(updatedGrant);
        } catch (error: any) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to update grant source: ${error?.message || "Unknown error"}`,
            );
        }
    }

    // ----------------- DELETE -----------------
    async remove(id: string): Promise<{ message: string }> {
        try {
            const grant = await this.prisma.internalGrantSource.findUnique({ where: { id } });
            if (!grant) {
                throw new NotFoundException(`Grant source with id ${id} not found`);
            }

            // Delete associated PDF file from S3 if it exists
            if (grant.opportunityPdf) {
                try {
                    // Extract S3 key from URL
                    const s3Key = this.s3Service.extractS3KeyFromUrl(grant.opportunityPdf);
                    if (s3Key) {
                        await this.s3Service.deleteFile(s3Key);
                    }
                } catch (deleteError: any) {
                    // Log error but don't fail the deletion if S3 deletion fails
                    console.warn(`Failed to delete S3 file: ${deleteError?.message}`);
                }
            }

            await this.prisma.internalGrantSource.delete({ where: { id } });
            return { message: "Grant source deleted successfully" };
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to delete grant source: ${error?.message || "Unknown error"}`,
            );
        }
    }

    // ----------------- MAP TO RESPONSE -----------------
    private mapToResponseDto(grant: any): InternalGrantSourceResponseDto {
        return {
            id: grant.id,
            organizationId: grant.organizationId,
            opportunityText: grant.opportunityText,
            opportunityUrl: grant.opportunityUrl,
            opportunityPdf: grant.opportunityPdf, // can remain null
            createdAt: grant.createdAt,
        };
    }
}
