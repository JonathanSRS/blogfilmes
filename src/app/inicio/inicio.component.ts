import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagemf } from '../model/Postagemf';
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
  //idUser: number = environment.id
idUser = environment.id
  usuario: Usuario = new Usuario()

  postagemf: Postagemf = new Postagemf()
  listaPostagem: Postagemf[]

  tema: Tema = new Tema()
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
      this.usuario = resp
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
    this.postagemService.getAllPostagem().subscribe((resp: Postagemf[])=>{
      this.listaPostagem = resp
    })
   }

   publicar(){
     this.tema.id = this.idTema
     this.postagemf.tema = this.tema

     this.usuario.id = this.idUser
     this.postagemf.usuario = this.usuario
     this.postagemService.postPostagem(this.postagemf).subscribe((resp: Postagemf) => {
       this.postagemf = resp
       console.log(this.postagemf)
       alert('Postagem efetuada com sucesso')
       this.postagemf = new Postagemf()
       this.findAllPostagens()
     })
   }


}
