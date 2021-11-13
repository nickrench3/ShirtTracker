import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HistoryComponent } from './history/history.component';
import { ShirtComponent } from './shirt/shirt.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShirtComponent
  },
  {
    path: 'Shirt',
    component: ShirtComponent
  },
  {
    path: 'History',
    component: HistoryComponent
  },
  {
    path: 'Summary',
    component: SummaryComponent
  },
  { 
    path: '**', 
    redirectTo: '/Error',
    pathMatch: 'full'
  },
  {
    path: 'Error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
