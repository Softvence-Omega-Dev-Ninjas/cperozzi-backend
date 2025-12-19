import { PartialType } from "@nestjs/swagger";
import { CreateInternalGrantSourceDto } from "./create-grant-source.dto";

export class UpdateInternalGrantSourceDto extends PartialType(CreateInternalGrantSourceDto) {}
