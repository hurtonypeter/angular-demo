import { NgModule } from '@angular/core';

import { BooksRoutingModule } from './books-routing.module';
import { BookListPageComponent } from './pages/book-list.page.component';
import { BooksApiClientService } from './clients/books-api-client.service';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsPageComponent } from './pages/book-details.page.component';

@NgModule({
  declarations: [
    BookListPageComponent,
    BookDetailsPageComponent
  ],
  imports: [
    SharedModule,
    BooksRoutingModule
  ],
  providers: [BooksApiClientService]
})
export class BooksModule { }
