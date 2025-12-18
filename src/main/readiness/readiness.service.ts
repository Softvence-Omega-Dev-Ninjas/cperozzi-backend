import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";
import { CreateReadinessDto, ReadinessResponseDto, UpdateReadinessDto } from "./dto";

@Injectable()
export class ReadinessService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createReadinessDto: CreateReadinessDto): Promise<ReadinessResponseDto> {
        const organization = await this.prisma.organization.findUnique({
            where: { id: createReadinessDto.organizationId },
        });

        if (!organization) {
            throw new NotFoundException(
                `Organization with ID ${createReadinessDto.organizationId} not found`,
            );
        }

        const grant = await this.prisma.grantOpportunity.findUnique({
            where: { id: createReadinessDto.grantId },
        });

        if (!grant) {
            throw new NotFoundException(`Grant with ID ${createReadinessDto.grantId} not found`);
        }

        if (grant.organizationId !== createReadinessDto.organizationId) {
            throw new BadRequestException("Grant does not belong to the specified organization");
        }

        const readinessScore = await this.prisma.readinessScore.create({
            data: {
                organizationId: createReadinessDto.organizationId,
                grantId: createReadinessDto.grantId,
                readinessScore: createReadinessDto.readinessScore,
                strengths: createReadinessDto.strengths,
                improvementAreas: createReadinessDto.improvementAreas,
            },
        });

        return this.mapToResponseDto(readinessScore);
    }

    async findAll(organizationId?: string, grantId?: string): Promise<ReadinessResponseDto[]> {
        const where: any = {};

        if (organizationId) {
            where.organizationId = organizationId;
        }

        if (grantId) {
            where.grantId = grantId;
        }

        const readinessScores = await this.prisma.readinessScore.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });

        return readinessScores.map((score) => this.mapToResponseDto(score));
    }

    async findOne(id: string): Promise<ReadinessResponseDto> {
        const readinessScore = await this.prisma.readinessScore.findUnique({
            where: { id },
            include: {
                organization: true,
                grant: true,
            },
        });

        if (!readinessScore) {
            throw new NotFoundException(`Readiness score with ID ${id} not found`);
        }

        return this.mapToResponseDto(readinessScore);
    }

    async update(
        id: string,
        updateReadinessDto: UpdateReadinessDto,
    ): Promise<ReadinessResponseDto> {
        const existingScore = await this.prisma.readinessScore.findUnique({
            where: { id },
        });

        if (!existingScore) {
            throw new NotFoundException(`Readiness score with ID ${id} not found`);
        }

        const updatedScore = await this.prisma.readinessScore.update({
            where: { id },
            data: {
                readinessScore: updateReadinessDto.readinessScore,
                strengths: updateReadinessDto.strengths,
                improvementAreas: updateReadinessDto.improvementAreas,
            },
        });

        return this.mapToResponseDto(updatedScore);
    }

    async remove(id: string): Promise<void> {
        const existingScore = await this.prisma.readinessScore.findUnique({
            where: { id },
        });

        if (!existingScore) {
            throw new NotFoundException(`Readiness score with ID ${id} not found`);
        }

        await this.prisma.readinessScore.delete({
            where: { id },
        });
    }

    private mapToResponseDto(readinessScore: any): ReadinessResponseDto {
        return {
            id: readinessScore.id,
            organizationId: readinessScore.organizationId,
            grantId: readinessScore.grantId,
            readinessScore: readinessScore.readinessScore,
            strengths: readinessScore.strengths,
            improvementAreas: readinessScore.improvementAreas,
            createdAt: readinessScore.createdAt,
        };
    }
}
