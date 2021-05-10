import { Test, TestingModule } from '@nestjs/testing';
import { CryptService } from './crypt.service';

describe('CryptService', () => {
  const data = 'cryptService';
  let service: CryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptService],
    }).compile();

    service = module.get<CryptService>(CryptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('generateHash should be defined', async () => {
    expect(await service.generateHash(data, 10)).toBeDefined();
  });

  it('compareService should be true', async () => {
    const hash = await service.generateHash(data, 10);
    expect(hash).toBeDefined();
    expect(await service.compareHash(data, hash)).toBe(true);
  });
});
