import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
