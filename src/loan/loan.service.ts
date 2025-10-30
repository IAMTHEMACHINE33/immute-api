import { Inject, Injectable } from '@nestjs/common';
import { Loan, LoanStatus } from './entities/loan.entity';
import { Repository } from 'typeorm';
import { CreateLoanDto, ValuateLoanDto } from './dto/loan.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
  ) {}
  async create(createLoanDto: CreateLoanDto) {
    const loan = this.loanRepository.create({
      status: LoanStatus.PENDING,
      ...createLoanDto,
    });
    return await loan.save();
  }

  async findAll() {
    return await this.loanRepository.find();
  }

  async findOne(id: string) {
    return await this.loanRepository.findOne({ where: { id } });
  }

  async approveLoan(id: string, valuateLoanDto: ValuateLoanDto) {
    return await this.loanRepository.update(id, {
      status: LoanStatus.APPROVED,
      amount: valuateLoanDto.amount.toString(),
    });
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
