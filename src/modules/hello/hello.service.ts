import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id): string {
    return `Hello World ${id}`;
  }

  save(message): string {
    return `Set Hello Done ${message}`;
  }

  update(id, message): string {
    return `Update Hello Done ${id} : ${message}`;
  }

  remove(id): string {
    return `Remove Hello Done ${id}`;
  }
}
