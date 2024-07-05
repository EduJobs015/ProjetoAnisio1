import { Itemvenda } from "../model/Itemvenda";


export class RepositorioItem{
    ListaItemvenda : Itemvenda[] = []

    quantidadeVenda(item:Itemvenda): void{
        this.ListaItemvenda.push(item);
    }
}