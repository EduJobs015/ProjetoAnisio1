import { ModalidadePao } from "../model/ModalidadePaes";
import { RepositorioModalidade } from "../repository/RepositorioModalidade";

export class ServiceModalidade{
    RepositorioModalidade: RepositorioModalidade = new RepositorioModalidade()

    InserirModalidade(Modalidade: any){
        const{nome,vegano} = Modalidade;
            if(!nome ||!vegano)
            throw new Error("Informações incompletas");      
        const novoProduto = new Modalidade(nome,vegano);
        this.RepositorioModalidade.inserirPao(novoProduto)
    }

    exibirModalidade(){
        return this.RepositorioModalidade.exibirPaes();
    }
    FiltrarID(id:any):ModalidadePao|undefined{
        const IDmodalidade: number = parseInt(id,10);
            return this.RepositorioModalidade.filtrarId(id);     
    }

    mudarTipo(modalidade:any):ModalidadePao|undefined{
        const{id,nome,vegano} = modalidade;
            return this.RepositorioModalidade.mudarTipo(id,nome,vegano);
        
    }
    deletarModalidade(id:any){
        const deletarId: number = parseInt(id,10);
            return this.RepositorioModalidade.deletarModalidade(id);
    }
}


