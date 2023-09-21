import { Entity, Column, PrimaryGeneratedColumn,  CreateDateColumn } from 'typeorm';

@Entity()
export class Mensagem{
 
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  mensagem: string;
    static providers: any;
    
    @CreateDateColumn()
    created: Date;
  }
