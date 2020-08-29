import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id: number): any {
    return {
      name: 'lzc',
      age: 1,
      gender: 'male',
      id: id,
      role: 'Admin',
    };
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
