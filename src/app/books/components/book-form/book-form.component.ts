import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { BookFormModel } from './book-form.model';
import { BarcodeValidator } from 'src/app/shared/validators/barcode.validator';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {

  @Input() book: BookFormModel;
  @Output() save = new EventEmitter<BookFormModel>();
  @Output() cancel = new EventEmitter<void>();

  bookForm = new FormGroup({
    barcode: new FormControl('', [Validators.required, BarcodeValidator]),
    author: new FormControl('', [Validators.required]),
    title: new FormControl(),
    inStock: new FormControl(),
    shelf: new FormControl()
  });

  constructor() { }

  ngOnChanges() {
    if (this.book) {
      this.bookForm.patchValue(this.book);
    }
  }

}
