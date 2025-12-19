import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@common/prisma/prisma.service";
import { CreateInternalGrantSourceDto } from "./dto/create-grant-source.dto";
import { UpdateInternalGrantSourceDto } from "./dto/update-grant-source.dto";
import { InternalGrantSourceResponseDto } from "./grant-source.response.dto";

@Injectable()
export class GrantSourceService {
    constructor(private readonly prisma: PrismaService) {}

    // ----------------- CREATE -----------------
    async create(createDto: CreateInternalGrantSourceDto): Promise<InternalGrantSourceResponseDto> {
        // Validate: exactly one of text/url
        const fields = [createDto.opportunityText, createDto.opportunityUrl];
        const filledCount = fields.filter((f) => !!f).length;
        if (filledCount !== 1) {
            throw new BadRequestException(
                "Exactly one of opportunityText or opportunityUrl must be provided.",
            );
        }

        const grantSource = await this.prisma.internalGrantSource.create({
            data: createDto,
        });

        return this.mapToResponseDto(grantSource);
    }

    // // ----------------- FIND ALL -----------------
    // async findAll(): Promise<InternalGrantSourceResponseDto[]> {
    //   const grants = await this.prisma.internalGrantSource.findMany({
    //     orderBy: { createdAt: "desc" },
    //   });
    //   return grants.map(g => this.mapToResponseDto(g));
    // }

    // ----------------- FIND ONE -----------------
    async findOne(id: string): Promise<InternalGrantSourceResponseDto> {
        const grant = await this.prisma.internalGrantSource.findUnique({ where: { id } });
        if (!grant) throw new NotFoundException(`Grant source with id ${id} not found`);
        return this.mapToResponseDto(grant);
    }

    // ----------------- UPDATE -----------------
    async update(
        id: string,
        updateDto: UpdateInternalGrantSourceDto,
    ): Promise<InternalGrantSourceResponseDto> {
        const grant = await this.prisma.internalGrantSource.findUnique({ where: { id } });
        if (!grant) throw new NotFoundException(`Grant source with id ${id} not found`);

        // Validate: cannot set both text and URL at same time
        if (updateDto.opportunityText && updateDto.opportunityUrl) {
            throw new BadRequestException(
                "Only one of opportunityText or opportunityUrl can be updated at a time.",
            );
        }

        const updatedGrant = await this.prisma.internalGrantSource.update({
            where: { id },
            data: updateDto,
        });

        return this.mapToResponseDto(updatedGrant);
    }

    // ----------------- DELETE -----------------
    async remove(id: string): Promise<{ message: string }> {
        const grant = await this.prisma.internalGrantSource.findUnique({ where: { id } });
        if (!grant) throw new NotFoundException(`Grant source with id ${id} not found`);

        await this.prisma.internalGrantSource.delete({ where: { id } });
        return { message: "Grant source deleted successfully" };
    }

    // ----------------- MAP TO RESPONSE -----------------
    private mapToResponseDto(grant: any): InternalGrantSourceResponseDto {
        return {
            id: grant.id,
            organizationId: grant.organizationId,
            opportunityText: grant.opportunityText,
            opportunityUrl: grant.opportunityUrl,
            opportunityPdf: grant.opportunityPdf, // can remain null
            createdAt: grant.createdAt,
        };
    }
}
