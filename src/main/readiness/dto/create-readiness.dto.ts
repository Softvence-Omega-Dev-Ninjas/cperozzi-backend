import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Max, Min } from "class-validator";

export class CreateReadinessDto {
    @ApiProperty({
        description: "Organization ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    @IsNotEmpty()
    @IsUUID()
    organizationId: string;

    @ApiProperty({
        description: "Grant ID",
        example: "123e4567-e89b-12d3-a456-426614174001",
    })
    @IsNotEmpty()
    @IsUUID()
    grantId: string;

    @ApiProperty({
        description: "Readiness score (0-100)",
        example: 85,
        minimum: 0,
        maximum: 100,
    })
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(100)
    readinessScore: number;

    @ApiPropertyOptional({
        description: "Strengths identified in the assessment",
        example: "Strong mission alignment, proven track record of community engagement",
    })
    @IsOptional()
    @IsString()
    strengths?: string;

    @ApiPropertyOptional({
        description: "Areas that need improvement",
        example:
            "Budget documentation needs enhancement, evaluation metrics could be more specific",
    })
    @IsOptional()
    @IsString()
    improvementAreas?: string;
}
