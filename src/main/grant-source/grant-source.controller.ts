import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { GrantSourceService } from "./grant-source.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateInternalGrantSourceDto } from "./dto/create-grant-source.dto";
import { UpdateInternalGrantSourceDto } from "./dto/update-grant-source.dto";
import { InternalGrantSourceResponseDto } from "./grant-source.response.dto";

@ApiTags("Grant Sources")
@Controller("grant-source")
export class GrantSourceController {
  constructor(private readonly grantSourceService: GrantSourceService) {}

  // ----------------- CREATE -----------------
  @ApiOperation({ summary: "Create a new Grant Source" })
  @ApiResponse({
    status: 201,
    description: "The grant source has been successfully created.",
    type: InternalGrantSourceResponseDto,
  })
  @ApiResponse({ status: 400, description: "Bad Request." })
  @Post()
  async create(@Body() createDto: CreateInternalGrantSourceDto): Promise<InternalGrantSourceResponseDto> {
    return this.grantSourceService.create(createDto);
  }

  // // ----------------- GET ALL -----------------
  // @ApiOperation({ summary: "Get all Grant Sources" })
  // @ApiResponse({
  //   status: 200,
  //   description: "List of all grant sources.",
  //   type: [InternalGrantSourceResponseDto],
  // })
  // @Get()
  // async findAll(): Promise<InternalGrantSourceResponseDto[]> {
  //   return this.grantSourceService.findAll();
  // }

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
  @ApiOperation({ summary: "Update a Grant Source by ID" })
  @ApiResponse({
    status: 200,
    description: "The grant source has been successfully updated.",
    type: InternalGrantSourceResponseDto,
  })
  @ApiResponse({ status: 400, description: "Bad Request." })
  @ApiResponse({ status: 404, description: "Grant source not found." })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateDto: UpdateInternalGrantSourceDto
  ): Promise<InternalGrantSourceResponseDto> {
    return this.grantSourceService.update(id, updateDto);
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
