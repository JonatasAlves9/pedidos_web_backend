import {
  Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('itens_requests')
class ItensRequests {
  @PrimaryGeneratedColumn('uuid')
  id_request: string;

  @Column()
  id_product: string;

  @Column()
  amount: string;

  @Column()
  discount: string;
}

export default ItensRequests;