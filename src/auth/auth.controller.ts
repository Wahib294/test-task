import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body) {
        const { username, password, role } = body;
        const user = await this.authService.validateUser(username, password, role);
        return this.authService.login(user);
    }
}
