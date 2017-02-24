import { Component, Input } from '@angular/core';
import { Stock, COLOR_SEQ } from './stock';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  colorSeq = COLOR_SEQ;

  @Input()
  selectedIndex: number;
  @Input()
  selectedDate: number;
  @Input()
  stocks: Stock[];
}
