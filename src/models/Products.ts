import {
  Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  preparation_time: string;

  @Column()
  is_disponible: boolean;

  @Column()
  id_created_admin: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  update_at: string;
}

export default Product;