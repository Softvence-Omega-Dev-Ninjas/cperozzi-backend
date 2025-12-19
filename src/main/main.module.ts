import { Module } from "@nestjs/common";
import { OrganizationModule } from "./organization/organization.module";
import { ReadinessModule } from "./readiness/readiness.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";
import { GrantSourceModule } from "./grant-source/grant-source.module";

@Module({
    imports: [ReadinessModule, OrganizationModule, ProposalDraftModule, GrantSourceModule],
})
export class MainModule {}
