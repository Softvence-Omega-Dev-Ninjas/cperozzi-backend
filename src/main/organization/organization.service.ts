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
        try {
            const organizations = await this.prisma.organization.findMany({
                orderBy: { createdAt: "desc" },
            });
            return organizations.map((org) => this.mapToRespnseDto(org));
        } catch (error) {
            throw new BadRequestException(`Failed to get organizations`);
        }
    }

    async findOne(id: string) {
        try {
            
            const organization = await this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new NotFoundException("Organization not found");
        }

        return this.mapToRespnseDto(organization);
        } catch (error) {
              throw new BadRequestException(`Failed to get organization by ${id} `);
        }
    }

    async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
       try {
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
       } catch (error) {
          throw new BadRequestException(`Failed to update organizaition by ${id}`);
       }
    }

    async remove(id: string) {
     try {
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
     } catch (error) {
          throw new BadRequestException(`Failed to delete organizations`);
     }
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
