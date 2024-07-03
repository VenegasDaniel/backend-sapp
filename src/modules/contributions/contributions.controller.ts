import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';

@Controller('contributions')
export class ContributionsController {
  constructor(private readonly contributionsService: ContributionsService) {}

  @Post()
  create(@Body() createContributionDto: CreateContributionDto) {
    return this.contributionsService.createContribution(createContributionDto);
  }

  @Get()
  findAllContributions() {
    return this.contributionsService.getAllContributions();
  }

  @Get(':id')
  findOneContribution(@Param('id') id: string) {
    return this.contributionsService.getContributionById(id);
  }

  @Patch(':id')
  update(@Param('id') employeeId: string, @Body() updateContributionDto: UpdateContributionDto) {
    return this.contributionsService.updateContribution(employeeId, updateContributionDto);
  }

  @Delete(':id')
  remove(@Param('id') employeeId: string) {
    return this.contributionsService.deleteContribution(employeeId);
  }

}
