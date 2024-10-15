import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { TypePeople } from './entities/typepeople.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([People, TypePeople]),
  ],
  providers: [PeopleService],
  controllers: [PeopleController]
})
export class PeopleModule {}
