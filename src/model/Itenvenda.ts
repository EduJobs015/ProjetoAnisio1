import {EstoquePaes} from './EstoquePaes';
export class Itemvenda{
    estoquePaesId: number;
    quantidade: number;
    
    constructor(estoquePaesId: number, quantidade: number){
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
    }
}