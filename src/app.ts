import express from "express";

import { RepositorioEstoque } from "./repository/RepositorioEstoque";
import { RepositorioModalidade } from "./repository/RepositorioModalidade";
import { RepositorioVenda } from "./repository/RepositorioVendaPaes";

import { ServiceEstoque } from "./service/ServiceEstoque";
import { ServiceModalidade } from "./service/ServiceModalidade";
import { ServiceVenda } from "./service/ServiceVenda";
import { ControleModalidade } from "./controller/ControleModalidade"; // Removido duplicação

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const ModalidadePaesRepositorio = new RepositorioModalidade();
const EstoqueRepositorio = new RepositorioEstoque();
const VendaRepositorio = new RepositorioVenda();

//const EstoqueService = new ServiceEstoque(EstoqueRepositorio); // Certifique-se de que o serviço aceita o repositório
const ModalidadeService = new ServiceModalidade(ModalidadePaesRepositorio);
//const VendaService = new ServiceVenda(VendaRepositorio);

const controleModalidade = new ControleModalidade(ModalidadeService); // Usar camelCase para instâncias

function logInfo() {
    console.log(`API em execução no URL: http://localhost:${PORT}`);
}

//modalidade 
app.post("/api/modalidade",(req,res)=> controleModalidade.InserirModalidade(req,res)); // Usar bind para garantir o contexto correto
app.get("/api/modalidade/todos",(req,res)=> controleModalidade.exibirModalidades(req,res));
app.put("/api/modalidade",(req,res)=> controleModalidade.mudarTipo(req,res));
app.delete("/api/modalidade",(req,res)=> controleModalidade.deletarModalidade(req,res));
app.get("/api/modalidade",(req,res)=> controleModalidade.filtrarId(req,res));

//Estoque
//app.post("/api/estoque", adicionarEstoque)
//app.get("/api/estoque/todos", ExibirEstoque)
//app.get("/api/estoque", buscarId)
//app.put("/api/estoque", MudarQuantidade)
//app.delete("/api/estoque", deletarQuantidade)

//vendas

app.listen(PORT, logInfo);
