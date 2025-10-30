import { z } from 'zod';

export const createLoanSchema = z.object({
  name: z.string(),
  email: z.email(),
  country: z.string(),
  city: z.string(),
  asset: z.string(),
  proof: z.string(),
});
export type CreateLoanDto = z.infer<typeof createLoanSchema>;

export const valuateLoanSchema = z.object({
  amount: z.number(),
});
export type ValuateLoanDto = z.infer<typeof valuateLoanSchema>;
