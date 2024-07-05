export class EstoquePaes{
    id: number;
    ModalidadeId: number;
    quantidade: number;
    precoVenda: number;
        
    constructor(id: number, ModalidadeId: number, quantidade: number,itensComprados: number, precoVenda: number){
        this.id = this.criarId();
        this.ModalidadeId = ModalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    criarId():number{
        return Date.now();
    }   
}