import {
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Query,
    Res,
    StreamableFile,
} from "@nestjs/common";
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import type { Response } from "express";
import { ExportService } from "./export.service";
import { ExportFormat } from "./dto/export-format.enum";

@ApiTags("Exports")
@Controller("exports")
export class ExportController {
    constructor(private readonly exportService: ExportService) {}

    @Post("proposal/:id")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: "Export proposal draft as PDF or DOCX",
        description: "Generates a downloadable PDF or DOCX file for the specified proposal draft",
    })
    @ApiParam({
        name: "id",
        description: "Proposal draft ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    @ApiQuery({
        name: "format",
        required: false,
        enum: ExportFormat,
        description: "Export format (pdf or docx)",
        example: ExportFormat.PDF,
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Proposal draft exported successfully",
        content: {
            "application/pdf": {
                schema: { type: "string", format: "binary" },
            },
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
                schema: { type: "string", format: "binary" },
            },
        },
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Proposal draft not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid format or export failed",
    })
    async exportProposal(
        @Param("id") id: string,
        @Query("format") format: ExportFormat = ExportFormat.PDF,
        @Res({ passthrough: true }) res: Response,
    ): Promise<StreamableFile> {
        try {
            const buffer = await this.exportService.exportProposal(id, format);

            const mimeType =
                format === ExportFormat.PDF
                    ? "application/pdf"
                    : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            const extension = format === ExportFormat.PDF ? "pdf" : "docx";
            const filename = `proposal-${id}.${extension}`;

            res.set({
                "Content-Type": mimeType,
                "Content-Disposition": `attachment; filename="${filename}"`,
                "Content-Length": buffer.length.toString(),
            });

            return new StreamableFile(buffer);
        } catch (error: any) {
            throw error;
        }
    }

    @Post("loi/:id")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: "Export letter of intent as PDF or DOCX",
        description: "Generates a downloadable PDF or DOCX file for the specified letter of intent",
    })
    @ApiParam({
        name: "id",
        description: "Letter of Intent ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    @ApiQuery({
        name: "format",
        required: false,
        enum: ExportFormat,
        description: "Export format (pdf or docx)",
        example: ExportFormat.PDF,
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Letter of intent exported successfully",
        content: {
            "application/pdf": {
                schema: { type: "string", format: "binary" },
            },
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
                schema: { type: "string", format: "binary" },
            },
        },
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Letter of intent not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid format or export failed",
    })
    async exportLoi(
        @Param("id") id: string,
        @Query("format") format: ExportFormat = ExportFormat.PDF,
        @Res({ passthrough: true }) res: Response,
    ): Promise<StreamableFile> {
        try {
            const buffer = await this.exportService.exportLoi(id, format);

            const mimeType =
                format === ExportFormat.PDF
                    ? "application/pdf"
                    : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            const extension = format === ExportFormat.PDF ? "pdf" : "docx";
            const filename = `loi-${id}.${extension}`;

            res.set({
                "Content-Type": mimeType,
                "Content-Disposition": `attachment; filename="${filename}"`,
                "Content-Length": buffer.length.toString(),
            });

            return new StreamableFile(buffer);
        } catch (error: any) {
            throw error;
        }
    }
}
