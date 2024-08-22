import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StaffModule } from '../staff/staff.module';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { jwtConstants } from '../strategies/constants';
import { StaffService } from 'src/staff/staff.service';

@Module({
    imports: [
        StaffModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
