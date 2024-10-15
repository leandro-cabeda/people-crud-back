import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypePeople {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

}