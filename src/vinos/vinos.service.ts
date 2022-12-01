import { Injectable } from '@nestjs/common';
import { CreateVinoDto } from './dto/create-vino.dto';
import { UpdateVinoDto } from './dto/update-vino.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Vino } from "./entities/vino.entity";
import { Repository } from "typeorm";

@Injectable()
export class VinosService {
  constructor(@InjectRepository(Vino) private vinoRepository: Repository<Vino>) {}
  create(createVinoDto: CreateVinoDto) {
    return this.vinoRepository.save(createVinoDto);
  }

  findAll() {
    return this.vinoRepository.find();
  }

  findOne(id: number) {
    return this.vinoRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateVinoDto: UpdateVinoDto) {
    return this.vinoRepository.update(id, updateVinoDto);
  }

  remove(id: number) {
    return this.vinoRepository.delete({id});
  }
}
