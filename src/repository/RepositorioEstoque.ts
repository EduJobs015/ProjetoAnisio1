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
        const index = this.ListaEstoque.findIndex(Estoque => Estoque.id === id);
        if(index!== -1){
            this.ListaEstoque[index].quantidade = novaQuantidade + this.ListaEstoque[index].quantidade
        }else{
            throw new Error("Produto não encontrado")
        }
    }
    deletarQuantidade(id:number,quantidade:number){
        const index = this.ListaEstoque.findIndex(Estoque => Estoque.id === id);
        if(index!== -1){
            this.ListaEstoque[index].quantidade =  this.ListaEstoque[index].quantidade - quantidade
        }else{
            throw new Error("Produto não encontrado")
        }
    } 
    consultarNomeDaEstoque(id: any): string | undefined {
        const modalidade = this.ListaEstoque.find(modalidade => modalidade.id === id);
        return;

    }   


    }
