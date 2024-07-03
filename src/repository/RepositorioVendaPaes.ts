import { vendaPaes } from "../model/vandaPaes";
import { Itemvenda } from "../model/Itenvenda";

export class RepositorioVenda{
    ListaVenda : vendaPaes[] = [];


    CadastrarVenda(Produto: vendaPaes){
        this.ListaVenda.push(Produto);
            return this.ListaVenda;
    }
    EncontarId(id:number):vendaPaes|undefined{
            return this.ListaVenda.find(produto => produto.id === id); 
    }

}