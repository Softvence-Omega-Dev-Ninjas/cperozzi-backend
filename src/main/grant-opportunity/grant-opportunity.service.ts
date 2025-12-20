import { PrismaService } from "@common/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateGrantOpportunityDto } from "./dto/create-grant-opportunity.dto";
import { GrantOpportunityResponseDto } from "./dto/grant-opportunity.response.dto";
import { UpdateGrantOpportunityDto } from "./dto/update-grant-opportunity.dto";

@Injectable()
export class GrantOpportunityService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createGrantOpportunityDto: CreateGrantOpportunityDto) {
        try {
            const organization = await this.prisma.organization.findUnique({
                where: { id: createGrantOpportunityDto.organizationId },
            });

            if (!organization) {
                throw new NotFoundException("Organization not found");
            }

            if (createGrantOpportunityDto.internalSourceId) {
                const internalSource = await this.prisma.internalGrantSource.findUnique({
                    where: { id: createGrantOpportunityDto.internalSourceId },
                });

                if (!internalSource) {
                    throw new NotFoundException("Internal grant source not found");
                }
            }

            const grantOpportunity = await this.prisma.grantOpportunity.create({
                data: {
                    ...createGrantOpportunityDto,
                    deadline: createGrantOpportunityDto.deadline
                        ? new Date(createGrantOpportunityDto.deadline)
                        : null,
                    amountUsd: createGrantOpportunityDto.amountUsd
                        ? createGrantOpportunityDto.amountUsd
                        : null,
                },
                include: {
                    organization: true,
                    internalSource: true,
                },
            });

            return this.mapToResponseDto(grantOpportunity);
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to create grant opportunity: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async findAll() {
        const grantOpportunities = await this.prisma.grantOpportunity.findMany({
            include: {
                organization: true,
                internalSource: true,
            },
            orderBy: { createdAt: "desc" },
        });
        return grantOpportunities.map((go) => this.mapToResponseDto(go));
    }

    async findOne(id: string) {
        const grantOpportunity = await this.prisma.grantOpportunity.findUnique({
            where: { id },
            include: {
                organization: true,
                internalSource: true,
            },
        });

        if (!grantOpportunity) {
            throw new NotFoundException("Grant opportunity not found");
        }

        return this.mapToResponseDto(grantOpportunity);
    }

    async findByOrganization(organizationId: string) {
        const grantOpportunities = await this.prisma.grantOpportunity.findMany({
            where: { organizationId },
            include: {
                organization: true,
                internalSource: true,
            },
            orderBy: { createdAt: "desc" },
        });
        return grantOpportunities.map((go) => this.mapToResponseDto(go));
    }

    async update(id: string, updateGrantOpportunityDto: UpdateGrantOpportunityDto) {
        const grantOpportunity = await this.prisma.grantOpportunity.findUnique({
            where: { id },
        });

        if (!grantOpportunity) {
            throw new NotFoundException("Grant opportunity not found");
        }

        if (updateGrantOpportunityDto.organizationId) {
            const organization = await this.prisma.organization.findUnique({
                where: { id: updateGrantOpportunityDto.organizationId },
            });

            if (!organization) {
                throw new NotFoundException("Organization not found");
            }
        }

        if (updateGrantOpportunityDto.internalSourceId) {
            const internalSource = await this.prisma.internalGrantSource.findUnique({
                where: { id: updateGrantOpportunityDto.internalSourceId },
            });

            if (!internalSource) {
                throw new NotFoundException("Internal grant source not found");
            }
        }

        const updateData: any = { ...updateGrantOpportunityDto };

        if (updateGrantOpportunityDto.deadline) {
            updateData.deadline = new Date(updateGrantOpportunityDto.deadline);
        }

        const updatedGrantOpportunity = await this.prisma.grantOpportunity.update({
            where: { id },
            data: updateData,
            include: {
                organization: true,
                internalSource: true,
            },
        });

        return this.mapToResponseDto(updatedGrantOpportunity);
    }

    async remove(id: string) {
        const grantOpportunity = await this.prisma.grantOpportunity.findUnique({
            where: { id },
        });

        if (!grantOpportunity) {
            throw new NotFoundException("Grant opportunity not found");
        }

        await this.prisma.grantOpportunity.delete({
            where: { id },
        });

        return { message: "Grant opportunity deleted successfully" };
    }

    private mapToResponseDto(grantOpportunity: any): GrantOpportunityResponseDto {
        return {
            id: grantOpportunity.id,
            organizationId: grantOpportunity.organizationId,
            funderName: grantOpportunity.funderName,
            focusArea: grantOpportunity.focusArea,
            deadline: grantOpportunity.deadline,
            amountUsd: grantOpportunity.amountUsd ? Number(grantOpportunity.amountUsd) : undefined,
            eligibility: grantOpportunity.eligibility,
            attachmentsRequired: grantOpportunity.attachmentsRequired,
            applicationFormat: grantOpportunity.applicationFormat,
            funderProfileUrl: grantOpportunity.funderProfileUrl,
            recipGsProfileLink: grantOpportunity.recipGsProfileLink,
            source: grantOpportunity.source,
            internalSourceId: grantOpportunity.internalSourceId,
            grantType: grantOpportunity.grantType,
            createdAt: grantOpportunity.createdAt,
        };
    }
}
