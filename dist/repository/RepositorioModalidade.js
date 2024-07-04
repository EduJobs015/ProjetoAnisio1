"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaesRepositorio = void 0;
class ModalidadePaesRepositorio {
    constructor() {
        this.listaModalidade = [];
    }
    inserirPao(NovaModalidade) {
        this.listaModalidade.push(NovaModalidade);
    }
    exibirPaes() {
        return this.listaModalidade;
    }
    filtrarId(id) {
        return this.listaModalidade.find(produto => produto.id === id);
    }
    mudarTipo(id, Nome, vegano) {
        const modalidade = this.filtrarId(id);
        if (modalidade) {
            modalidade.nome = Nome;
            modalidade.vegano = vegano;
            return modalidade;
        }
        else {
            return undefined;
        }
    }
    deletarModalidade(id) {
        const deletarModalidade = this.listaModalidade.findIndex(modalidade => modalidade.id === id);
        if (deletarModalidade !== -1) {
            this.listaModalidade.splice(deletarModalidade, 1);
        }
    }
}
exports.ModalidadePaesRepositorio = ModalidadePaesRepositorio;
