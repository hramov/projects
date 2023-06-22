import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, IsStrongPassword} from "class-validator";

export class RegisterDto {
    @ApiProperty({
        type: 'string',
        description: 'Telegram username',
        examples: ['@therealhramov']
    })
    @IsString()
    public login: string;
    
    @ApiProperty({
        type: 'string',
        description: 'First name',
    })
    @IsString()
    public firstname: string;
    
    @ApiProperty({
        type: 'string',
        description: 'Last name',
    })
    @IsString()
    public lastname: string;
    
    @ApiProperty({
        type: 'string',
        description: 'Email',
    })
    @IsString()
    public email: string;

    @ApiProperty({
        type: 'string',
        description: 'Plain password, should be strong',
        examples: ['qWerty!23456']
    })
    @IsString()
    @IsStrongPassword()
    public password: string;

    @ApiProperty({
        type: 'string',
        description: 'Same plain password',
        examples: ['qWerty!23456']
    })
    @IsString()
    @IsStrongPassword()
    public confirm_password: string;
}