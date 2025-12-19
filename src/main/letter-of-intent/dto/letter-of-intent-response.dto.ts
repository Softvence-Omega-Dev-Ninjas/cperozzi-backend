import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LetterOfIntentResponseDto {
    @ApiProperty({
        description: "Letter of intent ID",
        example: "123e4567-e89b-12d3-a456-426614174002",
    })
    id: string;

    @ApiProperty({
        description: "Organization ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    organizationId: string;

    @ApiProperty({
        description: "Grant ID",
        example: "123e4567-e89b-12d3-a456-426614174001",
    })
    grantId: string;

    @ApiPropertyOptional({
        description: "Introduction section of the letter of intent",
        example: "Dear Grant Review Committee...",
    })
    introduction?: string;

    @ApiPropertyOptional({
        description: "Organizational summary",
        example: "Our organization has been serving the community since 2010...",
    })
    organizationalSummary?: string;

    @ApiPropertyOptional({
        description: "Project overview",
        example: "This project aims to address critical community needs...",
    })
    projectOverview?: string;

    @ApiPropertyOptional({
        description: "Funding request amount in USD",
        example: 50000.0,
        type: Number,
    })
    fundingRequest?: number;

    @ApiPropertyOptional({
        description: "Closing statement",
        example: "We look forward to the opportunity to discuss this proposal further...",
    })
    closingStatement?: string;

    @ApiProperty({
        description: "Creation timestamp",
        example: "2023-12-19T10:30:00.000Z",
    })
    createdAt: Date;
}
