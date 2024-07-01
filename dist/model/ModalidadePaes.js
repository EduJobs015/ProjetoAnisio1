"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePao = void 0;
class ModalidadePao {
    constructor(id, nome, vegano) {
        this.id = this.geraId();
        this.nome = nome;
        this.vegano = vegano;
    }
    get getId() {
        return this.id;
    }
    get getnome() {
        return this.nome;
    }
    get getvegano() {
        return this.vegano;
    }
    geraId() {
        return Date.now();
    }
}
exports.ModalidadePao = ModalidadePao;
