"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
class EstoquePaes {
    constructor(id, ModalidadeId, quantidade, itensComprados, precoVenda) {
        this.id = this.EstoqueId();
        this.ModalidadeId = ModalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    get getid() {
        return this.id;
    }
    get getModalidadeId() {
        return this.ModalidadeId;
    }
    get getquantidade() {
        return this.quantidade;
    }
    get getprecoVenda() {
        return this.precoVenda;
    }
    EstoqueId() {
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
