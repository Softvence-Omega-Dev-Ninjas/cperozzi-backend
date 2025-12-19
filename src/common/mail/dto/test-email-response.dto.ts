import { ApiProperty } from "@nestjs/swagger";

export class TestEmailResponseDto {
    @ApiProperty({
        description: "Whether the email test was successful",
        example: true,
    })
    success: boolean;

    @ApiProperty({
        description: "Test result message",
        example: "Email configuration is working correctly",
    })
    message: string;

    @ApiProperty({
        description: "Email address the test email was sent to",
        example: "test@example.com",
        required: false,
    })
    testEmail?: string;

    @ApiProperty({
        description: "Error details if test failed",
        example: "Connection timeout",
        required: false,
    })
    error?: string;

    @ApiProperty({
        description: "Timestamp of the test",
        example: "2023-12-19T10:30:00.000Z",
    })
    timestamp: Date;
}
