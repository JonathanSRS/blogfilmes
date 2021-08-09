import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagemf{
    public id: number
    public filme: string
    public descricao: string
    public dataA: Date
    public lanca: Date
    public tema: Tema
    public usuario: Usuario
}