import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(login: Login): Observable<Login>{
    return this.http.post<Login>('https://blogfilmes.herokuapp.com/usuarios/logar', login)
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogfilmes.herokuapp.com/usuarios/cadastrar', usuario)
  }
}
