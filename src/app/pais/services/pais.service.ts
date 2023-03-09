import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(pais: string): Observable<Pais> {
    const url = `${this.apiUrl}/name/${pais}`;

    return this.http.get<Pais>(url);
  }

  buscarCapital(capital: string): Observable<Pais> {
    const url = `${this.apiUrl}/capital/${capital}`;

    return this.http.get<Pais>(url);
  }

  buscarRegion(region: string) {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Pais>(url);
  }
}
