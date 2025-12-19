import { Module } from "@nestjs/common";
import { ReadinessModule } from "./readiness/readiness.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";
import { FileDownloadModule } from "./file-download/file-download.module";
import { LetterOfIntentModule } from "./letter-of-intent/letter-of-intent.module";

@Module({
    imports: [ReadinessModule, ProposalDraftModule, FileDownloadModule, LetterOfIntentModule],
})
export class MainModule {}
