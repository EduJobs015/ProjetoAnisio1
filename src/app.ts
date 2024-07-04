import express from "express";

import { RepositorioEstoque } from "./repository/RepositorioEstoque";
import { RepositorioModalidade } from "./repository/RepositorioModalidade";
import { RepositorioVenda } from "./repository/RepositorioVendaPaes";

import { ServiceEstoque } from "./service/ServiceEstoque";
import { ServiceModalidade } from "./service/ServiceModalidade";
import { ServiceVenda } from "./service/ServiceVenda";
import { InserirModalidade, deletarModalidade, exibirModalidades, filtrarId, mudarTipo } from "./controller/ControleModalidade";


const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


const ModalidadePaesRepositorio = new RepositorioEstoque();
const EstoqueRepositorio = new RepositorioEstoque();
const VendaRepositorio  = new RepositorioVenda();

const EstoqueService = new ServiceEstoque();
const ModalidadeIdodalidadeService = new ServiceModalidade();
const VendaService = new ServiceVenda();


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
//modalidade 
app.post("/api/modalidade",InserirModalidade)
app.get( "api/modalidade/todas", exibirModalidades)
app.put("/api/modalidade",mudarTipo)
app.delete("/api/modalidade",deletarModalidade)
app.get("/api/modalidade",filtrarId)

//Estoque
//app.post("/api/estoque",adicionarEstoque)
//app.get("/api/estoque/todos",ExibirEstoque)
//app.get("/api/estoque",buscarId)
//app.put("/api/estoque",MudarQuantidade)
//app.delete("/api/estoque",deletarQuantidade)

//vendas


app.listen(PORT, logInfo);


