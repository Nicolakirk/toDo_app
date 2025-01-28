import { Injectable } from '@angular/core';
import { TodoLocation } from './todo.location';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'http://localhost:4000/api/'; // API endpoint

  // Fetch all todo locations from the API
  async getAllTodoLocations(): Promise<TodoLocation[]> {
    try {
      const response = await fetch(`${this.url}items`);

      if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
      }

      const data: TodoLocation[] = await response.json();
      console.log(data);
      return data ?? []; // Return empty array if no data
    } catch (error) {
      console.error('Error fetching todo locations:', error);
      return []; // Return an empty array in case of error
    }
  }

  // Fetch a single todo location by ID
  async getTodoLocationById(
    todo_id: number
  ): Promise<TodoLocation | undefined> {
    try {
      const response = await fetch(`${this.url}items/${todo_id}`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch todo with ID ${todo_id}: ${response.statusText}`
        );
      }

      const data: TodoLocation = await response.json();
      return data ?? undefined; // Return undefined if no data found
    } catch (error) {
      console.error(`Error fetching todo item with ID ${todo_id}:`, error);
      return undefined; // Return undefined in case of error
    }
  }

  // Submit a new application (e.g., POST a new todo location)
  async submitTodo(formData: any): Promise<void> {
    try {
      const response = await fetch(`${this.url}item_add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type to application/json
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`Failed to submit application: ${response.statusText}`);
      }

      console.log('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  }

  // // deleteItem(todo_id: number) {
  // //   const url = `${this.url}todo/${todo_id}`;

  // //   const headers = new HttpHeaders({
  // //     'Content-Type': 'application/json',
  // // // If you're using auth
  // //   });

  // //   return this.http.delete(url, { headers });
  // }
  async deleteItem(todo_id: number): Promise<number> {
    try {
      // Log for debugging
      console.log("Deleting Todo ID:", todo_id);

      // Send the DELETE request to the backend
      const response = await fetch(`${this.url}todo/${todo_id}`, {
        method: 'DELETE',
      });

      // Log the request URL for debugging
      console.log(`Sent DELETE request to: ${this.url}todo/${todo_id}`);

      // Check if the response is successful (204 status for no content)
      if (response.status === 204) {
        console.log(`Todo item ${todo_id} deleted successfully.`);
        return response.status; // Return the status code (204)
      } else if (!response.ok) {
        // Handle non-success status codes
        throw new Error(`Failed to delete todo with ID ${todo_id}: ${response.statusText}`);
      }

      return response.status;  // Return the status code even if it's not 204
    } catch (error) {
      console.error(`Error deleting todo with ID ${todo_id}:`, error);
      throw error;  // Rethrow the error for the caller to handle
    }
  }





}
