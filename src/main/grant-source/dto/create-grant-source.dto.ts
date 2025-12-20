import { IsString, IsOptional, IsUUID, IsUrl, ValidateIf } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateInternalGrantSourceDto {
    @ApiProperty({
        description: "The organization ID this grant belongs to",
        example: "b1c2d3e4-5678-90ab-cdef-1234567890ab",
    })
    @IsUUID()
    organizationId: string;

    @ApiPropertyOptional({
        description: "Text description of the opportunity",
        example: "Funding for renewable energy projects",
    })
    @IsOptional()
    @ValidateIf(
        (o) =>
            o.opportunityText !== undefined &&
            o.opportunityText !== null &&
            o.opportunityText !== "",
    )
    @IsString()
    opportunityText?: string;

    @ApiPropertyOptional({
        description: "URL link for the opportunity",
        example: "https://example.com/grant-opportunity",
    })
    @IsOptional()
    @ValidateIf(
        (o) =>
            o.opportunityUrl !== undefined && o.opportunityUrl !== null && o.opportunityUrl !== "",
    )
    @IsUrl()
    opportunityUrl?: string;

    @ApiPropertyOptional({
        description: "PDF file URL (optional, use file upload instead)",
        example: "https://s3.amazonaws.com/my-bucket/opportunity.pdf",
    })
    @IsOptional()
    @ValidateIf(
        (o) =>
            o.opportunityPdf !== undefined && o.opportunityPdf !== null && o.opportunityPdf !== "",
    )
    @IsString()
    opportunityPdf?: string;
}
