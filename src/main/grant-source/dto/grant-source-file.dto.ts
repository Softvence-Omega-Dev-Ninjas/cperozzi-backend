import { ApiProperty } from "@nestjs/swagger";

export class GrantSourceFileDto {
    @ApiProperty({
        description: "S3 key of the file",
        example: "grant-sources/1234567890-abc123.pdf",
    })
    key: string;

    @ApiProperty({
        description: "File name",
        example: "1234567890-abc123.pdf",
    })
    fileName: string;

    @ApiProperty({
        description: "File size in bytes",
        example: 1024000,
    })
    size: number;

    @ApiProperty({
        description: "Last modified date",
        example: "2024-01-15T10:30:00.000Z",
    })
    lastModified: Date;

    @ApiProperty({
        description: "Full URL to access the file",
        example:
            "https://my-bucket.s3.ap-south-1.amazonaws.com/grant-sources/1234567890-abc123.pdf",
    })
    url: string;
}

export class GrantSourceFileListResponseDto {
    @ApiProperty({
        description: "List of files in the grant-sources folder",
        type: [GrantSourceFileDto],
    })
    files: GrantSourceFileDto[];

    @ApiProperty({
        description: "Total number of files",
        example: 10,
    })
    total: number;
}

export class DeleteGrantSourceFileDto {
    @ApiProperty({
        description: "Name of the file to delete",
        example: "1234567890-abc123.pdf",
    })
    fileName: string;
}

export class DeleteGrantSourceFileResponseDto {
    @ApiProperty({
        description: "Success message",
        example: "File deleted successfully",
    })
    message: string;

    @ApiProperty({
        description: "Name of the deleted file",
        example: "1234567890-abc123.pdf",
    })
    fileName: string;
}
