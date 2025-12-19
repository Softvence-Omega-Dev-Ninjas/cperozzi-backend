import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";
import { CreateLetterOfIntentDto, LetterOfIntentResponseDto, UpdateLetterOfIntentDto } from "./dto";

@Injectable()
export class LetterOfIntentService {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        createLetterOfIntentDto: CreateLetterOfIntentDto,
    ): Promise<LetterOfIntentResponseDto> {
        try {
            const organization = await this.prisma.organization.findUnique({
                where: { id: createLetterOfIntentDto.organizationId },
            });

            if (!organization) {
                throw new NotFoundException(
                    `Organization with ID ${createLetterOfIntentDto.organizationId} not found`,
                );
            }

            const grant = await this.prisma.grantOpportunity.findUnique({
                where: { id: createLetterOfIntentDto.grantId },
            });

            if (!grant) {
                throw new NotFoundException(
                    `Grant with ID ${createLetterOfIntentDto.grantId} not found`,
                );
            }

            if (grant.organizationId !== createLetterOfIntentDto.organizationId) {
                throw new BadRequestException(
                    "Grant does not belong to the specified organization",
                );
            }

            const letterOfIntent = await this.prisma.letterOfIntent.create({
                data: {
                    organizationId: createLetterOfIntentDto.organizationId,
                    grantId: createLetterOfIntentDto.grantId,
                    introduction: createLetterOfIntentDto.introduction,
                    organizationalSummary: createLetterOfIntentDto.organizationalSummary,
                    projectOverview: createLetterOfIntentDto.projectOverview,
                    fundingRequest: createLetterOfIntentDto.fundingRequest,
                    closingStatement: createLetterOfIntentDto.closingStatement,
                },
            });

            return this.mapToResponseDto(letterOfIntent);
        } catch (error: any) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to create letter of intent: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async findAll(organizationId?: string, grantId?: string): Promise<LetterOfIntentResponseDto[]> {
        try {
            const where: any = {};

            if (organizationId) {
                where.organizationId = organizationId;
            }

            if (grantId) {
                where.grantId = grantId;
            }

            const lettersOfIntent = await this.prisma.letterOfIntent.findMany({
                where,
                orderBy: { createdAt: "desc" },
            });

            return lettersOfIntent.map((letter) => this.mapToResponseDto(letter));
        } catch (error: any) {
            throw new BadRequestException(
                `Failed to fetch letters of intent: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async findOne(id: string): Promise<LetterOfIntentResponseDto> {
        try {
            const letterOfIntent = await this.prisma.letterOfIntent.findUnique({
                where: { id },
                include: {
                    organization: true,
                    grant: true,
                },
            });

            if (!letterOfIntent) {
                throw new NotFoundException(`Letter of intent with ID ${id} not found`);
            }

            return this.mapToResponseDto(letterOfIntent);
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to fetch letter of intent: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async update(
        id: string,
        updateLetterOfIntentDto: UpdateLetterOfIntentDto,
    ): Promise<LetterOfIntentResponseDto> {
        try {
            const existingLetter = await this.prisma.letterOfIntent.findUnique({
                where: { id },
            });

            if (!existingLetter) {
                throw new NotFoundException(`Letter of intent with ID ${id} not found`);
            }

            const updatedLetter = await this.prisma.letterOfIntent.update({
                where: { id },
                data: {
                    introduction: updateLetterOfIntentDto.introduction,
                    organizationalSummary: updateLetterOfIntentDto.organizationalSummary,
                    projectOverview: updateLetterOfIntentDto.projectOverview,
                    fundingRequest: updateLetterOfIntentDto.fundingRequest,
                    closingStatement: updateLetterOfIntentDto.closingStatement,
                },
            });

            return this.mapToResponseDto(updatedLetter);
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to update letter of intent: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async remove(id: string): Promise<void> {
        try {
            const existingLetter = await this.prisma.letterOfIntent.findUnique({
                where: { id },
            });

            if (!existingLetter) {
                throw new NotFoundException(`Letter of intent with ID ${id} not found`);
            }

            await this.prisma.letterOfIntent.delete({
                where: { id },
            });
        } catch (error: any) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to delete letter of intent: ${error?.message || "Unknown error"}`,
            );
        }
    }

    private mapToResponseDto(letterOfIntent: any): LetterOfIntentResponseDto {
        return {
            id: letterOfIntent.id,
            organizationId: letterOfIntent.organizationId,
            grantId: letterOfIntent.grantId,
            introduction: letterOfIntent.introduction,
            organizationalSummary: letterOfIntent.organizationalSummary,
            projectOverview: letterOfIntent.projectOverview,
            fundingRequest: letterOfIntent.fundingRequest
                ? Number(letterOfIntent.fundingRequest)
                : undefined,
            closingStatement: letterOfIntent.closingStatement,
            createdAt: letterOfIntent.createdAt,
        };
    }
}
