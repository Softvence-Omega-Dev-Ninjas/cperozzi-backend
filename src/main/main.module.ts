import { Module } from "@nestjs/common";
import { OrganizationModule } from "./organization/organization.module";
import { ReadinessModule } from "./readiness/readiness.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";

@Module({
    imports: [ReadinessModule, OrganizationModule, ProposalDraftModule],
})
export class MainModule {}
