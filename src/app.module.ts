import { Module } from '@nestjs/common';

import { MathModule } from './math/math.module';
import { CryptModule } from './crypt/crypt.module';

@Module({
  imports: [MathModule, CryptModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
