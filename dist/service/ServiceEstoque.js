"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEstoque = void 0;
const RepositorioEstoque_1 = require("../repository/RepositorioEstoque");
class ServiceEstoque {
    constructor() {
        this.RepositorioEstoque = new RepositorioEstoque_1.RepositorioEstoque();
    }
    adicionarEstoque(Produto) {
        const { id, ModalidadeId, quantidade, precoVenda } = Produto;
        if (!id || !ModalidadeId || !quantidade || !precoVenda)
            throw new Error("Informações incompletas");
        const novoProduto = new Produto(id, ModalidadeId, quantidade, precoVenda);
        this.RepositorioEstoque.adicionarEstoque(novoProduto);
    }
    ExibirEstoque() {
        return this.RepositorioEstoque.ExibirEstoque();
    }
    buscarId(id) {
        const idService = parseInt(id, 10);
        return this.RepositorioEstoque.buscarId(id);
    }
    MudarQuantidade(Produto) {
        const { id, ModalidadeId, quantidade, precoVenda } = Produto;
        const idEstoque = parseInt(id, 10);
        if (!id || !ModalidadeId || !quantidade || !precoVenda)
            throw new Error("Informações incompletas");
    }
    deletarQuantidade(Produto) {
        const { id, ModalidadeId, quantidade, precoVenda } = Produto;
        const idEstoque = parseInt(id, 10);
        if (!id || !ModalidadeId || !quantidade || !precoVenda)
            throw new Error("Informações incompletas");
    }
}
exports.ServiceEstoque = ServiceEstoque;
