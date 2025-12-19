import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber, Min } from "class-validator";
import { Type } from "class-transformer";

export class UpdateLetterOfIntentDto {
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
