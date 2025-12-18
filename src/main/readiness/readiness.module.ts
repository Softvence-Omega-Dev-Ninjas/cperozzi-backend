import { Module } from "@nestjs/common";
import { ReadinessController } from "./readiness.controller";
import { ReadinessService } from "./readiness.service";
import { PrismaModule } from "../../common/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [ReadinessController],
    providers: [ReadinessService],
    exports: [ReadinessService],
})
export class ReadinessModule {}
