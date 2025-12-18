import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ReadinessResponseDto {
    @ApiProperty({
        description: "Readiness score ID",
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

    @ApiProperty({
        description: "Readiness score (0-100)",
        example: 85,
    })
    readinessScore: number;

    @ApiPropertyOptional({
        description: "Strengths identified in the assessment",
        example: "Strong mission alignment, proven track record of community engagement",
    })
    strengths?: string | null;

    @ApiPropertyOptional({
        description: "Areas that need improvement",
        example:
            "Budget documentation needs enhancement, evaluation metrics could be more specific",
    })
    improvementAreas?: string | null;

    @ApiProperty({
        description: "Creation timestamp",
        example: "2024-12-19T10:30:00.000Z",
    })
    createdAt: Date;
}
