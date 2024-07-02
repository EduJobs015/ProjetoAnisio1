export class ModalidadePao{
    id: number;
    nome: string;
    vegano: boolean
    
    constructor(id: number, nome: string, vegano: boolean){
        this.id = id;
        this.nome = nome;
        this.vegano = vegano;
    }
}  