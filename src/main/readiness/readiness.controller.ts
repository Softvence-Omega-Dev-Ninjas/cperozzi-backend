import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    HttpCode,
    HttpStatus,
} from "@nestjs/common";
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiQuery,
    ApiBearerAuth,
} from "@nestjs/swagger";
import { ReadinessService } from "./readiness.service";
import { CreateReadinessDto, UpdateReadinessDto, ReadinessResponseDto } from "./dto";

@ApiTags("Readiness Scores")
@ApiBearerAuth()
@Controller("readiness")
export class ReadinessController {
    constructor(private readonly readinessService: ReadinessService) {}

    @Post()
    @ApiOperation({ summary: "Create a new readiness score" })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Readiness score created successfully",
        type: ReadinessResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Organization or Grant not found",
    })
    async create(@Body() createReadinessDto: CreateReadinessDto): Promise<ReadinessResponseDto> {
        return this.readinessService.create(createReadinessDto);
    }

    @Get()
    @ApiOperation({ summary: "Get all readiness scores" })
    @ApiQuery({
        name: "organizationId",
        required: false,
        description: "Filter by organization ID",
    })
    @ApiQuery({
        name: "grantId",
        required: false,
        description: "Filter by grant ID",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "List of readiness scores",
        type: [ReadinessResponseDto],
    })
    async findAll(
        @Query("organizationId") organizationId?: string,
        @Query("grantId") grantId?: string,
    ): Promise<ReadinessResponseDto[]> {
        return this.readinessService.findAll(organizationId, grantId);
    }

    @Get(":id")
    @ApiOperation({ summary: "Get a readiness score by ID" })
    @ApiParam({
        name: "id",
        description: "Readiness score ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Readiness score found",
        type: ReadinessResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Readiness score not found",
    })
    async findOne(@Param("id") id: string): Promise<ReadinessResponseDto> {
        return this.readinessService.findOne(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Update a readiness score" })
    @ApiParam({
        name: "id",
        description: "Readiness score ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Readiness score updated successfully",
        type: ReadinessResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Readiness score not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    async update(
        @Param("id") id: string,
        @Body() updateReadinessDto: UpdateReadinessDto,
    ): Promise<ReadinessResponseDto> {
        return this.readinessService.update(id, updateReadinessDto);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: "Delete a readiness score" })
    @ApiParam({
        name: "id",
        description: "Readiness score ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: "Readiness score deleted successfully",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Readiness score not found",
    })
    async remove(@Param("id") id: string): Promise<void> {
        return this.readinessService.remove(id);
    }
}
