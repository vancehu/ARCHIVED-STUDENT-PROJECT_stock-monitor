export class Stock {
    symbol: string;
    //Date,Open,High,Low,Close,Volume,Adj Close
    data: any[];
}
// color sequence for stocks
export const COLOR_SEQ=['red','green','blue','cyan'];
// color sequence for SMA curves
export const COLOR_SMA_SEQ=['lightcoral','lightgreen','lightblue','lightcyan'];

// consistent with data format
export const STOCK_DATE=0;
export const STOCK_OPEN=1;
export const STOCK_HIGH=2;
export const STOCK_LOW=3;
export const STOCK_CLOSE=4;
export const STOCK_VOLUME=5;
export const STOCK_ADJ_CLOSE =6;
