"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ControlerEstoque_1 = require("./controller/ControlerEstoque");
const ControleModalidade_1 = require("./controller/ControleModalidade");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
//modalidade 
app.get("api/modalidade/todas", ControleModalidade_1.exibirModalidades);
app.post("/api/modalidade", ControleModalidade_1.InserirModalidade);
app.put("/api/modalidade", ControleModalidade_1.mudarTipo);
app.delete("/api/modalidade", ControleModalidade_1.deletarModalidade);
app.get("/api/modalidade", ControleModalidade_1.filtrarId);
//Estoque
app.post("/api/estoque", ControlerEstoque_1.adicionarEstoque);
app.get("/api/estoque/todos", ControlerEstoque_1.ExibirEstoque);
app.get("/api/estoque", ControlerEstoque_1.buscarId);
app.put("/api/estoque", ControlerEstoque_1.MudarQuantidade);
app.delete("/api/estoque", ControlerEstoque_1.deletarQuantidade);
//vendas
app.listen(PORT, logInfo);
