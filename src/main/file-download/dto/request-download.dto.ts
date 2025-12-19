import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RequestDownloadDto {
    @ApiProperty({
        description: "Name of the file to download",
        example: "proposal-draft.pdf",
    })
    @IsNotEmpty()
    @IsString()
    fileName: string;

    @ApiPropertyOptional({
        description: "Path to the file",
        example: "/files/proposals/proposal-draft.pdf",
    })
    @IsOptional()
    @IsString()
    filePath?: string;

    @ApiPropertyOptional({
        description: "Type of the file",
        example: "application/pdf",
    })
    @IsOptional()
    @IsString()
    fileType?: string;
}
