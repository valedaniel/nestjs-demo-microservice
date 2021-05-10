import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {

  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  subtract(data: number[]): number {
    return (data || []).reduce((a, b) => a - b);
  }

  multiply(data: number[]): number {
    return (data || []).reduce((a, b) => a * b);
  }

  division(data: number[]): number {
    return (data || []).reduce((a, b) => a / b);
  }

}
