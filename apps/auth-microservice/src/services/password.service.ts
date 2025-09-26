import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
    private readonly rounds = 10

    async hash(plain: string) {
        return await bcrypt.hash(plain, this.rounds)
    }

    async compare(plain: string, hash: string) {
        return await bcrypt.compare(plain, hash);
    }
}