import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsUUID } from "class-validator";

export class SubmitEmailDto {
    @ApiProperty({
        description: "File download ID",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    @IsNotEmpty()
    @IsUUID()
    downloadId: string;

    @ApiProperty({
        description: "Email address to send the file to",
        example: "user@example.com",
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
