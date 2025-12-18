import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";
import { CreateProposalDraftDto, ProposalDraftResponseDto, UpdateProposalDraftDto } from "./dto";

@Injectable()
export class ProposalDraftService {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        createProposalDraftDto: CreateProposalDraftDto,
    ): Promise<ProposalDraftResponseDto> {
        try {
            const organization = await this.prisma.organization.findUnique({
                where: { id: createProposalDraftDto.organizationId },
            });

            if (!organization) {
                throw new NotFoundException(
                    `Organization with ID ${createProposalDraftDto.organizationId} not found`,
                );
            }

            const grant = await this.prisma.grantOpportunity.findUnique({
                where: { id: createProposalDraftDto.grantId },
            });

            if (!grant) {
                throw new NotFoundException(
                    `Grant with ID ${createProposalDraftDto.grantId} not found`,
                );
            }

            if (grant.organizationId !== createProposalDraftDto.organizationId) {
                throw new BadRequestException(
                    "Grant does not belong to the specified organization",
                );
            }

            const proposalDraft = await this.prisma.proposalDraft.create({
                data: {
                    organizationId: createProposalDraftDto.organizationId,
                    grantId: createProposalDraftDto.grantId,
                    executiveSummary: createProposalDraftDto.executiveSummary,
                    introductionToOrganization: createProposalDraftDto.introductionToOrganization,
                    problemStatement: createProposalDraftDto.problemStatement,
                    goalsAndObjectives: createProposalDraftDto.goalsAndObjectives,
                    methodsAndActivities: createProposalDraftDto.methodsAndActivities,
                    evaluationPlan: createProposalDraftDto.evaluationPlan,
                    sustainabilityPlan: createProposalDraftDto.sustainabilityPlan,
                    budgetSummary: createProposalDraftDto.budgetSummary,
                    conclusion: createProposalDraftDto.conclusion,
                    status: createProposalDraftDto.status ?? false,
                },
            });

            return this.mapToResponseDto(proposalDraft);
        } catch (error) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException("Failed to create proposal draft");
        }
    }

    async findAll(organizationId?: string, grantId?: string): Promise<ProposalDraftResponseDto[]> {
        try {
            const where: any = {};

            if (organizationId) {
                where.organizationId = organizationId;
            }

            if (grantId) {
                where.grantId = grantId;
            }

            const proposalDrafts = await this.prisma.proposalDraft.findMany({
                where,
                orderBy: { createdAt: "desc" },
            });

            return proposalDrafts.map((draft) => this.mapToResponseDto(draft));
        } catch (_error) {
            throw new BadRequestException("Failed to fetch proposal drafts");
        }
    }

    async findOne(id: string): Promise<ProposalDraftResponseDto> {
        try {
            const proposalDraft = await this.prisma.proposalDraft.findUnique({
                where: { id },
                include: {
                    organization: true,
                    grant: true,
                },
            });

            if (!proposalDraft) {
                throw new NotFoundException(`Proposal draft with ID ${id} not found`);
            }

            return this.mapToResponseDto(proposalDraft);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException("Failed to fetch proposal draft");
        }
    }

    async update(
        id: string,
        updateProposalDraftDto: UpdateProposalDraftDto,
    ): Promise<ProposalDraftResponseDto> {
        try {
            const existingDraft = await this.prisma.proposalDraft.findUnique({
                where: { id },
            });

            if (!existingDraft) {
                throw new NotFoundException(`Proposal draft with ID ${id} not found`);
            }

            const updatedDraft = await this.prisma.proposalDraft.update({
                where: { id },
                data: {
                    executiveSummary: updateProposalDraftDto.executiveSummary,
                    introductionToOrganization: updateProposalDraftDto.introductionToOrganization,
                    problemStatement: updateProposalDraftDto.problemStatement,
                    goalsAndObjectives: updateProposalDraftDto.goalsAndObjectives,
                    methodsAndActivities: updateProposalDraftDto.methodsAndActivities,
                    evaluationPlan: updateProposalDraftDto.evaluationPlan,
                    sustainabilityPlan: updateProposalDraftDto.sustainabilityPlan,
                    budgetSummary: updateProposalDraftDto.budgetSummary,
                    conclusion: updateProposalDraftDto.conclusion,
                    status: updateProposalDraftDto.status,
                },
            });

            return this.mapToResponseDto(updatedDraft);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException("Failed to update proposal draft");
        }
    }

    async remove(id: string): Promise<void> {
        try {
            const existingDraft = await this.prisma.proposalDraft.findUnique({
                where: { id },
            });

            if (!existingDraft) {
                throw new NotFoundException(`Proposal draft with ID ${id} not found`);
            }

            await this.prisma.proposalDraft.delete({
                where: { id },
            });
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException("Failed to delete proposal draft");
        }
    }

    private mapToResponseDto(proposalDraft: any): ProposalDraftResponseDto {
        return {
            id: proposalDraft.id,
            organizationId: proposalDraft.organizationId,
            grantId: proposalDraft.grantId,
            executiveSummary: proposalDraft.executiveSummary,
            introductionToOrganization: proposalDraft.introductionToOrganization,
            problemStatement: proposalDraft.problemStatement,
            goalsAndObjectives: proposalDraft.goalsAndObjectives,
            methodsAndActivities: proposalDraft.methodsAndActivities,
            evaluationPlan: proposalDraft.evaluationPlan,
            sustainabilityPlan: proposalDraft.sustainabilityPlan,
            budgetSummary: proposalDraft.budgetSummary,
            conclusion: proposalDraft.conclusion,
            status: proposalDraft.status,
            createdAt: proposalDraft.createdAt,
        };
    }
}
