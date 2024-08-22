import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { StaffService } from '../staff/staff.service';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly staffService: StaffService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
    role: string,
  ): Promise<any> {
    const user = await this.staffService.findbyUsername(username);
    console.log(user.role);
    if (
      user &&
      user.role.name === role &&
      (await bcrypt.compare(password, user.password))
    ) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Username, Password or Role is incorrect',
      },
      HttpStatus.FORBIDDEN,
      {
        cause: error,
      },
    );
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
