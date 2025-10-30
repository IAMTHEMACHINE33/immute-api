import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum LoanStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}
@Entity('Loan')
export class Loan extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  city: string;

  @Column()
  asset: string;

  @Column()
  proof: string;

  @Column({
    type: 'enum',
    enum: LoanStatus,
    default: LoanStatus.PENDING,
  })
  status: LoanStatus;

  @Column({ nullable: true })
  amount: string;
}
