import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateProposalDraftDto {
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

    @ApiPropertyOptional({
        description: "Executive summary of the proposal",
        example: "This proposal seeks funding to expand our community health program...",
    })
    @IsOptional()
    @IsString()
    executiveSummary?: string;

    @ApiPropertyOptional({
        description: "Introduction to the organization",
        example: "Our organization has been serving the community since 2010...",
    })
    @IsOptional()
    @IsString()
    introductionToOrganization?: string;

    @ApiPropertyOptional({
        description: "Problem statement addressing the issue",
        example: "The community faces significant challenges in accessing healthcare...",
    })
    @IsOptional()
    @IsString()
    problemStatement?: string;

    @ApiPropertyOptional({
        description: "Goals and objectives of the proposal",
        example: "1. Increase healthcare access by 50%\n2. Train 100 community health workers...",
    })
    @IsOptional()
    @IsString()
    goalsAndObjectives?: string;

    @ApiPropertyOptional({
        description: "Methods and activities to be implemented",
        example: "We will conduct monthly health camps and weekly training sessions...",
    })
    @IsOptional()
    @IsString()
    methodsAndActivities?: string;

    @ApiPropertyOptional({
        description: "Evaluation plan for measuring success",
        example: "Success will be measured through quarterly surveys and health outcome metrics...",
    })
    @IsOptional()
    @IsString()
    evaluationPlan?: string;

    @ApiPropertyOptional({
        description: "Sustainability plan for long-term impact",
        example: "We will establish local partnerships and revenue streams to ensure continuity...",
    })
    @IsOptional()
    @IsString()
    sustainabilityPlan?: string;

    @ApiPropertyOptional({
        description: "Budget summary",
        example:
            "Total requested: $100,000\nPersonnel: $60,000\nEquipment: $25,000\nOperating: $15,000",
    })
    @IsOptional()
    @IsString()
    budgetSummary?: string;

    @ApiPropertyOptional({
        description: "Conclusion of the proposal",
        example: "This proposal will significantly impact community health outcomes...",
    })
    @IsOptional()
    @IsString()
    conclusion?: string;

    @ApiPropertyOptional({
        description: "Status of the proposal draft (false = draft, true = completed)",
        example: false,
        default: false,
    })
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
