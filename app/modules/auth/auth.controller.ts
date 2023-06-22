import {
    Body,
    Controller, Post, UseGuards, Request
} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/register.dto";
import {checkError} from "../../error/CheckError";
import {Public} from "./decorators/public.decorator";
import { LocalAuthGuard } from "./guards/local.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiTags('Auth')
    @Post('/login')
    @UseGuards(LocalAuthGuard)
    @ApiOperation({
        summary: 'Login'
    })
    @ApiResponse({
        status: 200,
    })
    async login(@Request() req) {
        return req.user;
    }

    @ApiTags('Auth')
    @Post('/register')
    @Public()
    @ApiOperation({
        summary: 'Register'
    })
    @ApiResponse({
        status: 200,
    })
    async register(@Body() dto: RegisterDto) {
        // const result = await this.authService.register(dto);
        // if (result instanceof Error) {
        //     checkError(result)
        // }
        // return result;
    }
}
