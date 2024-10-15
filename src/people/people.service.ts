import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';
import { TypePeople } from './entities/typepeople.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peopleRepository: Repository<People>,
    @InjectRepository(TypePeople)
    private typeRepository: Repository<TypePeople>,
  ) {}

  findAll(): Promise<People[]> {
    return this.peopleRepository.find({ relations: ['tipoPessoa'] });
  }

  async findOne(id: number): Promise<People> {
    
    const people = await this.peopleRepository.findOne({
      where: { id }, relations: ['tipoPessoa'],
    });

    return people;
  }

  async create(people: People): Promise<People> {

    let tipoPessoa = await this.typeRepository.findOne({ where: { tipo: people.tipoPessoa.tipo } });

    if (!tipoPessoa) {
        tipoPessoa = this.typeRepository.create({ tipo: people.tipoPessoa.tipo });
      await this.typeRepository.save(tipoPessoa);
    }

    const person = this.peopleRepository.create({
        ...people,
        tipoPessoa: tipoPessoa,
      });
    
      return await this.peopleRepository.save(person);
  }

  async update(id: number, people: People): Promise<void> {
    await this.typeRepository.update(people.tipoPessoa.id, people.tipoPessoa);
    await this.peopleRepository.update(id, people);
  }

  async remove(id: number): Promise<void> {
    await this.peopleRepository.delete(id);
  }
}
