import {EstoquePaes} from "../model/EstoquePaes";
import { RepositorioEstoque } from "../repository/RepositorioEstoque";
import { RepositorioModalidade } from "../repository/RepositorioModalidade";


    export class ServiceEstoque{
        RepositorioEstoque: RepositorioEstoque;
        RepositorioModalidade: RepositorioModalidade;
        constructor(repositorio:RepositorioEstoque, repositorio2:RepositorioModalidade){
            this.RepositorioModalidade = repositorio2;
            this.RepositorioEstoque = repositorio;
        }
    adicionarEstoque(Produto: any){
        const{modalidadeID,quantidade,precoVenda} = Produto;
            if(!modalidadeID || !quantidade || !precoVenda === undefined)
                throw new Error("Informações incompletas");
            const idService: number = parseInt(modalidadeID); 
            if(!this.RepositorioModalidade.filtrarId(idService))
                throw new Error("Modalidade id não existe")
            // verificar no estoque se  ja existe uma mesma modalidade
            const number: number = parseInt(precoVenda);
        const novoProduto = new EstoquePaes(modalidadeID,quantidade,number);
        this.RepositorioEstoque.adicionarEstoque(novoProduto)
    }
    ExibirEstoque():EstoquePaes[]{
        return this.RepositorioEstoque.ExibirEstoque();
    }

    buscarId(id:any):EstoquePaes|undefined{
        const idService: number = parseInt(id);
            const estoque = this.RepositorioEstoque.buscarId(idService);
        if(estoque){
            return estoque;
        }else{
            throw new Error("Id não encontrado")
        }     

    }
    MudarQuantidade(Produto: any){
        const{id,ModalidadeId,quantidade} = Produto
        const idEstoque: number = parseInt(id);
        if(!ModalidadeId || !quantidade)
            throw new Error("Informações incompletas");
        this.RepositorioEstoque.MudarQuantidade(idEstoque,quantidade);
    }
    deletarQuantidade(Produto:any){
        const{id,ModalidadeId,quantidade,precoVenda} = Produto
        const idEstoque: number = parseInt(id);
        if(!id || !ModalidadeId || !quantidade || !precoVenda)
            throw new Error("Informações incompletas");
        this.RepositorioEstoque.deletarQuantidade(idEstoque,quantidade);
    }

    




}
