export class ModalidadePao{
    private id: number;
    private nome: string;
    private vegano: boolean
    
    constructor(id: number, nome: string, vegano: boolean){
        this.id = this.geraId();
        this.nome = nome;
        this.vegano = vegano;
        
    }
    get getId():number{
        return this.id;
    }
    get getnome():string{
        return this.nome
    }
    get getvegano():boolean{
        return this.vegano
    }
    private geraId():number{
        return Date.now();
    }
}