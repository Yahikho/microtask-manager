import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }

  async signUp(userSignUpDto: any) {
    // Lógica de registro aquí
    return {
      message: 'Usuario registrado exitosamente',
      user: {
        id: Date.now(),
        email: userSignUpDto.email,
        username: userSignUpDto.username
      }
    };
  }

  async login(loginDto: any) {
    // Lógica de autenticación aquí
    return {
      message: 'Login exitoso',
      token: 'jwt-token-example',
      user: {
        id: 1,
        email: loginDto.email
      }
    };
  }

  async getProfile() {
    // Lógica para obtener perfil del usuario
    return {
      id: 1,
      email: 'user@example.com',
      username: 'usuario123',
      createdAt: new Date()
    };
  }
}
