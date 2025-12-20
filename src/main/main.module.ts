import { Module } from "@nestjs/common";
import { ExportModule } from "./export/export.module";
import { FileDownloadModule } from "./file-download/file-download.module";
import { GrantSourceModule } from "./grant-source/grant-source.module";
import { GrantOpportunityModule } from "./grant-opportunity/grant-opportunity.module";
import { LetterOfIntentModule } from "./letter-of-intent/letter-of-intent.module";
import { OrganizationModule } from "./organization/organization.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";
import { ReadinessModule } from "./readiness/readiness.module";

@Module({
    imports: [
        ReadinessModule,
        ProposalDraftModule,
        FileDownloadModule,
        LetterOfIntentModule,
        ExportModule,
        GrantSourceModule,
        GrantOpportunityModule,
        OrganizationModule,
    ],
})
export class MainModule {}
