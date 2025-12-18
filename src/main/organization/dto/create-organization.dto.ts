import { IsString, IsOptional, IsBoolean, IsInt, IsUrl } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateOrganizationDto {
    @ApiProperty({ example: "Helping Hands Foundation" })
    @IsString()
    organizationName: string;

    @ApiPropertyOptional({ example: "https://www.helpinghands.org" })
    @IsOptional()
    @IsUrl()
    organizationWebsite?: string;

    @ApiPropertyOptional({
        example: "To empower underprivileged communities through education and health programs.",
    })
    @IsOptional()
    @IsString()
    missionStatement?: string;

    @ApiPropertyOptional({
        example: "Empowering communities via targeted education and healthcare initiatives.",
    })
    @IsOptional()
    @IsString()
    refinedMissionStatement?: string;

    @ApiPropertyOptional({ example: "Community Development and Support" })
    @IsOptional()
    @IsString()
    corePurpose?: string;

    @ApiPropertyOptional({ example: "Education, Health, and Social Support Programs" })
    @IsOptional()
    @IsString()
    typeOfWork?: string;

    @ApiPropertyOptional({
        example: "Expand outreach to rural areas and increase impact by 50% in 5 years",
    })
    @IsOptional()
    @IsString()
    goalsAspirations?: string;

    @ApiPropertyOptional({
        example: "Adult literacy programs, mobile health clinics, vocational training",
    })
    @IsOptional()
    @IsString()
    programs?: string;

    @ApiPropertyOptional({
        example: "Reached 10,000 beneficiaries last year, partnered with 15 local NGOs",
    })
    @IsOptional()
    @IsString()
    achievements?: string;

    @ApiPropertyOptional({ example: "$500,000 annually" })
    @IsOptional()
    @IsString()
    budget?: string;

    @ApiPropertyOptional({
        example: "Internal evaluation shows 80% of participants achieve literacy goals",
    })
    @IsOptional()
    @IsString()
    evaluation?: string;

    @ApiPropertyOptional({ example: 12 })
    @IsOptional()
    @IsInt()
    noOfGrants?: number;

    @ApiPropertyOptional({ example: "https://drive.google.com/file/d/abc123/view" })
    @IsOptional()
    @IsUrl()
    sharedLink?: string;

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isGrant?: boolean;
}
