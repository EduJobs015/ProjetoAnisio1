"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirModalidades = exibirModalidades;
exports.InserirModalidade = InserirModalidade;
exports.filtrarId = filtrarId;
exports.mudarTipo = mudarTipo;
exports.deletarModalidade = deletarModalidade;
const ServiceModalidade_1 = require("../service/ServiceModalidade");
const Service = new ServiceModalidade_1.ServiceModalidade();
function exibirModalidades(req, res) {
    try {
        res.status(200).json(Service.exibirModalidade);
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
}
function InserirModalidade(req, res) {
    try {
        const novoModalidade = Service.InserirModalidade(req.body);
        res.status(200);
    }
    catch (error) {
        res.status(400).json({ menssage: error.message });
    }
}
function filtrarId(req, res) {
    try {
        const produto = Service.FiltrarID(req.query.id);
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
function mudarTipo(req, res) {
    try {
        const produto = Service.mudarTipo(req.body);
        res.status(200);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
function deletarModalidade(req, res) {
    try {
        const produto = Service.deletarModalidade(req.query.id);
        res.status(200);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
