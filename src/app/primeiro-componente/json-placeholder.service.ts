import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service'; // Importe o ApiService
import { environment } from '../../environments/env.primeiro-componente';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private readonly BASE_URL = environment.jsonPlaceholderApiUrl;

  constructor(private apiService: ApiService) { } // Injete o ApiService

  // Exemplo de método para buscar posts
  getPosts(): Observable<any> {
    const url = `${this.BASE_URL}/posts`; // monta a URL
    return this.apiService.get<any>(url); // usa o método get do ApiService
  }

  // Adicione aqui outros métodos específicos desta API.
}