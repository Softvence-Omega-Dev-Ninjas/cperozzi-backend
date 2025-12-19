import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UploadedFile,
    UseInterceptors,
    ParseFilePipe,
    MaxFileSizeValidator,
    FileTypeValidator,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiConsumes, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GrantSourceService } from "./grant-source.service";
import { CreateInternalGrantSourceDto } from "./dto/create-grant-source.dto";
import { UpdateInternalGrantSourceDto } from "./dto/update-grant-source.dto";
import { InternalGrantSourceResponseDto } from "./grant-source.response.dto";
import {
    GrantSourceFileListResponseDto,
    DeleteGrantSourceFileResponseDto,
} from "./dto/grant-source-file.dto";

@ApiTags("Grant Sources")
@Controller("grant-source")
export class GrantSourceController {
    constructor(private readonly grantSourceService: GrantSourceService) {}

    // ----------------- CREATE -----------------
    @Post()
    @UseInterceptors(FileInterceptor("pdf"))
    @ApiOperation({ summary: "Create a new Grant Source with optional PDF upload" })
    @ApiConsumes("multipart/form-data")
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                organizationId: {
                    type: "string",
                    format: "uuid",
                    description: "Organization ID",
                },
                opportunityText: {
                    type: "string",
                    description: "Text description of the opportunity",
                },
                opportunityUrl: {
                    type: "string",
                    format: "uri",
                    description: "URL link for the opportunity",
                },
                pdf: {
                    type: "string",
                    format: "binary",
                    description: "PDF file to upload (optional)",
                },
            },
            required: ["organizationId"],
        },
    })
    @ApiResponse({
        status: 201,
        description: "The grant source has been successfully created.",
        type: InternalGrantSourceResponseDto,
    })
    @ApiResponse({ status: 400, description: "Bad Request." })
    async create(
        @Body() createDto: CreateInternalGrantSourceDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), // 10MB
                    new FileTypeValidator({ fileType: "application/pdf" }),
                ],
                fileIsRequired: false,
            }),
        )
        pdfFile?: {
            fieldname: string;
            originalname: string;
            encoding: string;
            mimetype: string;
            size: number;
            buffer: Buffer;
        },
    ): Promise<InternalGrantSourceResponseDto> {
        return this.grantSourceService.create(createDto, pdfFile);
    }

    // ----------------- GET ALL -----------------
    @Get()
    @ApiOperation({ summary: "Get all Grant Sources" })
    @ApiResponse({
        status: 200,
        description: "List of all grant sources.",
        type: [InternalGrantSourceResponseDto],
    })
    async findAll(): Promise<InternalGrantSourceResponseDto[]> {
        return this.grantSourceService.findAll();
    }

    // ----------------- LIST FILES IN GRANT-SOURCES FOLDER -----------------
    @Get("files/list")
    @ApiOperation({ summary: "Get all files from grant-sources folder in AWS S3" })
    @ApiResponse({
        status: 200,
        description: "List of all files in the grant-sources folder.",
        type: GrantSourceFileListResponseDto,
    })
    async listGrantSourceFiles(): Promise<GrantSourceFileListResponseDto> {
        return this.grantSourceService.listGrantSourceFiles();
    }

    // ----------------- GET ONE -----------------
    @ApiOperation({ summary: "Get a single Grant Source by ID" })
    @ApiResponse({
        status: 200,
        description: "The grant source.",
        type: InternalGrantSourceResponseDto,
    })
    @ApiResponse({ status: 404, description: "Grant source not found." })
    @Get(":id")
    async findOne(@Param("id") id: string): Promise<InternalGrantSourceResponseDto> {
        return this.grantSourceService.findOne(id);
    }

    // ----------------- UPDATE -----------------
    @Patch(":id")
    @UseInterceptors(FileInterceptor("pdf"))
    @ApiOperation({ summary: "Update a Grant Source by ID with optional PDF upload" })
    @ApiConsumes("multipart/form-data")
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                opportunityText: {
                    type: "string",
                    description: "Text description of the opportunity",
                },
                opportunityUrl: {
                    type: "string",
                    format: "uri",
                    description: "URL link for the opportunity",
                },
                opportunityPdf: {
                    type: "string",
                    description: "PDF URL (if not uploading a file)",
                },
                pdf: {
                    type: "string",
                    format: "binary",
                    description: "PDF file to upload (optional)",
                },
            },
        },
    })
    @ApiResponse({
        status: 200,
        description: "The grant source has been successfully updated.",
        type: InternalGrantSourceResponseDto,
    })
    @ApiResponse({ status: 400, description: "Bad Request." })
    @ApiResponse({ status: 404, description: "Grant source not found." })
    async update(
        @Param("id") id: string,
        @Body() updateDto: UpdateInternalGrantSourceDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), // 10MB
                    new FileTypeValidator({ fileType: "application/pdf" }),
                ],
                fileIsRequired: false,
            }),
        )
        pdfFile?: {
            fieldname: string;
            originalname: string;
            encoding: string;
            mimetype: string;
            size: number;
            buffer: Buffer;
        },
    ): Promise<InternalGrantSourceResponseDto> {
        return this.grantSourceService.update(id, updateDto, pdfFile);
    }

    // ----------------- DELETE FILE BY NAME FROM GRANT-SOURCES FOLDER -----------------
    @Delete("files/:fileName")
    @ApiOperation({ summary: "Delete a file by filename from grant-sources folder in AWS S3" })
    @ApiResponse({
        status: 200,
        description: "The file has been successfully deleted.",
        type: DeleteGrantSourceFileResponseDto,
    })
    @ApiResponse({ status: 404, description: "File not found." })
    async deleteGrantSourceFileByName(
        @Param("fileName") fileName: string,
    ): Promise<DeleteGrantSourceFileResponseDto> {
        return this.grantSourceService.deleteGrantSourceFileByName(fileName);
    }

    // ----------------- DELETE -----------------
    @ApiOperation({ summary: "Delete a Grant Source by ID" })
    @ApiResponse({
        status: 200,
        description: "The grant source has been successfully deleted.",
    })
    @ApiResponse({ status: 404, description: "Grant source not found." })
    @Delete(":id")
    async remove(@Param("id") id: string): Promise<{ message: string }> {
        return this.grantSourceService.remove(id);
    }
}
