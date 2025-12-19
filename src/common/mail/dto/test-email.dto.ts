import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional } from "class-validator";

export class TestEmailDto {
    @ApiPropertyOptional({
        description: "Email address to send test email to (optional, defaults to test@example.com)",
        example: "your-email@example.com",
    })
    @IsOptional()
    @IsEmail()
    email?: string;
}
