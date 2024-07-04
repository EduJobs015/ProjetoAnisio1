"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceVenda = void 0;
const RepositorioVendaPaes_1 = require("../repository/RepositorioVendaPaes");
class ServiceVenda {
    constructor() {
        this.RepositorioVenda = new RepositorioVendaPaes_1.RepositorioVenda();
    }
    cadastrarVenda(Produto) {
        const { id, cpfCliente, valorTotal, itensComprados, } = Produto;
        if (!id || !cpfCliente || !valorTotal || !itensComprados)
            throw new Error("Informações incompletas");
        this.RepositorioVenda.CadastrarVenda(Produto);
    }
    encontrarId(id) {
        const idService = parseInt(id, 10);
        return this.RepositorioVenda.EncontarId(id);
    }
}
exports.ServiceVenda = ServiceVenda;
