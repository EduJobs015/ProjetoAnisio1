"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModalidade = void 0;
const RepositorioModalidade_1 = require("../repository/RepositorioModalidade");
class ServiceModalidade {
    constructor() {
        this.RepositorioModalidade = new RepositorioModalidade_1.ModalidadePaesRepositorio;
    }
    InserirModalidade(Modalidade) {
        const { id, Nome, vegano } = Modalidade;
        if (!id || !Nome || !vegano)
            throw new Error("Informações incompletas");
        const novoProduto = new Modalidade(id, Nome, vegano);
        this.RepositorioModalidade.inserirPao(novoProduto);
    }
    exibirModalidade() {
        return this.RepositorioModalidade.exibirPaes();
    }
    FiltrarID(id) {
        const IDmodalidade = parseInt(id, 10);
        return this.RepositorioModalidade.filtrarId(id);
    }
    mudarTipo(modalidade) {
        const { id, nome, vegano } = modalidade;
        return this.RepositorioModalidade.mudarTipo(id, nome, vegano);
    }
    deletarModalidade(id) {
        const deletarId = parseInt(id, 10);
        return this.RepositorioModalidade.deletarModalidade(id);
    }
}
exports.ServiceModalidade = ServiceModalidade;
