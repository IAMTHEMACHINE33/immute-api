import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseFilters,
} from '@nestjs/common';
import { LoanService } from './loan.service';
import {
  CreateLoanDto,
  createLoanSchema,
  ValuateLoanDto,
  valuateLoanSchema,
} from './dto/loan.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { ErrorToExceptionFilter } from 'src/common/filters/error-to-exception.filter';

@Controller('loan')
@UseFilters(new ErrorToExceptionFilter())
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createLoanSchema)) createLoanDto: CreateLoanDto,
  ) {
    const data = await this.loanService.create(createLoanDto);
    return {
      success: true,
      message: 'Loan applied successfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.loanService.findAll();
    return {
      success: true,
      message: 'Loan fetched successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.loanService.findOne(id);
    return { success: true, message: 'Loan fetched successfully', data };
  }

  @Patch(':id/approve')
  async approveLoan(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(valuateLoanSchema))
    valuateLoanDto: ValuateLoanDto,
  ) {
    await this.loanService.approveLoan(id, valuateLoanDto);
    return {
      success: true,
      message: 'Loan successfully valuated',
    };
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loanService.remove(+id);
  // }
}
