import { Module } from '@nestjs/common';
import { GrantSourceService } from './grant-source.service';
import { GrantSourceController } from './grant-source.controller';

@Module({
  controllers: [GrantSourceController],
  providers: [GrantSourceService],
})
export class GrantSourceModule {}
