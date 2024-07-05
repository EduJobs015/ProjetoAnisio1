import { Itemvenda } from "./Itemvenda";

export class vendaPaes{
    id: number;
    cpfCliente: number;
    valorTotal: number;
    itensComprados:Itemvenda[];;
        
    constructor(cpfCliente: number,valorTotal : number ,itensComprados: Itemvenda[]){
        this.id = this.criarId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = 0;
        this.itensComprados = itensComprados;
    }
    criarId():number{
        return Date.now();
    }
}