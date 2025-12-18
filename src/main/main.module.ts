import { Module } from "@nestjs/common";
import { ReadinessModule } from "./readiness/readiness.module";
import { ProposalDraftModule } from "./proposal-draft/proposal-draft.module";

@Module({
    imports: [ReadinessModule, ProposalDraftModule],
})
export class MainModule {}
