import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasTextualesService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://squid-app-g8xw5.ondigitalocean.app/portafolio-backend';

  public obtenerCitas(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/api/frase');
  }

  public crearCita(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/api/frase', data);
  }

  public eliminarCita(id: any): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/api/frase/'+id);
  }

  public crearAutor(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/api/author', data);
  }

  public obtenerAutores(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/api/author');
  }

}
