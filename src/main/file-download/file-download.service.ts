import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { AppMailService } from "../../common/mail/mail.service";
import { PrismaService } from "../../common/prisma/prisma.service";
import { FileDownloadResponseDto, RequestDownloadDto, SubmitEmailDto } from "./dto";

@Injectable()
export class FileDownloadService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly mailService: AppMailService,
    ) {}

    async requestDownload(
        requestDownloadDto: RequestDownloadDto,
    ): Promise<FileDownloadResponseDto> {
        try {
            const fileDownload = await this.prisma.fileDownload.create({
                data: {
                    fileName: requestDownloadDto.fileName,
                    filePath: requestDownloadDto.filePath,
                    fileType: requestDownloadDto.fileType,
                },
            });

            return this.mapToResponseDto(fileDownload);
        } catch (error: any) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to create download request: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async submitEmail(submitEmailDto: SubmitEmailDto): Promise<FileDownloadResponseDto> {
        try {
            const fileDownload = await this.prisma.fileDownload.findUnique({
                where: { id: submitEmailDto.downloadId },
            });

            if (!fileDownload) {
                throw new NotFoundException(
                    `File download with ID ${submitEmailDto.downloadId} not found`,
                );
            }

            if (fileDownload.emailSent) {
                throw new BadRequestException("Email has already been sent for this download");
            }

            try {
                await this.mailService.sendFileDownloadEmail(
                    submitEmailDto.email,
                    fileDownload.fileName,
                    fileDownload.filePath || undefined,
                );
            } catch (emailError: any) {
                throw new BadRequestException(
                    `Failed to send email: ${emailError?.message || "Unknown error"}`,
                );
            }

            try {
                const updatedDownload = await this.prisma.fileDownload.update({
                    where: { id: submitEmailDto.downloadId },
                    data: {
                        email: submitEmailDto.email,
                        emailSent: true,
                        emailSentAt: new Date(),
                    },
                });

                return this.mapToResponseDto(updatedDownload);
            } catch (updateError: any) {
                throw new BadRequestException(
                    `Failed to update download record: ${updateError?.message || "Unknown error"}`,
                );
            }
        } catch (error: any) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to submit email and send file: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async findAll(): Promise<FileDownloadResponseDto[]> {
        try {
            const downloads = await this.prisma.fileDownload.findMany({
                orderBy: { downloadedAt: "desc" },
            });

            return downloads.map((download) => this.mapToResponseDto(download));
        } catch (error: any) {
            throw new BadRequestException(
                `Failed to fetch file downloads: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async findOne(id: string): Promise<FileDownloadResponseDto> {
        try {
            const fileDownload = await this.prisma.fileDownload.findUnique({
                where: { id },
            });

            if (!fileDownload) {
                throw new NotFoundException(`File download with ID ${id} not found`);
            }

            return this.mapToResponseDto(fileDownload);
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to fetch file download: ${error?.message || "Unknown error"}`,
            );
        }
    }

    private mapToResponseDto(fileDownload: any): FileDownloadResponseDto {
        return {
            id: fileDownload.id,
            fileName: fileDownload.fileName,
            filePath: fileDownload.filePath,
            fileType: fileDownload.fileType,
            email: fileDownload.email,
            emailSent: fileDownload.emailSent,
            emailSentAt: fileDownload.emailSentAt,
            downloadedAt: fileDownload.downloadedAt,
            createdAt: fileDownload.createdAt,
        };
    }
}
