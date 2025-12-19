import { Module } from "@nestjs/common";
import { LetterOfIntentService } from "./letter-of-intent.service";
import { LetterOfIntentController } from "./letter-of-intent.controller";
import { PrismaModule } from "../../common/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [LetterOfIntentController],
    providers: [LetterOfIntentService],
    exports: [LetterOfIntentService],
})
export class LetterOfIntentModule {}
