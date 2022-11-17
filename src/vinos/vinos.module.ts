import { Module } from '@nestjs/common';
import { VinosService } from './vinos.service';
import { VinosController } from './vinos.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vino } from "./entities/vino.entity";

@Module({
  controllers: [VinosController],
  providers: [VinosService],
  imports:[TypeOrmModule.forFeature([Vino])]
})
export class VinosModule {}
