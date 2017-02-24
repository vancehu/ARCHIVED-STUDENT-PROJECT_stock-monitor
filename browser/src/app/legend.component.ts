import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stock, COLOR_SEQ } from './stock';

@Component({
  selector: 'stock-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent {
  colorSeq = COLOR_SEQ;
  
  @Input()
  stocks: Stock[];
  
  @Input()
  showStocks: boolean[];
  @Output()
  showStocksChange: EventEmitter<boolean[]> = new EventEmitter();

  @Input()
  selectedIndex: number;
  @Output()
  selectedIndexChange: EventEmitter<number> = new EventEmitter();

  // change stock visibility
  toggleStock(index: number, event): void {
    event.stopPropagation();
    this.showStocks[index] = !this.showStocks[index];
    this.showStocksChange.emit(this.showStocks.slice());

    // if the selcted stock is about to be hidden also remove the selection
    if (this.selectedIndex === index && !this.showStocks[index]) {
      this.selectedIndex = -1;
      this.selectedIndexChange.emit(this.selectedIndex);
    }
  }

  // change selected stock
  changeSelected(index: number): void {
    if (this.showStocks[index]) {
      this.selectedIndex = index;
      this.selectedIndexChange.emit(this.selectedIndex);
    }
  }
}
