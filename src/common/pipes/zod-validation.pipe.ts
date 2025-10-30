import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(
    private readonly schema: ZodSchema,
    private readonly exceptionFactory: (errors: any) => unknown = (error) =>
      new BadRequestException(error),
  ) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (err) {
      const rawError = err as any;
      let payload;
      if (rawError instanceof ZodError)
        payload = `field: ${String(rawError.issues[0].path[0])}, message: '${rawError.issues[0].message}'`;
      else payload = rawError;
      throw this.exceptionFactory(payload);
    }
  }
}
