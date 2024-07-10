import express from "express";

import { RepositorioEstoque } from "./repository/RepositorioEstoque";
import { RepositorioModalidade } from "./repository/RepositorioModalidade";
import { RepositorioVenda } from "./repository/RepositorioVendaPaes";
import { RepositorioItem } from "./repository/RepositorioItemVenda";

import { ServiceEstoque } from "./service/ServiceEstoque";
import { ServiceModalidade } from "./service/ServiceModalidade";
import { ServiceVenda } from "./service/ServiceVenda";

import { ControleModalidade } from "./controller/ControleModalidade";
import { ControleEstoque } from "./controller/ControlerEstoque";
import { VendaController } from "./controller/ControleVendas";
import { vendaPaes } from "./model/vandaPaes";
import { Itemvenda } from "./model/Itemvenda";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const ModalidadePaesRepositorio = new RepositorioModalidade();
const EstoqueRepositorio = new RepositorioEstoque();
const VendaRepositorio = new RepositorioVenda();

const EstoqueService = new ServiceEstoque(EstoqueRepositorio,ModalidadePaesRepositorio); // Certifique-se de que o serviço aceita o repositório
const ModalidadeService = new ServiceModalidade(ModalidadePaesRepositorio);
const serviceVenda = new ServiceVenda(EstoqueRepositorio,ModalidadePaesRepositorio,VendaRepositorio)
//const VendaService = new ServiceVenda(VendaRepositorio);

const controleModalidade = new ControleModalidade(ModalidadeService); 
const ControleEstoques = new ControleEstoque(EstoqueService);
const ControleVendas = new VendaController(serviceVenda);


function logInfo() {
    console.log(`API em execução no URL: http://localhost:${PORT}`);
}

//modalidade 
app.post("/api/modalidade",(req,res)=> controleModalidade.InserirModalidade(req,res));
app.get("/api/modalidade/todos",(req,res)=> controleModalidade.exibirModalidades(req,res));
app.put("/api/modalidade",(req,res)=> controleModalidade.mudarTipo(req,res));
app.delete("/api/modalidade",(req,res)=> controleModalidade.deletarModalidade(req,res));
app.get("/api/modalidade",(req,res)=> controleModalidade.buscarId(req,res));

//Estoque
app.post("/api/estoque",(req,res)=>ControleEstoques.adicionarEstoque(req,res));
app.get("/api/estoque/todos",(req,res)=>ControleEstoques.ExibirEstoque(req,res));
app.get("/api/estoque",(req,res)=> ControleEstoques.buscarId(req,res));
app.put("/api/estoque",(req,res)=> ControleEstoques.MudarQuantidade(req,res));
app.delete("/api/estoque", (req,res)=>ControleEstoques.deletarQuantidade(req,res));

//Venda
app.post("/api/venda",(req,res)=>ControleVendas.cadastrarVenda(req,res));
app.get("/api/venda",(req,res)=>ControleVendas.buscarId(req,res));

//vendas

app.listen(PORT, logInfo);
