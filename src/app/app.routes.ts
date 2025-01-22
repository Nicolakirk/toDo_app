import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { DetailsComponent } from './Details/details.component';
import { Post_todoComponent } from './post_todo/post_todo.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'todo/:todo_id',
    component: DetailsComponent,
    title: 'Todo details',
  },
  {
    path: 'add_todo',
    component: Post_todoComponent,
    title: 'Todo add form ',
  },
];
export default routeConfig;
