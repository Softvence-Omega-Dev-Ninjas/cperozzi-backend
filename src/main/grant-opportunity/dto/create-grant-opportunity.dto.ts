import {
    IsString,
    IsOptional,
    IsDateString,
    IsUUID,
    IsNumber,
    IsUrl,
    IsEnum,
    Min,
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateGrantOpportunityDto {
    @ApiProperty({ example: "a1b2c3-d4e5-f6g7-h8i9", description: "Organization ID" })
    @IsUUID()
    organizationId: string;

    @ApiProperty({
        example: "National Science Foundation",
        description: "Name of the funding organization",
    })
    @IsString()
    funderName: string;

    @ApiPropertyOptional({ example: "STEM Education", description: "Focus area of the grant" })
    @IsOptional()
    @IsString()
    focusArea?: string;

    @ApiPropertyOptional({ example: "2025-12-31", description: "Application deadline" })
    @IsOptional()
    @IsDateString()
    deadline?: string;

    @ApiPropertyOptional({ example: 50000.0, description: "Grant amount in USD" })
    @IsOptional()
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    amountUsd?: number;

    @ApiPropertyOptional({
        example: "Non-profit organizations with 501(c)(3) status",
        description: "Eligibility requirements",
    })
    @IsOptional()
    @IsString()
    eligibility?: string;

    @ApiPropertyOptional({
        example: "Budget, Project Proposal, Letters of Support",
        description: "Required attachments",
    })
    @IsOptional()
    @IsString()
    attachmentsRequired?: string;

    @ApiPropertyOptional({ example: "Online form submission", description: "Application format" })
    @IsOptional()
    @IsString()
    applicationFormat?: string;

    @ApiPropertyOptional({
        example: "https://www.nsf.gov/funding/opportunities",
        description: "Funder profile URL",
    })
    @IsOptional()
    @IsUrl()
    funderProfileUrl?: string;

    @ApiPropertyOptional({
        example: "https://recipgs.org/profile/123",
        description: "RecipGS profile link",
    })
    @IsOptional()
    @IsUrl()
    recipGsProfileLink?: string;

    @ApiPropertyOptional({
        example: "internal",
        description: "Source of grant opportunity",
        enum: ["internal", "candid", "grants.gov", "foundation", "corporate"],
    })
    @IsOptional()
    @IsEnum(["internal", "candid", "grants.gov", "foundation", "corporate"])
    source?: string;

    @ApiPropertyOptional({
        example: "a1b2c3-d4e5-f6g7-h8i9",
        description: "Internal grant source ID",
    })
    @IsOptional()
    @IsUUID()
    internalSourceId?: string;

    @ApiPropertyOptional({
        example: "private",
        description: "Type of grant",
        enum: ["private", "govt", "corporate"],
    })
    @IsOptional()
    @IsEnum(["private", "govt", "corporate"])
    grantType?: string;
}
