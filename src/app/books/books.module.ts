import { NgModule } from '@angular/core';

import { BooksRoutingModule } from './books-routing.module';
import { BookListPageComponent } from './pages/book-list.page.component';
import { BooksApiClientService } from './clients/books-api-client.service';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsPageComponent } from './pages/book-details.page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './clients/mock/fake-books-api-client.service';

@NgModule({
  declarations: [
    BookListPageComponent,
    BookDetailsPageComponent
  ],
  imports: [
    SharedModule,
    BooksRoutingModule
  ],
  providers: [
    BooksApiClientService,
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
  ]
})
export class BooksModule { }
