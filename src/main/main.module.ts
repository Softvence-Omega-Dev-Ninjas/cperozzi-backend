import { Module } from "@nestjs/common";
import { ReadinessModule } from "./readiness/readiness.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";
import { FileDownloadModule } from "./file-download/file-download.module";
import { LetterOfIntentModule } from "./letter-of-intent/letter-of-intent.module";
import { ExportModule } from "./export/export.module";

@Module({
    imports: [
        ReadinessModule,
        ProposalDraftModule,
        FileDownloadModule,
        LetterOfIntentModule,
        ExportModule,
    ],
})
export class MainModule {}
