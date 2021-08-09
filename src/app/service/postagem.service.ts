import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagemf } from './../model/Postagemf';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagemf[]>{
    return this.http.get<Postagemf[]>('https://blogfilmes.herokuapp.com/postagem', this.token)
  }

  postPostagem(postagemf: Postagemf): Observable<Postagemf>{
    return this.http.post<Postagemf>('https://blogfilmes.herokuapp.com/postagem', postagemf, this.token)
  } 
}