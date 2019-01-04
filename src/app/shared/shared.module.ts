import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RatingComponent } from './components/rating/rating.component';
import { BooleanToFaiconPipe } from './pipes/boolean-to-faicon.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RatingComponent,
    BooleanToFaiconPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    RatingComponent,
    BooleanToFaiconPipe
  ]
})
export class SharedModule { }
