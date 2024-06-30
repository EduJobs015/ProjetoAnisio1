export class vendaPaes{
    private id: number;
    private cpfCliente: number;
    private valorTotal: number;
    private itensComprados: string;
        
    constructor(id: number, cpfCliente: number, valorTotal: number,itensComprados: string){
        this.id = this.gerarId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    get getid():number{
        return this.id
    }
    get getcpfCliente():number{
        return this.cpfCliente
    }
    get getvalorTotal():number{
        return this.valorTotal
    }
    get getitensComprados():string{
        return this.itensComprados
    }
    private gerarId():number{
        return Date.now();
    }
}