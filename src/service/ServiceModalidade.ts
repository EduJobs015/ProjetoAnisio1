import { ModalidadePao } from "../model/ModalidadePaes";
import { RepositorioModalidade } from "../repository/RepositorioModalidade";

export class ServiceModalidade{
    RepositorioModalidade: RepositorioModalidade;
    constructor(repositorio:RepositorioModalidade){
        this.RepositorioModalidade = repositorio;
    }

    InserirModalidade(Modalidade: any){
        const{nome,vegano} = Modalidade;
            if(!nome || vegano === undefined)
                throw new Error("Informações incompletas");
            //fazer uma verificação por nome;
        const novoProduto = new ModalidadePao(nome,vegano);
        this.RepositorioModalidade.inserirPao(novoProduto)
    }

    exibirModalidade(){
        return this.RepositorioModalidade.exibirPaes();
    }
    FiltrarID(id:any):ModalidadePao|undefined{
        const IDmodalidade: number = parseInt(id);
            return this.RepositorioModalidade.filtrarId(id);     
    }

    mudarTipo(modalidade:any){
        const{id,nome,vegano} = modalidade;
        const IDmodalidade: number = parseInt(id);
            this.RepositorioModalidade.mudarTipo(IDmodalidade,nome,vegano);
        
    }
    deletarModalidade(modalidade:any){
        const{id,nome,vegano} = modalidade
        const deletarId: number = parseInt(id);
            return this.RepositorioModalidade.deletarModalidade(deletarId);
    }
}


