import { RepositorioVenda } from "../repository/RepositorioVendaPaes";
import { RepositorioEstoque } from "../repository/RepositorioEstoque";
import { vendaPaes } from "../model/vandaPaes";
import { Itemvenda } from "../model/Itemvenda";
import { RepositorioModalidade } from "../repository/RepositorioModalidade";
import { EstoquePaes } from "../model/EstoquePaes";
import { error } from "console";


export class ServiceVenda{
    RepositorioEstoque: RepositorioEstoque;
    RepositorioModalidade: RepositorioModalidade;
    RepositorioVenda:RepositorioVenda;
    constructor(repositorio:RepositorioEstoque, repositorio2:RepositorioModalidade,repositorio3:RepositorioVenda){
        this.RepositorioEstoque = repositorio;
        this.RepositorioModalidade = repositorio2;
        this.RepositorioVenda = repositorio3;
    } 
    cadastrarVenda(Produto:any): vendaPaes|undefined{
        const {cpfCliente,itensComprados,} = Produto;
        if(!cpfCliente || !itensComprados|| !Array.isArray(itensComprados)) // verificando se dentro do array que esta dentro de itensComprados esta tudo completo 
            throw new Error("Informações incompletas");
        let resumoItem : Itemvenda [] = [];
        let total = 0;
        
        for(const item of Produto){
            const estoqueProduto = this.RepositorioEstoque.ListaEstoque.find((produtoEstoque => produtoEstoque.id ===item.estoquePaesId));

            if(!estoqueProduto){
                throw new error("produto não encontrado");
            }
            if (estoqueProduto.)
        }
        const idVenda: number = parseInt(id);
        const NovaVenda = new vendaPaes(cpfCliente,itensComprados);
        this.RepositorioVenda.CadastrarVenda(Produto);
    }
    buscarItemEstoque(item:any):EstoquePaes|undefined{
        const estoque = this.RepositorioEstoque.buscarId(item.estoquePaesID)
        if(!estoque || EstoquePaes.getQuantidade)
    }

    encontrarId(id:any){
        const idService: number = parseInt(id);
            return this.RepositorioVenda.EncontarId(id);
    }
}