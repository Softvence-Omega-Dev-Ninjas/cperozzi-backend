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
import { CreateProposalDraftDto, ProposalDraftResponseDto, UpdateProposalDraftDto } from "./dto";
import { ProposalDraftService } from "./proposal-draft.service";

@ApiTags("Proposal Drafts")
@Controller("proposal-drafts")
export class ProposalDraftController {
    constructor(private readonly proposalDraftService: ProposalDraftService) {}

    @Post()
    @ApiOperation({ summary: "Create a new proposal draft (from AI team)" })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Proposal draft created successfully",
        type: ProposalDraftResponseDto,
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
        @Body() createProposalDraftDto: CreateProposalDraftDto,
    ): Promise<ProposalDraftResponseDto> {
        return this.proposalDraftService.create(createProposalDraftDto);
    }

    @Get()
    @ApiOperation({ summary: "Get all proposal drafts" })
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
        description: "List of proposal drafts",
        type: [ProposalDraftResponseDto],
    })
    async findAll(
        @Query("organizationId") organizationId?: string,
        @Query("grantId") grantId?: string,
    ): Promise<ProposalDraftResponseDto[]> {
        return this.proposalDraftService.findAll(organizationId, grantId);
    }

    @Get(":id")
    @ApiOperation({ summary: "Get a proposal draft by ID" })
    @ApiParam({
        name: "id",
        description: "Proposal draft ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Proposal draft found",
        type: ProposalDraftResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Proposal draft not found",
    })
    async findOne(@Param("id") id: string): Promise<ProposalDraftResponseDto> {
        return this.proposalDraftService.findOne(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Update a proposal draft" })
    @ApiParam({
        name: "id",
        description: "Proposal draft ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Proposal draft updated successfully",
        type: ProposalDraftResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Proposal draft not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    async update(
        @Param("id") id: string,
        @Body() updateProposalDraftDto: UpdateProposalDraftDto,
    ): Promise<ProposalDraftResponseDto> {
        return this.proposalDraftService.update(id, updateProposalDraftDto);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: "Delete a proposal draft" })
    @ApiParam({
        name: "id",
        description: "Proposal draft ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: "Proposal draft deleted successfully",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Proposal draft not found",
    })
    async remove(@Param("id") id: string): Promise<void> {
        return this.proposalDraftService.remove(id);
    }
}
