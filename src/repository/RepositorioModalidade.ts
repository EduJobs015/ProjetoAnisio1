import { ModalidadePao } from "../model/ModalidadePaes";

export class ModalidadePaesRepositorio{
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
    mudarTipo(id: number,Nome: string, vegano: boolean):ModalidadePao|undefined{
        const modalidade = this.filtrarId(id);
        if (modalidade){
            modalidade.nome = Nome
            modalidade.vegano = vegano
            return modalidade;
        } else{
            return undefined
        }
    }
    deletarModalidade(id: number): void {
        const deletarModalidade = this.listaModalidade.findIndex(modalidade => modalidade.id === id);
        if (deletarModalidade !== -1){
            this.listaModalidade.splice(deletarModalidade, 1);
        }
    }
}