import { Module } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { ContributionsController } from './contributions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContributionsController],
  providers: [ContributionsService],
  imports: [PrismaModule],
})
export class ContributionsModule {}
