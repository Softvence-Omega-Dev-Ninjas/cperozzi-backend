import { Module } from "@nestjs/common";
import { S3Module } from "@softvence/s3";
import { S3WrapperService } from "./s3-wrapper.service";

@Module({
    imports: [
        S3Module.forRoot({
            region: process.env.AWS_BUCKET_REGION!,
            bucket: process.env.AWS_S3_BUCKET_NAME || process.env.AWS_BUCKET_NAME!,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            cache: {
                isCache: true,
                options: {
                    stdTTL: 86400,
                    checkperiod: 120,
                },
            },
        }),
    ],
    providers: [S3WrapperService],
    exports: [S3WrapperService],
})
export class S3WrapperModule {}
