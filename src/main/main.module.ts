import { Module } from "@nestjs/common";
import { ReadinessModule } from "./readiness/readiness.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";
import { FileDownloadModule } from "./file-download/file-download.module";

@Module({
    imports: [ReadinessModule, ProposalDraftModule, FileDownloadModule],
})
export class MainModule {}
