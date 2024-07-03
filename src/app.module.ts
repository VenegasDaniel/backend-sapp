import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContributionsModule } from './modules/contributions/contributions.module';

@Module({
  imports: [PrismaModule,ContributionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
