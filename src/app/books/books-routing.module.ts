import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListPageComponent } from './pages/book-list.page.component';
import { BookDetailsPageComponent } from './pages/book-details.page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: BookListPageComponent },
  { path: ':id', component: BookDetailsPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
