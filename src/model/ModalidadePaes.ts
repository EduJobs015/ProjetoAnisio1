export class ModalidadePao{
    id: number;
    nome: string;
    vegano: boolean
    
    constructor(nome: string, vegano: boolean){
        this.id = this.criarId();
        this.nome = nome;
        this.vegano = vegano;
    }
    criarId():number{
        return Date.now();
    }

    getNome():string{
        return this.nome
    }
}  