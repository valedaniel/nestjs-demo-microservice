import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CryptService } from './crypt.service';

@Controller()
export class CryptController {
  constructor(private readonly cryptService: CryptService) { }

  @MessagePattern('crypt/getHash')
  async generateHash(body: { data: any, saltOrRounds: string | number }): Promise<string> {
    return this.cryptService.generateHash(body.data, Number(body.saltOrRounds));
  }

  @MessagePattern('crypt/compare')
  async compareHash(body: { data: any, hash: string }): Promise<boolean> {
    return this.cryptService.compareHash(body.data, body.hash);
  }

}
