import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { PrismaService } from "@common/prisma/prisma.service";

@Injectable()
export class OrganizationService {
    constructor(private readonly prisma: PrismaService) {}

    create(createOrganizationDto: CreateOrganizationDto) {
        const organization = this.prisma.organization.create({
            data: createOrganizationDto,
        });

        if (!organization) {
            throw new BadRequestException("Could not create organization");
        }
        return organization;
    }

    findOne(id: string) {
        const organization = this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new BadRequestException("Organization not found");
        }

        return organization;
    }

    update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
        const organization = this.prisma.organization.findUnique({
            where: { id },
        });

        if (!organization) {
            throw new BadRequestException("Organization not found");
        }

        const updateOrganizaiton = this.prisma.organization.update({
            where: { id },
            data: updateOrganizationDto,
        });

        

        return `This action updates a #${id} organization`;
    }

    remove(id: number) {
        return `This action removes a #${id} organization`;
    }
}
