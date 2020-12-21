import {
  Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('requests')
class Request {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  table: string;

  @Column()
  id_waiter: string;

  @Column()
  observation: string;

  @Column()
  value: string;

  @Column()
  tip: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  update_at: string;
}

export default Request;