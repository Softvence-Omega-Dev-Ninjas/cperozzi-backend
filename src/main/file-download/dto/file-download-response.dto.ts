import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class FileDownloadResponseDto {
    @ApiProperty({
        description: "File download ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    id: string;

    @ApiProperty({
        description: "Name of the file",
        example: "proposal-draft.pdf",
    })
    fileName: string;

    @ApiPropertyOptional({
        description: "Path to the file",
        example: "/files/proposals/proposal-draft.pdf",
    })
    filePath?: string;

    @ApiPropertyOptional({
        description: "Type of the file",
        example: "application/pdf",
    })
    fileType?: string;

    @ApiPropertyOptional({
        description: "Email address (if provided)",
        example: "user@example.com",
    })
    email?: string;

    @ApiProperty({
        description: "Whether email has been sent",
        example: false,
    })
    emailSent: boolean;

    @ApiPropertyOptional({
        description: "Timestamp when email was sent",
        example: "2023-12-19T10:30:00.000Z",
    })
    emailSentAt?: Date;

    @ApiProperty({
        description: "Timestamp when file was downloaded",
        example: "2023-12-19T10:30:00.000Z",
    })
    downloadedAt: Date;

    @ApiProperty({
        description: "Creation timestamp",
        example: "2023-12-19T10:30:00.000Z",
    })
    createdAt: Date;
}
