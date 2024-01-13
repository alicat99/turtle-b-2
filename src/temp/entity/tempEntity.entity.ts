import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TempEntity extends BaseEntity {
  @PrimaryGeneratedColumn() //pk 명시
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}