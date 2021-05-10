import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MathModule } from './math/math.module';
import { CryptModule } from './crypt/crypt.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MathModule,
    CryptModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
