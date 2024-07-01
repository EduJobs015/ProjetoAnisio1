"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itemvenda = void 0;
class Itemvenda {
    constructor(estoquePaesId, quantidade) {
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
    }
    get getestoquePaesId() {
        return this.estoquePaesId;
    }
    get getquantidade() {
        return this.quantidade;
    }
}
exports.Itemvenda = Itemvenda;
