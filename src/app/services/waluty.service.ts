import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Table } from './table';

@Injectable({
  providedIn: 'root'
})
export class WalutyService {

  constructor(private http: HttpClient) { }
  
  getData(letter): Observable<Table> {
    return this.http.get<Table>( 'http://api.nbp.pl/api/exchangerates/tables/' + letter + '?format=json' );
  }

}
