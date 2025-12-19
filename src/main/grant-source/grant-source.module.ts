import { Module } from "@nestjs/common";
import { GrantSourceService } from "./grant-source.service";
import { GrantSourceController } from "./grant-source.controller";
import { PrismaModule } from "../../common/prisma/prisma.module";
import { S3WrapperModule } from "../../common/s3/s3-wrapper.module";

@Module({
    imports: [PrismaModule, S3WrapperModule],
    controllers: [GrantSourceController],
    providers: [GrantSourceService],
    exports: [GrantSourceService],
})
export class GrantSourceModule {}
