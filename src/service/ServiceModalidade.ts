import { EstoquePaes } from "../model/EstoquePaes";
import { ModalidadePao } from "../model/ModalidadePaes";
import { ModalidadePaesRepositorio } from "../repository/RepositorioModalidade";

export class ServiceModalidade{
    RepositorioModalidade: ModalidadePaesRepositorio = new ModalidadePaesRepositorio

    InserirModalidade(Modalidade: any){
        const{id,Nome,vegano} = Modalidade;
            if(!id || !Nome || !vegano)
            throw new Error("Informações incompletas");      
        const novoProduto = new Modalidade(id,Nome,vegano);
        this.RepositorioModalidade.inserirPao(novoProduto)
    }

    exibirModalidade(){
        return this.RepositorioModalidade.exibirPaes();
    }
    FiltrarID(id:any):ModalidadePao|undefined{
        const IDmodalidade: number = parseInt(id,10);
            return this.RepositorioModalidade.filtrarId(id);     
    }

    mudarTipo(id:number,nome:string,vegano:boolean):EstoquePaes|undefined{
        
    }
}


