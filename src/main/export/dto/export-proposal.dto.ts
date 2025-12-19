import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { ExportFormat } from "./export-format.enum";

export class ExportProposalDto {
    @ApiProperty({
        description: "Proposal draft ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @ApiPropertyOptional({
        description: "Export format (pdf or docx)",
        enum: ExportFormat,
        default: ExportFormat.PDF,
        example: ExportFormat.PDF,
    })
    @IsOptional()
    @IsEnum(ExportFormat)
    format?: ExportFormat;
}
