import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  let service: MathService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    service = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('accumulate - [1,2,3,4,5]', () => {
    expect(service.accumulate(numbers)).toEqual(15);
  })

  it('division - [1,2,3,4,5]', () => {
    expect(service.division(numbers)).toEqual(0.008333333333333333);
  })

  it('multiply - [1,2,3,4,5]', () => {
    expect(service.multiply(numbers)).toEqual(120);
  })

  it('subtract - [1,2,3,4,5]', () => {
    expect(service.subtract(numbers)).toEqual(-13);
  })
});
