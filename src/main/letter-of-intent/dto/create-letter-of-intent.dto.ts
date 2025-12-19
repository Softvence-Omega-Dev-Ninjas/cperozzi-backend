import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUUID, IsNumber, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateLetterOfIntentDto {
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
        description: "Introduction section of the letter of intent",
        example: "Dear Grant Review Committee...",
    })
    @IsOptional()
    @IsString()
    introduction?: string;

    @ApiPropertyOptional({
        description: "Organizational summary",
        example: "Our organization has been serving the community since 2010...",
    })
    @IsOptional()
    @IsString()
    organizationalSummary?: string;

    @ApiPropertyOptional({
        description: "Project overview",
        example: "This project aims to address critical community needs...",
    })
    @IsOptional()
    @IsString()
    projectOverview?: string;

    @ApiPropertyOptional({
        description: "Funding request amount in USD",
        example: 50000.0,
        type: Number,
    })
    @IsOptional()
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    fundingRequest?: number;

    @ApiPropertyOptional({
        description: "Closing statement",
        example: "We look forward to the opportunity to discuss this proposal further...",
    })
    @IsOptional()
    @IsString()
    closingStatement?: string;
}
