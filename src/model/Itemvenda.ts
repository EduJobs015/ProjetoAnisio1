import {EstoquePaes} from './EstoquePaes';
export class Itemvenda{
    estoquePaesId: EstoquePaes;
    quantidade: number;
    
    constructor(estoquePaesId: EstoquePaes, quantidade: number){
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
    }
}