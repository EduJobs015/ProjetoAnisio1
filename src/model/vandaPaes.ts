export class vendaPaes{
    id: number;
    cpfCliente: number;
    valorTotal: number;
    itensComprados: string;
        
    constructor(id: number, cpfCliente: number, valorTotal: number,itensComprados: string){
        this.id = id;
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
}