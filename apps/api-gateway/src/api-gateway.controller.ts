import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_RABBITMQ_SERVICE } from './constants';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,
    @Inject(AUTH_RABBITMQ_SERVICE) private readonly client: ClientProxy
  ) { }
  
  @Post('signup')
  signUp(@Body() body: any) {
    this.client.emit('user_signup', body);
    return { message: 'User signup event emitted', data: body };
  }
}
