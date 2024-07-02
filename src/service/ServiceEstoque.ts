import {EstoquePaes} from "../model/EstoquePaes";
import { RepositorioEstoque } from "../repository/RepositorioEstoque";

export class ServiceEstoque{
    RepositorioEstoque: RepositorioEstoque = new RepositorioEstoque();
    
    adicionarEstoque(Produto: any){
        const{id,ModalidadeId,quantidade,precoVenda} = Produto;
            if(!id || !ModalidadeId || !quantidade || !precoVenda)
            throw new Error("Informações incompletas");      
        const novoProduto = new Produto(id,ModalidadeId,quantidade,precoVenda);
        this.RepositorioEstoque.adicionarEstoque(novoProduto)
    }
    ExibirEstoque():EstoquePaes[]{
        return this.RepositorioEstoque.ExibirEstoque();
    }
    buscarId(id:any):EstoquePaes|undefined{
        const idService: number = parseInt(id,10);
            return this.RepositorioEstoque.buscarId(id);     
    }
    MudarQuantidade(Produto: any){
        const{id,ModalidadeId,quantidade,precoVenda} = Produto
        const idEstoque: number = parseInt(id,10);
        if(!id || !ModalidadeId || !quantidade || !precoVenda)
            throw new Error("Informações incompletas");
    }

    




}
