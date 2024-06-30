import express from "express";
import { cadastrarProduto, pesquisarProdutoPorID, listaProdutos } from "./controller/ProductController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}


app.listen(PORT, logInfo);


