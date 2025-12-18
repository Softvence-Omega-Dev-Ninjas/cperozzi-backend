import { Module } from "@nestjs/common";
import { ReadinessModule } from "./readiness/readiness.module";

@Module({
    imports: [ReadinessModule],
})
export class MainModule {}
