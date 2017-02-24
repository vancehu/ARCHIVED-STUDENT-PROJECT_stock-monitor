import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  @Input()
  showSMA: boolean;
  @Output()
  showSMAChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  SMAPeriod: number;
  @Output()
  SMAPeriodChange: EventEmitter<number> = new EventEmitter();

  // toogle SMA visibility
  toggleSMA(): void {
    this.showSMAChange.emit(!this.showSMA);
  }

  // change SMA period
  changeSMAPeriod(period: number): void{
    this.SMAPeriodChange.emit(period);
  }
}
