import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import type { Response } from "express";
import { AppMailService } from "./common/mail/mail.service";
import { TestEmailDto, TestEmailResponseDto } from "./common/mail/dto";

const packageJson = require("../package.json");

@Controller()
@ApiTags("System")
export class AppController {
    constructor(private readonly mailService: AppMailService) {}

    @Post("api/test-email")
    @ApiOperation({
        summary: "Test email configuration",
        description: "Sends a test email to verify SMTP configuration is working correctly",
    })
    @ApiBody({
        type: TestEmailDto,
        required: false,
        description: "Optional email address to send test email to",
    })
    @ApiOkResponse({
        description: "Email test result",
        type: TestEmailResponseDto,
    })
    async testEmail(@Body() testEmailDto?: TestEmailDto): Promise<TestEmailResponseDto> {
        return this.mailService.testEmailConfiguration(testEmailDto?.email);
    }

    @ApiOkResponse({
        description: "Returns service health status for monitoring",
        schema: {
            example: {
                status: "healthy",
                timestamp: "2025-05-27T12:00:00.000Z",
                version: "0.3.1",
                uptime: 3600,
            },
        },
    })
    @Get("api/health")
    async getHealthCheck(@Res() res: Response) {
        res.status(200).json({
            status: "ok",
            name: packageJson.name,
            version: packageJson.version,
            description: packageJson.description,
            environment: process.env.NODE_ENV,
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            team: {
                name: "Dev Ninja",
                leader: "Niloy",
                members: [
                    {
                        name: "Mirza Saikat Ahmmed",
                        role: "Backend Developer",
                        avatar: "https://avatars.githubusercontent.com/u/30868301?v=4",
                        url: "https://api.github.com/users/mirzasaikatahmmed",
                    },
                ],
            },
        });
    }
}
