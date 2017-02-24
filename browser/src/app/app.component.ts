import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Stock } from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // current index of selected date
  selectedDate: number;
  // current index of selected stock
  selectedIndex: number;
  // show Simple Moving Average(SMA)
  showSMA: boolean;
  // A boolean array which control the visibility of stocks
  showStocks: boolean[];
  // SMA period (interval)
  SMAPeriod: number;
  // stocks data
  stocks: Stock[];

  constructor(private api: ApiService) {
    this.showSMA = false;
    this.SMAPeriod = 5;
    this.selectedIndex = -1;
    this.selectedDate = -1;
  };

  // for simplicity all the data is fetched at the same time by using getAllStocks
  // use getSymbols & getStock for larger data
  getAllStocks(): void {
    this.api.getAllStocks().subscribe(response => {
      this.stocks = response.json();
      this.showStocks = this.stocks.map(stock => true);
    });
  }

  // get all stocks on page load  
  ngOnInit(): void {
    this.getAllStocks();
  }
}
