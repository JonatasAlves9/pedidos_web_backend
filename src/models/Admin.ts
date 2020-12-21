import {
  Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('admins')
class Admin {
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

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  update_at: string;
}

export default Admin;