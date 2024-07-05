export class vendaPaes{
    id: number;
    cpfCliente: number;
    valorTotal: number;
    itensComprados: {estoquePaesID: number, quantidade: number}[];;
        
    constructor(cpfCliente: number,itensComprados: {estoquePaesID: number, quantidade: number}[]){
        this.id = this.criarId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = 0;
        this.itensComprados = itensComprados;
    }
    criarId():number{
        return Date.now();
    }
}