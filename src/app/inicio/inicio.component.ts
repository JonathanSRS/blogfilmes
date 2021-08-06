import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  idUser: number = environment.id
  //idUser = environment.id
  user: Usuario = new Usuario()

  tema: Tema = new Tema()
  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  listaTema: Tema[]
  idTema: number

  constructor(

    private router: Router,
    private postagemService: PostagemService,
    private auth: AuthService,
    private temaService: TemaService,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua seção expirou')
      this.router.navigate(['/entrar'])
    }
    this.findAllTemas()
    this.findAllPostagens()
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: Usuario)=>{
      this.user = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema(this.tema).subscribe((resp: Tema[]) => {
        this.listaTema = resp
     })
   }

   findTemaById(){
     this.temaService.getbyIdTema(this.idTema).subscribe((resp: Tema)=>{
       this.tema = resp
     })
   }

   findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem
    })
   }

   publicar(){
     this.tema.id = this.idTema
     this.postagem.tema = this.tema

     this.user.id = this.idUser
     this.postagem.usuario = this.user

     this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
       this.postagem = resp
       alert('Postagem efetuada com sucesso')
       this.postagem = new Postagem()
       this.findAllPostagens()
     })
   }


}
