import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id:number
    public filme: string
    public descricao: string
    public lanca: Date
    public date: Date
    public usuario: Usuario
    public tema:Tema

}