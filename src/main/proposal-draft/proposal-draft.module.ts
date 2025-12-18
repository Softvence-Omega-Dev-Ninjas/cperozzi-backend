import { Module } from "@nestjs/common";
import { ProposalDraftService } from "./proposal-draft.service";
import { ProposalDraftController } from "./proposal-draft.controller";
import { PrismaModule } from "../../common/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [ProposalDraftController],
    providers: [ProposalDraftService],
    exports: [ProposalDraftService],
})
export class ProposalDraftModule {}
