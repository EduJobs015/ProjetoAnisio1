"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioVenda = void 0;
class RepositorioVenda {
    constructor() {
        this.ListaVenda = [];
    }
    CadastrarVenda(Produto) {
        this.ListaVenda.push(Produto);
        return this.ListaVenda;
    }
    EncontarId(id) {
        return this.ListaVenda.find(produto => produto.id === id);
    }
}
exports.RepositorioVenda = RepositorioVenda;
