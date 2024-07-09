import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Contribution } from './entities/contribution.entity';

@Injectable()
export class ContributionsService {
  constructor(private prisma: PrismaService){}

  async getAllContributions(): Promise<Contribution[]>{
    return this.prisma.contribution.findMany();
  }

  async getContributionById(id: string): Promise<Contribution>{
    return this.prisma.contribution.findUnique({
      where: {
        id
      } 
    });
  }

  async createContribution(createContributionDto:CreateContributionDto){
    const {employeeId, date, amount_afp, amount_isapre, amount_seguro, amount_total} = createContributionDto;
    try{
      return this.prisma.contribution.create({
        data: {
          employeeId,
          date,
          amount_afp,
          amount_isapre,
          amount_seguro,
          amount_total
        }
      });
    } catch(error){
      throw new HttpException('Error creating contribution', HttpStatus.BAD_REQUEST);
    }
  }
/*
  async updateContribution(employeeId: string, updateContributionDto:UpdateContributionDto){
    try{
      return this.prisma.contribution.update({
        where: {
          id: employeeId
        },
        data : updateContributionDto
      });
    } catch(error){
      throw new HttpException('Error updating contribution', HttpStatus.BAD_REQUEST);
    }
  }
*/

async updateContribution(employeeId: string, updateContributionDto: UpdateContributionDto): Promise<Contribution> {
  try {
    const updateResult = await this.prisma.contribution.updateMany({
      where: {
        employeeId: employeeId, // Asegúrate de usar employeeId aquí
      },
      data: updateContributionDto,
    });

    if (updateResult.count === 0) {
      throw new HttpException('Contribution not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.contribution.findFirst({
      where: {
        employeeId: employeeId,
      },
    });
  } catch (error) {
    throw new HttpException('Error updating contribution', HttpStatus.BAD_REQUEST);
  }
}
  
  async deleteContribution(employeeId: string){
    try{
      return this.prisma.contribution.delete({
        where: {
          id: employeeId
        }
      });
    }catch(error){
      throw new HttpException('Error deleting contribution', HttpStatus.BAD_REQUEST);
    }
  }
  
} 