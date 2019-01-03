import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  @Input() rating = 0;
  @Output() clicked = new EventEmitter<number>();

  starWidth = 0;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(rating: number): void {
    this.clicked.emit(rating);
  }
}
