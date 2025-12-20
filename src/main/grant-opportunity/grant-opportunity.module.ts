import { Module } from "@nestjs/common";
import { GrantOpportunityService } from "./grant-opportunity.service";
import { GrantOpportunityController } from "./grant-opportunity.controller";

@Module({
    controllers: [GrantOpportunityController],
    providers: [GrantOpportunityService],
    exports: [GrantOpportunityService],
})
export class GrantOpportunityModule {}
