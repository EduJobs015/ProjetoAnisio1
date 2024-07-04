import express from "express";
import { ExibirEstoque, MudarQuantidade, adicionarEstoque, buscarId,deletarQuantidade } from "./controller/ControlerEstoque";
import {InserirModalidade, deletarModalidade, exibirModalidades, filtrarId, mudarTipo } from "./controller/ControleModalidade";

import { Itemvenda} from "./model/Itenvenda";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


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


