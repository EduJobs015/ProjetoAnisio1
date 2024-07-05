import { RepositorioVenda } from "../repository/RepositorioVendaPaes";
import { RepositorioEstoque } from "../repository/RepositorioEstoque";
import { vendaPaes } from "../model/vandaPaes";
import { Itemvenda } from "../model/Itemvenda";
import { RepositorioModalidade } from "../repository/RepositorioModalidade";


export class ServiceVenda{
    RepositorioEstoque: RepositorioEstoque;
    RepositorioModalidade: RepositorioModalidade;
    RepositorioVenda:RepositorioVenda;
    constructor(repositorio:RepositorioEstoque, repositorio2:RepositorioModalidade,repositorio3:RepositorioVenda){
        this.RepositorioEstoque = repositorio;
        this.RepositorioModalidade = repositorio2;
        this.RepositorioVenda = repositorio3;
    } 

    cadastrarVenda(Produto:any){
        const {cpfCliente,itensComprados,} = Produto;
        if(!cpfCliente || !itensComprados)
            throw new Error("Informações incompletas");
        const idVenda: number = parseInt(id);
        const NovaVenda = new vendaPaes(cpfCliente,itensComprados);
        this.RepositorioVenda.CadastrarVenda(Produto);
    }
    encontrarId(id:any){
        const idService: number = parseInt(id);
            return this.RepositorioVenda.EncontarId(id);
    }
}