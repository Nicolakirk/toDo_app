import {Injectable} from '@angular/core';
import { TodoLocation } from './todo.location';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3000/locations';
  async getAllTodoLocations(): Promise<TodoLocation[]> {
    const data = await fetch(this.url);
    console.log(data)
    return (await data.json()) ?? [];

  }
  async getTodoLocationById(id: number): Promise<TodoLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(name: string, description: string, status: string) {
    // tslint:disable-next-line
    console.log("in the service",name, description, status);
  }
}
