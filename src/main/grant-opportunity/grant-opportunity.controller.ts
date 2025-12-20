import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
} from "@nestjs/common";
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateGrantOpportunityDto } from "./dto/create-grant-opportunity.dto";
import { GrantOpportunityResponseDto } from "./dto/grant-opportunity.response.dto";
import { UpdateGrantOpportunityDto } from "./dto/update-grant-opportunity.dto";
import { GrantOpportunityService } from "./grant-opportunity.service";

@ApiTags("Grant Opportunity")
@Controller("grant-opportunity")
export class GrantOpportunityController {
    constructor(private readonly grantOpportunityService: GrantOpportunityService) {}

    @Post()
    @ApiOperation({ summary: "Create new Grant Opportunity" })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Grant opportunity created successfully",
        type: GrantOpportunityResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Organization or internal source not found",
    })
    async create(@Body() createGrantOpportunityDto: CreateGrantOpportunityDto) {
        return await this.grantOpportunityService.create(createGrantOpportunityDto);
    }

    @Get()
    @ApiOperation({ summary: "Get all Grant Opportunities" })
    @ApiQuery({
        name: "organizationId",
        required: false,
        description: "Filter by organization ID",
        example: "a1b2c3-d4e5-f6g7-h8i9",
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "List of all grant opportunities",
        type: [GrantOpportunityResponseDto],
    })
    async findAll(@Query("organizationId") organizationId?: string) {
        if (organizationId) {
            return await this.grantOpportunityService.findByOrganization(organizationId);
        }
        return await this.grantOpportunityService.findAll();
    }

    @Get(":id")
    @ApiOperation({ summary: "Get grant opportunity by ID" })
    @ApiParam({ name: "id", example: "a1b2c3-d4e5" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Grant opportunity fetched successfully",
        type: GrantOpportunityResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Grant opportunity not found",
    })
    async findOne(@Param("id") id: string) {
        return await this.grantOpportunityService.findOne(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Update grant opportunity by ID" })
    @ApiParam({ name: "id", example: "a1b2c3-d4e5" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Grant opportunity updated successfully",
        type: GrantOpportunityResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Grant opportunity not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid update data",
    })
    async update(
        @Param("id") id: string,
        @Body() updateGrantOpportunityDto: UpdateGrantOpportunityDto,
    ) {
        return await this.grantOpportunityService.update(id, updateGrantOpportunityDto);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Delete grant opportunity by ID" })
    @ApiParam({ name: "id", example: "a1b2c3-d4e5" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Grant opportunity deleted successfully",
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Grant opportunity not found",
    })
    async remove(@Param("id") id: string) {
        return await this.grantOpportunityService.remove(id);
    }
}
