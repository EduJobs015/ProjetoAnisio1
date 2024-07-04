import { error } from "console";
import { ModalidadePao } from "../model/ModalidadePaes";

export class RepositorioModalidade{
    listaModalidade : ModalidadePao[] = [];

    inserirPao(NovaModalidade: ModalidadePao){
        this.listaModalidade.push(NovaModalidade);
    }
    exibirPaes(): ModalidadePao[]{
        return this.listaModalidade;
    }
    filtrarId(id : number):ModalidadePao|undefined{
        return this.listaModalidade.find(produto => produto.id === id);    
    }
    mudarTipo(id: number,Nome: string, vegano: boolean){
        const index = this.listaModalidade.findIndex(Modalidade => Modalidade.id === id);
        if(index!== -1){
            this.listaModalidade[index].nome = Nome
            this.listaModalidade[index].vegano = vegano
        }else{
            throw new Error("Mosalidade não encontrada")
        }
    }
    deletarModalidade(id: number): void {
        const deletarModalidade = this.listaModalidade.findIndex(modalidade => modalidade.id === id);
        if (deletarModalidade !== -1){
            this.listaModalidade.splice(deletarModalidade, 1);
        }else{
            throw new Error("Mosalidade não encontrada")
        }
    }
}