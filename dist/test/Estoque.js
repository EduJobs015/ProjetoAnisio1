"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositorioEstoque_1 = require("../repository/RepositorioEstoque");
const EstoquePaes_1 = require("../model/EstoquePaes");
const estoque = new RepositorioEstoque_1.RepositorioEstoque();
try {
    estoque.adicionarEstoque(new EstoquePaes_1.EstoquePaes(1, 3, 30, 2, 10));
    const produto = estoque.buscarId(1);
    console.log("sucesso", produto, produto === null || produto === void 0 ? void 0 : produto.quantidade);
    console.log("sucesso");
}
catch (error) {
    console.error("erro");
}
try {
    estoque.deletarQuantidade(1, 10);
    const produto = estoque.buscarId(1);
    console.log("sucesso", produto, produto === null || produto === void 0 ? void 0 : produto.quantidade);
}
catch (error) {
    console.error("erro");
}
