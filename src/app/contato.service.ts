import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseUrl = 'https://agendatelefonica3-production.up.railway.app/contato';

  constructor(private http: HttpClient) { }

  getContato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarContato(contato: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, contato);
  }

  atualizarContato(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletarContato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  } 

  getListaContatos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);  
  }
}
