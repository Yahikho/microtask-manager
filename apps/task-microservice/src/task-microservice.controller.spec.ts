import { Test, TestingModule } from '@nestjs/testing';
import { TaskMicroserviceController } from './task-microservice.controller';
import { TaskMicroserviceService } from './task-microservice.service';

describe('TaskMicroserviceController', () => {
  let taskMicroserviceController: TaskMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaskMicroserviceController],
      providers: [TaskMicroserviceService],
    }).compile();

    taskMicroserviceController = app.get<TaskMicroserviceController>(TaskMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(taskMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
