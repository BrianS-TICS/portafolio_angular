import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasTextualesService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'http://127.0.0.1:8000/api';

  public obtenerCitas(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/frase');
  }
}
