import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
