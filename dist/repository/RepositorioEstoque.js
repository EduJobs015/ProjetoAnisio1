"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioEstoque = void 0;
class RepositorioEstoque {
    constructor() {
        this.ListaEstoque = [];
    }
    adicionarEstoque(Produto) {
        this.ListaEstoque.push(Produto);
    }
    ExibirEstoque() {
        return this.ListaEstoque;
    }
    buscarId(id) {
        return this.ListaEstoque.find(Produto => Produto.id === id);
    }
    MudarQuantidade(id, novaQuantidade) {
        const produto = this.buscarId(id); // estudar
        if (produto !== undefined) {
            const adicionar = this.ListaEstoque.indexOf(produto);
        }
        if (produto) {
            produto.quantidade += novaQuantidade;
        }
    }
    deletarQuantidade(id, quantidade) {
        const tirarQuantidade = this.ListaEstoque.find(Produto => Produto.id === id);
        if (tirarQuantidade) {
            tirarQuantidade.quantidade -= quantidade;
            if (tirarQuantidade.quantidade < 0) {
                tirarQuantidade.quantidade = 0; // Define a quantidade como zero, mas não remove o produto, pois estava com problema de undefined
            }
        }
    }
}
exports.RepositorioEstoque = RepositorioEstoque;
