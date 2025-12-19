import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
} from "@nestjs/common";
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateLetterOfIntentDto, LetterOfIntentResponseDto, UpdateLetterOfIntentDto } from "./dto";
import { LetterOfIntentService } from "./letter-of-intent.service";

@ApiTags("Letters of Intent")
@Controller("letters-of-intent")
export class LetterOfIntentController {
    constructor(private readonly letterOfIntentService: LetterOfIntentService) {}

    @Post()
    @ApiOperation({ summary: "Create a new letter of intent" })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Letter of intent created successfully",
        type: LetterOfIntentResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Organization or Grant not found",
    })
    async create(
        @Body() createLetterOfIntentDto: CreateLetterOfIntentDto,
    ): Promise<LetterOfIntentResponseDto> {
        return this.letterOfIntentService.create(createLetterOfIntentDto);
    }

    @Get()
    @ApiOperation({ summary: "Get all letters of intent" })
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
        description: "List of letters of intent",
        type: [LetterOfIntentResponseDto],
    })
    async findAll(
        @Query("organizationId") organizationId?: string,
        @Query("grantId") grantId?: string,
    ): Promise<LetterOfIntentResponseDto[]> {
        return this.letterOfIntentService.findAll(organizationId, grantId);
    }

    @Get(":id")
    @ApiOperation({ summary: "Get a letter of intent by ID" })
    @ApiParam({
        name: "id",
        description: "Letter of intent ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Letter of intent found",
        type: LetterOfIntentResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Letter of intent not found",
    })
    async findOne(@Param("id") id: string): Promise<LetterOfIntentResponseDto> {
        return this.letterOfIntentService.findOne(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Update a letter of intent" })
    @ApiParam({
        name: "id",
        description: "Letter of intent ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Letter of intent updated successfully",
        type: LetterOfIntentResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Letter of intent not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    async update(
        @Param("id") id: string,
        @Body() updateLetterOfIntentDto: UpdateLetterOfIntentDto,
    ): Promise<LetterOfIntentResponseDto> {
        return this.letterOfIntentService.update(id, updateLetterOfIntentDto);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: "Delete a letter of intent" })
    @ApiParam({
        name: "id",
        description: "Letter of intent ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: "Letter of intent deleted successfully",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Letter of intent not found",
    })
    async remove(@Param("id") id: string): Promise<void> {
        return this.letterOfIntentService.remove(id);
    }
}
