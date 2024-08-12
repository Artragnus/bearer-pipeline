import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getToken(): string {
    console.log(process.env.TOKEN);
    return 'my_secret_password';
  }
}
