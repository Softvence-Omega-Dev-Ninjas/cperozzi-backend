import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { PrismaService } from "@common/prisma/prisma.service";
import { OrganizationResponseDto } from "./organization.response.dto";

@Injectable()
export class OrganizationService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createOrganizationDto: CreateOrganizationDto) {
        try {
            const organization = await this.prisma.organization.create({
                data: createOrganizationDto,
            });

            return this.mapToRespnseDto(organization);
        } catch (error: any) {
            throw new BadRequestException(
                `Failed to create organization: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async findAll() {
        const organizations = await this.prisma.organization.findMany({
            orderBy: { createdAt: "desc" },
        });
        return organizations.map((org) => this.mapToRespnseDto(org));
    }

    async findOne(id: string) {
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new NotFoundException("Organization not found");
        }

        return this.mapToRespnseDto(organization);
    }

    async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new NotFoundException("Organization not found");
        }

        const updatedOrganization = await this.prisma.organization.update({
            where: { id },
            data: updateOrganizationDto,
        });

        return this.mapToRespnseDto(updatedOrganization);
    }

    async remove(id: string) {
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new NotFoundException("Organization not found");
        }

        await this.prisma.organization.delete({
            where: { id },
        });

        return { message: "Organization deleted successfully" };
    }

    private mapToRespnseDto(organization: any): OrganizationResponseDto {
        return {
            id: organization.id,
            organizationName: organization.organizationName,
            organizationWebsite: organization.organizationWebsite,
            missionStatement: organization.missionStatement,
            refinedMissionStatement: organization.refinedMissionStatement,
            corePurpose: organization.corePurpose,
            typeOfWork: organization.typeOfWork,
            goalsAspirations: organization.goalsAspirations,
            programs: organization.programs,
            achievements: organization.achievements,
            budget: organization.budget,
            evaluation: organization.evaluation,
            noOfGrants: organization.noOfGrants,
            sharedLink: organization.sharedLink,
            isGrant: organization.isGrant,
            createdAt: organization.createdAt,
        };
    }
}
