import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) { }

  @MessagePattern('math/sum')
  accumulate(data: number[]): number {
    return this.mathService.accumulate(data);
  }

  @MessagePattern('math/sub')
  subtract(data: number[]): number {
    return this.mathService.subtract(data);
  }

  @MessagePattern('math/multi')
  multiply(data: number[]): number {
    return this.mathService.multiply(data);
  }

  @MessagePattern('math/div')
  division(data: number[]): number {
    return this.mathService.division(data);
  }

}
