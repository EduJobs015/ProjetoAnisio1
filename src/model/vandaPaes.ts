import { Itemvenda } from "./Itemvenda";

export class vendaPaes{
    id: number;
    cpfCliente: number;
    itensComprados:Itemvenda[];
    valorTotal: number;
        
    constructor(cpfCliente: number,valorTotal : number ,itensComprados: Itemvenda[]){
        this.id = this.criarId();
        this.cpfCliente = cpfCliente;
        this.itensComprados = itensComprados;
        this.valorTotal = valorTotal;
    }
    criarId():number{
        return Date.now();
    }
}