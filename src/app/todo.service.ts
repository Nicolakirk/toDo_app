import { Injectable } from '@angular/core';
import { TodoLocation } from './todo.location';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'http://localhost:3000/locations'; // API endpoint

  // Fetch all todo locations from the API
  async getAllTodoLocations(): Promise<TodoLocation[]> {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
      }

      const data: TodoLocation[] = await response.json();
      return data ?? []; // Return empty array if no data
    } catch (error) {
      console.error('Error fetching todo locations:', error);
      return []; // Return an empty array in case of error
    }
  }

  // Fetch a single todo location by ID
  async getTodoLocationById(id: number): Promise<TodoLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch location with ID ${id}: ${response.statusText}`);
      }

      const data: TodoLocation = await response.json();
      return data ?? undefined; // Return undefined if no data found
    } catch (error) {
      console.error(`Error fetching todo location with ID ${id}:`, error);
      return undefined; // Return undefined in case of error
    }
  }

  // Submit a new application (e.g., POST a new todo location)
  async submitApplication(name: string, description: string, status: string): Promise<void> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          status,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit application: ${response.statusText}`);
      }

      console.log('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  }
}

