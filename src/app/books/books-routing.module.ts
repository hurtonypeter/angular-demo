import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListPageComponent } from './pages/book-list.page.component';
import { BookDetailsPageComponent } from './pages/book-details.page.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { BookEditPageComponent } from './pages/book-edit.page.component';
import { BookCreatePageComponent } from './pages/book-create.page.component';

const routes: Routes = [
  { path: '', component: BookListPageComponent },
  { path: 'create', component: BookCreatePageComponent },
  { path: ':id', component: BookDetailsPageComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: BookEditPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
