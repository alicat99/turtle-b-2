import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TempModule } from './temp/temp.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgreSQLConfigProvider } from './config/typeorm.config';

//typeorm: https://velog.io/@fj2008/TypeORM-9275rvl9
//exception: https://velog.io/@cataiden/nestjs-custom-exception

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/config/.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgreSQLConfigProvider,
    }),
    TempModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
