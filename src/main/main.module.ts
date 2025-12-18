import { Module } from "@nestjs/common";
import { OrganizationModule } from "./organization/organization.module";
import { ReadinessModule } from "./readiness/readiness.module";

@Module({
    imports: [ReadinessModule, OrganizationModule],
})
export class MainModule {}
