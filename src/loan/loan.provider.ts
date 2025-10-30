import { DataSource } from 'typeorm';
import { Loan } from './entities/loan.entity';

export const LoanProviders = [
  {
    provide: 'LOAN_REPOSITORY',
    inject: ['DATA_SOURCE'],
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Loan),
  },
];
