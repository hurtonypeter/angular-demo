import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksModule } from './books/books.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule, pathMatch: 'full' },
  { path: 'books', loadChildren: () => BooksModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
