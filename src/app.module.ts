import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MailModule } from "./common/mail/mail.module";
import { PrismaModule } from "./common/prisma/prisma.module";
import { MainModule } from "./main/main.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
        }),
        PrismaModule,
        MainModule,
        MailModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
