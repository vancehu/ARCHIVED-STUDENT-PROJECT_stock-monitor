import { Stock, STOCK_CLOSE } from './stock';

// trim date to a shorter string
export function trimDate(input: string): string {
    return input.substr(5);
    // use momentjs instead of simple trimming for a more complex case
}

// calculate moving average
export function calcSMA(input: Stock, period: number): number[] {
    const result = [];
    let sum = 0;
    for (let i = 0; i < period - 1; i++) {
        sum += parseFloat(input.data[i][STOCK_CLOSE]);
    }
    for (let i = period - 1; i < input.data.length; i++) {
        sum += parseFloat(input.data[i][STOCK_CLOSE]);
        result.push(sum / period);
        sum -= parseFloat(input.data[i - period + 1][STOCK_CLOSE])
    }
    return result;
}