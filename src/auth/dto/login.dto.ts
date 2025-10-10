import {ApiProperty} from "@nestjs/swagger"

export class LoginDto {
    @ApiProperty({required: true})
    email: 'admin@techsolutions.com';

    @ApiProperty({required: true})
    password: 'password123';   
}   
