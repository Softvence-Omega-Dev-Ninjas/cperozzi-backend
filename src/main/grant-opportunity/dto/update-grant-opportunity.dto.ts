import { PartialType } from "@nestjs/swagger";
import { CreateGrantOpportunityDto } from "./create-grant-opportunity.dto";

export class UpdateGrantOpportunityDto extends PartialType(CreateGrantOpportunityDto) {}
