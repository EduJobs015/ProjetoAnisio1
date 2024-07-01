export class EstoquePaes{
    id: number;
    ModalidadeId: number;
    quantidade: number;
    precoVenda: number;
        
    constructor(id: number, ModalidadeId: number, quantidade: number,itensComprados: number, precoVenda: number){
        this.id = this.EstoqueId();
        this.ModalidadeId = ModalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    private EstoqueId():number{
        return Date.now();
        }    
}