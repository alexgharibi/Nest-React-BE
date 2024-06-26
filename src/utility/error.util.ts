import { HttpException, HttpStatus } from '@nestjs/common';

export const throwError = (statusCode: HttpStatus, message: string): never => {
  throw new HttpException({ message }, statusCode);
};
