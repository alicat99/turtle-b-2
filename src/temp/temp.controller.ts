import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TempEntity } from './entity/tempEntity.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Controller('temp')
export class TempController {
  constructor(
    @InjectRepository(TempEntity) private readonly tempRepository: Repository<TempEntity>,
    private readonly configService: ConfigService) { }

  @Get('data')
  async getData(): Promise<any> {
    const data = await this.tempRepository.find()
    return data
  }

  @Get('config')
  getConfig(): number {
    const n = this.configService.get<number>('TEST', 0)
    return n
  }
}