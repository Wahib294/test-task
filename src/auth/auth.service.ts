import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { StaffService } from '../staff/staff.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly staffService: StaffService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string, role: string): Promise<any> {
        const user = await this.staffService.findbyUsername(username);

        if (user && user.role.name === role && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException(user.username + ' ' + user.password + ' ' + user.role.name);
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role: user.role.name };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

