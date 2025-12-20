import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class GrantOpportunityResponseDto {
    @ApiProperty({ example: "a1b2c3-d4e5-f6g7-h8i9" })
    id: string;

    @ApiProperty({ example: "a1b2c3-d4e5-f6g7-h8i9" })
    organizationId: string;

    @ApiProperty({ example: "National Science Foundation" })
    funderName: string;

    @ApiPropertyOptional({ example: "STEM Education" })
    focusArea?: string;

    @ApiPropertyOptional({ example: "2025-12-31T00:00:00.000Z" })
    deadline?: Date;

    @ApiPropertyOptional({ example: 50000.0 })
    amountUsd?: number;

    @ApiPropertyOptional({ example: "Non-profit organizations with 501(c)(3) status" })
    eligibility?: string;

    @ApiPropertyOptional({ example: "Budget, Project Proposal, Letters of Support" })
    attachmentsRequired?: string;

    @ApiPropertyOptional({ example: "Online form submission" })
    applicationFormat?: string;

    @ApiPropertyOptional({ example: "https://www.nsf.gov/funding/opportunities" })
    funderProfileUrl?: string;

    @ApiPropertyOptional({ example: "https://recipgs.org/profile/123" })
    recipGsProfileLink?: string;

    @ApiPropertyOptional({ example: "internal" })
    source?: string;

    @ApiPropertyOptional({ example: "a1b2c3-d4e5-f6g7-h8i9" })
    internalSourceId?: string;

    @ApiPropertyOptional({ example: "private" })
    grantType?: string;

    @ApiProperty({ example: "2025-01-01T10:00:00.000Z" })
    createdAt: Date;
}
