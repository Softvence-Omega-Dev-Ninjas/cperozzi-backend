import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateReadinessDto {
    @ApiPropertyOptional({
        description: "Readiness score (0-100)",
        example: 85,
        minimum: 0,
        maximum: 100,
    })
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(100)
    readinessScore?: number;

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
