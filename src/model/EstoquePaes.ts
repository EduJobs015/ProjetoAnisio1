export class EstoquePaes{
    private id: number;
    private ModalidadeId: number;
    private quantidade: number;
    private precoVenda: number;
        
    constructor(id: number, ModalidadeId: number, quantidade: number,itensComprados: number, precoVenda: number){
        this.id = this.EstoqueId();
        this.ModalidadeId = ModalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    get getid():number{
        return this.id
    }
    get getModalidadeId():number{
        return this.ModalidadeId
    }
    get getquantidade():number{
        return this.quantidade
    }
    get getprecoVenda():number{
        return this.precoVenda
    }
    private EstoqueId():number{
        return Date.now();

        }    
}