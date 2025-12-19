import { ApiProperty } from "@nestjs/swagger";

export class InternalGrantSourceResponseDto {
    @ApiProperty({
        description: "Unique identifier of the internal grant source",
        example: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    })
    id: string;

    @ApiProperty({
        description: "Organization ID this grant belongs to",
        example: "b1c2d3e4-5678-90ab-cdef-1234567890ab",
    })
    organizationId: string;

    @ApiProperty({
        description: "Text description of the opportunity",
        required: false,
        example: "Funding for renewable energy projects",
    })
    opportunityText?: string;

    @ApiProperty({
        description: "URL link for the opportunity",
        required: false,
        example: "https://example.com/grant-opportunity",
    })
    opportunityUrl?: string;

    @ApiProperty({
        description: "PDF file path or URL for the opportunity",
        required: false,
        example: "https://s3.amazonaws.com/my-bucket/opportunity.pdf",
    })
    opportunityPdf?: string;

    @ApiProperty({ description: "Creation timestamp", example: "2025-12-19T15:00:00Z" })
    createdAt: Date;
}
