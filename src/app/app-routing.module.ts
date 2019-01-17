import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BooksModule } from './books/books.module';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => CoreModule
  },
  {
    path: 'books',
    component: LayoutComponent,
    loadChildren: () => BooksModule,
    // loadChildren: './books/books.module#BooksModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // , {
      //   preloadingStrategy: PreloadAllModules,
      // }
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
