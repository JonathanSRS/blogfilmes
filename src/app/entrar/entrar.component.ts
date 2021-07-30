import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { Login } from './../model/Login';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  login: Login = new Login()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.login).subscribe((resp: Login)=>{
      this.login = resp

      environment.token = this.login.token
      environment.nome = this.login.nome
      environment.id = this.login.id
      // environment.foto = this.login.foto

      console.log(environment.token)

      console.log(environment.nome)

      console.log(environment.id)


      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })

  }

}
