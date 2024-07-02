import { EstoquePaes } from "../model/EstoquePaes";

export class RepositorioEstoque{
    ListaEstoque: EstoquePaes[] = [];


    adicionarEstoque(Produto : EstoquePaes){
        this.ListaEstoque.push(Produto);
    }
    ExibirEstoque(): EstoquePaes[]{
       return this.ListaEstoque;
    }
    buscarId(id:number):EstoquePaes|undefined{
        return this.ListaEstoque.find(Produto =>Produto.id === id)
    
    }
    MudarQuantidade(id:number,novaQuantidade: number):void{
        const adicionar = this.buscarId(id)
        if(adicionar){
            adicionar.quantidade = novaQuantidade
        }
    }
    deletarQuantidade(id:number,quantidade:number){
        const tirarQuantidade = this.ListaEstoque.find(Produto =>Produto.id === id)
            if(tirarQuantidade){
                tirarQuantidade.quantidade -= quantidade;
                if(tirarQuantidade.quantidade < 0) {
                        tirarQuantidade.quantidade = 0; // Define a quantidade como zero, mas não remove o produto
                }
            }    


    }

}