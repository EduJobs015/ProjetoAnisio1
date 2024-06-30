import {EstoquePaes} from './EstoquePaes';
export class Itemvenda{
    private estoquePaesId: number;
    private quantidade: number;
    
    constructor(estoquePaesId: number, quantidade: number){
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
    }
    get getestoquePaesId():number{
        return this.estoquePaesId
    }
    get getquantidade():number{
        return this.quantidade
    }
}