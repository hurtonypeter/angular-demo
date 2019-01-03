import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RatingComponent } from './components/rating/rating.component';
import { BooleanToFaiconPipe } from './pipes/boolean-to-faicon.pipe';

@NgModule({
  declarations: [
    RatingComponent,
    BooleanToFaiconPipe
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatTableModule,
    RatingComponent,
    BooleanToFaiconPipe
  ]
})
export class SharedModule { }
