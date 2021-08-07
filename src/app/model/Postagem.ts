import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public filme: string
    public descricao: string
    public date: Date
    public lanca: Date
    public tema: Tema
    public usuario: Usuario
}