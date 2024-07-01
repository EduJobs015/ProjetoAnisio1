"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendaPaes = void 0;
class vendaPaes {
    constructor(id, cpfCliente, valorTotal, itensComprados) {
        this.id = this.gerarId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    get getid() {
        return this.id;
    }
    get getcpfCliente() {
        return this.cpfCliente;
    }
    get getvalorTotal() {
        return this.valorTotal;
    }
    get getitensComprados() {
        return this.itensComprados;
    }
    gerarId() {
        return Date.now();
    }
}
exports.vendaPaes = vendaPaes;
