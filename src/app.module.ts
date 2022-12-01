import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VinosModule } from './vinos/vinos.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vino } from "./vinos/entities/vino.entity";

@Module({
  imports: [VinosModule,TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gsoso479+-+u',
      database: 'vinos_db',
      synchronize: true,
      autoLoadEntities: true,
    }
  )],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
