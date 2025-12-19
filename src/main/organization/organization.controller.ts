import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from "@nestjs/common";
import { OrganizationService } from "./organization.service";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from "@nestjs/swagger";
import { OrganizationResponseDto } from "./organization.response.dto";

@ApiTags("Organization")
@Controller("organization")
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    // ✅ CREATE
    @Post()
    @ApiOperation({ summary: "Create new Organization" })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Organization created successfully",
        type: OrganizationResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid input data",
    })
    async create(@Body() createOrganizationDto: CreateOrganizationDto) {
        return await this.organizationService.create(createOrganizationDto);
    }

    // ✅ GET BY ID
    @Get(":id")
    @ApiOperation({ summary: "Get organization by ID" })
    @ApiParam({ name: "id", example: "a1b2c3-d4e5" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Organization fetched successfully",
        type: OrganizationResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Organization not found",
    })
    async findOne(@Param("id") id: string) {
        return await this.organizationService.findOne(id);
    }

    // ✅ UPDATE
    @Patch(":id")
    @ApiOperation({ summary: "Update organization by ID" })
    @ApiParam({ name: "id", example: "a1b2c3-d4e5" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Organization updated successfully",
        type: OrganizationResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Organization not found",
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Invalid update data",
    })
    async update(@Param("id") id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
        return await this.organizationService.update(id, updateOrganizationDto);
    }

    // ❌ DELETE (no Swagger response as requested)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.organizationService.remove(id);
    }
}
