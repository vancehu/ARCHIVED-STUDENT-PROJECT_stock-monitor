import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// a service implementing the collection of apis; currently only getAllStocks is used
@Injectable()
export class ApiService {
    // change server address here if needed
    private url: string = 'http://localhost:3000';

    constructor(private http: Http) { };

    getAllStocks(): Observable<Response> {
        return this.http.get(`${this.url}/stocks`);
    }

    getStock(symbol: string): Observable<Response> {
        return this.http.get(`${this.url}/stock/${symbol}`);
    }

    getSymbols(): Observable<Response> {
        return this.http.get(`${this.url}/symbols`);
    }

}