"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarEstoque = adicionarEstoque;
exports.ExibirEstoque = ExibirEstoque;
exports.buscarId = buscarId;
exports.MudarQuantidade = MudarQuantidade;
exports.deletarQuantidade = deletarQuantidade;
const ServiceEstoque_1 = require("../service/ServiceEstoque");
const Service = new ServiceEstoque_1.ServiceEstoque();
function adicionarEstoque(req, res) {
    try {
        const AddEstoque = Service.adicionarEstoque(req.body);
        res.status(200).json({ menssage: "Estoque adicionado" });
    }
    catch (error) {
        res.status(400).json({ menssage: error.message });
    }
}
function ExibirEstoque(req, res) {
    try {
        res.status(200).json(Service.ExibirEstoque);
    }
    catch (error) {
        res.status(400).json({ menssage: error.message });
    }
}
function buscarId(req, res) {
    try {
        const produto = Service.buscarId(req.query.id);
        if (produto) {
            res.status(200);
        }
        else {
            res.status(400);
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
function MudarQuantidade(req, res) {
    try {
        const produto = Service.MudarQuantidade(req.body);
        res.status(200);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
function deletarQuantidade(req, res) {
    try {
        const produto = Service.deletarQuantidade(req.body);
        res.status(200);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
