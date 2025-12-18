import { Controller, Get, Res } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import type { Response } from "express";

const packageJson = require("../package.json");

@Controller()
export class AppController {
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
