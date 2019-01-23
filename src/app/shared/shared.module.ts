import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RatingComponent } from './components/rating/rating.component';
import { BooleanToFaiconPipe } from './pipes/boolean-to-faicon.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { HightlighterDirective } from './directives/highlighter.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BarcodeValidatorDirective } from './validators/barcode.validator';

@NgModule({
  declarations: [
    RatingComponent,
    BooleanToFaiconPipe,
    HightlighterDirective,
    BarcodeValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BarcodeValidatorDirective,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RatingComponent,
    BooleanToFaiconPipe,
    HttpClientModule,
    HightlighterDirective
  ]
})
export class SharedModule { }
