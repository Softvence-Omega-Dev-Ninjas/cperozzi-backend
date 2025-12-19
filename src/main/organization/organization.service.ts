import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { PrismaService } from "@common/prisma/prisma.service";
import { OrganizationResponseDto } from "./organization.response.dto";

@Injectable()
export class OrganizationService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createOrganizationDto: CreateOrganizationDto) {
        const organization = await this.prisma.organization.create({
            data: createOrganizationDto,
        });

        if (!organization) {
            throw new BadRequestException("Could not create organization");
        }
        return organization;
    }

    async findOne(id: string) {
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new NotFoundException("Organization not found");
        }

        return organization;
    }

    async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new NotFoundException("Organization not found");
        }

        const updateOrganizaiton = this.prisma.organization.update({
            where: { id },
            data: updateOrganizationDto,
        });

        return this.mapToRespnseDto(updateOrganizaiton);
    }

    remove(id: string) {
        return `This action removes a #${id} organization`;
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
