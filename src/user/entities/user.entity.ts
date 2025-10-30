import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDocuments } from './user-docs.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column({ type: 'boolean', default: false })
  verification: boolean;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', unique: true })
  wallet_id: string;

  @Column({ type: 'varchar' })
  country: string;

  @OneToOne(() => UserDocuments)
  @JoinColumn()
  user_docs: UserDocuments;
}
