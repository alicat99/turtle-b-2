import { Module } from '@nestjs/common';
import { TempController } from './temp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TempEntity } from './entity/tempEntity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TempEntity])],
  controllers: [TempController],
})
export class TempModule {}
