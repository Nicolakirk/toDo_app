import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>
    <header class="brand-name">
      <a [routerLink]="['/']">

         <h1> To Do App</h1>
         </a>
         <a [routerLink]="['/add_todo']" class="todo-post-link">
      + To-do
    </a>
        </header>

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do_app';
}
