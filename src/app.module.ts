import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MainModule } from "./main/main.module";
import { PrismaModule } from "./common/prisma/prisma.module";

@Module({
    imports: [PrismaModule, MainModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
