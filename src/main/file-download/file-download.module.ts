import { Module } from "@nestjs/common";
import { FileDownloadService } from "./file-download.service";
import { FileDownloadController } from "./file-download.controller";
import { PrismaModule } from "../../common/prisma/prisma.module";
import { MailModule } from "../../common/mail/mail.module";

@Module({
    imports: [PrismaModule, MailModule],
    controllers: [FileDownloadController],
    providers: [FileDownloadService],
    exports: [FileDownloadService],
})
export class FileDownloadModule {}
