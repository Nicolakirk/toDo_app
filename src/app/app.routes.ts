import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { DetailsComponent } from './Details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'todo/:id',
    component: DetailsComponent,
    title: 'Todo details',
  },
];
export default routeConfig;
