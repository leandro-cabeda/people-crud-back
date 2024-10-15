import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TypePeople } from './typepeople.entity';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;


  @ManyToOne(() => TypePeople)
  @JoinColumn({ name: 'tipoPessoaId' })
  tipoPessoa: TypePeople;
}