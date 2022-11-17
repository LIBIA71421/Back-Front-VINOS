import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { VinosService } from './vinos.service';
import { CreateVinoDto } from './dto/create-vino.dto';
import { UpdateVinoDto } from './dto/update-vino.dto';

@Controller('vinos')
export class VinosController {
  constructor(private readonly vinosService: VinosService) {}

  @Post()
  create(@Body() createVinoDto: CreateVinoDto) {
    return this.vinosService.create(createVinoDto);
  }

  @Get()
  findAll() {
    return this.vinosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vinosService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateVinoDto: UpdateVinoDto) {
    return this.vinosService.update(+id, updateVinoDto);
  }*/

  @Put(':id')
  async UpdateVinoDto(
    @Param('id') id: number,
    @Body() updateVinoDto: UpdateVinoDto,
  ) {
    await this.vinosService.update(id, updateVinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vinosService.remove(id);
  }

}
