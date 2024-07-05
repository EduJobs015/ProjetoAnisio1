import {EstoquePaes} from './EstoquePaes';
export class Itemvenda{
    estoquePaesId: number;
    quantidade: number;
    nomeItem: string | undefined;
    
    constructor(estoquePaesId: number, quantidade: number, nomeItem: string|undefined){
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
        this.nomeItem = nomeItem;

    }
}