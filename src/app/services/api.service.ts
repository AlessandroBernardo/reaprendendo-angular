
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { } // HttpClient é injetado aqui

  // O método get é genérico, o que significa que você pode usar qualquer tipo de retorno que corresponda ao seu payload JSON.
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  // Você pode adicionar outros métodos HTTP aqui como post, put, delete etc.
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  // etc.

}