import { RepositorioVenda } from "../repository/RepositorioVendaPaes";
import { vendaPaes } from "../model/vandaPaes";
import { Itemvenda } from "../model/Itenvenda";


export class ServiceVenda{
    RepositorioVenda: RepositorioVenda = new RepositorioVenda(); 

    cadastrarVenda(Produto:any){
        const {id,cpfCliente,valorTotal,itensComprados,} = Produto;
        if(!id || !cpfCliente || !valorTotal || !itensComprados)
            throw new Error("Informações incompletas");
        this.RepositorioVenda.CadastrarVenda(Produto);
    }
    encontrarId(id:any){
        const idService: number = parseInt(id,10);
            return this.RepositorioVenda.EncontarId(id);
    }
}