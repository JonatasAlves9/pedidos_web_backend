import {
  Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('waiters')
class Waiter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  id_created_admin: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  update_at: string;
}

export default Waiter;