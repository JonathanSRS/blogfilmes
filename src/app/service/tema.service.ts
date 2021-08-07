import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(tema: Tema): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogfilmes.herokuapp.com/tema', this.token)
  }

  getbyIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogfilmes.herokuapp.com/tema/idTryCatch/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogfilmes.herokuapp.com/tema', tema, this.token)
  }
  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogfilmes.herokuapp.com/tema', tema, this.token)
  }
  deleteTema(id: number){
    return this.http.delete(`https://blogfilmes.herokuapp.com/tema/${id}`, this.token)
  }
}
