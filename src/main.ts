if (!process.env.NODE_TLS_REJECT_UNAUTHORIZED) {
    require("dotenv").config();
    if (process.env.MAIL_TLS_REJECT_UNAUTHORIZED === "false") {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
}

import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import "reflect-metadata";
import { AppModule } from "./app.module";

const packageJson = require("../package.json");

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Swagger API Documentation Configuration
    const config = new DocumentBuilder()
        .setTitle(packageJson.name)
        .setDescription(packageJson.description || "API Documentation")
        .setVersion(packageJson.version)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });

    await app.listen(process.env.PORT ?? 5053);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
