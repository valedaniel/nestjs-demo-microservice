import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptService {

    async generateHash(data: any, saltOrRounds: number) {
        return await bcrypt.hash(data, saltOrRounds);
    }

    async compareHash(data: any, hash: string) {
        return await bcrypt.compare(data, hash);
    }

}
