import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PeopleService } from './people.service';
import { People } from './entities/people.entity';

@Controller('people')
export class PeopleController {

    constructor(private readonly peopleService: PeopleService) {}

    @Get()
  findAll(): Promise<People[]> {
    return this.peopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<People> {
    return this.peopleService.findOne(id);
  }

  @Post()
  create(@Body() people: People): Promise<People> {
    return this.peopleService.create(people);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() people: People) {
    return this.peopleService.update(id, people);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.peopleService.remove(id);
  }
}
