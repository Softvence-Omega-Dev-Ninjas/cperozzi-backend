import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FileDownloadResponseDto, RequestDownloadDto, SubmitEmailDto } from "./dto";
import { FileDownloadService } from "./file-download.service";

@ApiTags("File Downloads")
@Controller("file-downloads")
export class FileDownloadController {
    constructor(private readonly fileDownloadService: FileDownloadService) {}

    @Post("request")
    @ApiOperation({
        summary: "Request a file download (triggers email prompt)",
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Download request created successfully",
        type: FileDownloadResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    async requestDownload(
        @Body() requestDownloadDto: RequestDownloadDto,
    ): Promise<FileDownloadResponseDto> {
        return this.fileDownloadService.requestDownload(requestDownloadDto);
    }

    @Post("submit-email")
    @ApiOperation({
        summary: "Submit email for file download (sends email automatically)",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Email submitted and sent successfully",
        type: FileDownloadResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data or email already sent",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "File download not found",
    })
    async submitEmail(@Body() submitEmailDto: SubmitEmailDto): Promise<FileDownloadResponseDto> {
        return this.fileDownloadService.submitEmail(submitEmailDto);
    }

    @Get()
    @ApiOperation({ summary: "Get all file downloads" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "List of file downloads",
        type: [FileDownloadResponseDto],
    })
    async findAll(): Promise<FileDownloadResponseDto[]> {
        return this.fileDownloadService.findAll();
    }

    @Get(":id")
    @ApiOperation({ summary: "Get a file download by ID" })
    @ApiParam({
        name: "id",
        description: "File download ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "File download found",
        type: FileDownloadResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "File download not found",
    })
    async findOne(@Param("id") id: string): Promise<FileDownloadResponseDto> {
        return this.fileDownloadService.findOne(id);
    }
}
