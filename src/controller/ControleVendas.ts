import { Request, Response } from 'express';
import { ServiceVenda } from '../service/ServiceVenda';
import { RepositorioEstoque } from '../repository/RepositorioEstoque';
import { RepositorioModalidade } from '../repository/RepositorioModalidade';
import { RepositorioVenda } from '../repository/RepositorioVendaPaes';

export class VendaController {
    private serviceVenda: ServiceVenda;

    constructor() {
        this.serviceVenda = new ServiceVenda(
            new RepositorioEstoque(), // Aqui você deve passar o construtor correto do RepositorioEstoque
            new RepositorioModalidade(), // Aqui você deve passar o construtor correto do RepositorioModalidade
            new RepositorioVenda() // Aqui você deve passar o construtor correto do RepositorioVenda
        );
    }

    public cadastrarVenda(req: Request, res: Response): void {
        try {
            const { cpfCliente, itensComprados } = req.body;

            const novaVenda = this.serviceVenda.cadastrarVenda({ cpfCliente, itensComprados });

            res.status(201).json(novaVenda);
        } catch (error) {
            res.status(400).json({ message: error.message});
        }
    }

    public buscarItemEstoque(req: Request, res: Response): void {
        try {
            const { estoquePaesId } = req.params;

            const estoque = this.serviceVenda.buscarItemEstoque({ estoquePaesId: parseInt(estoquePaesId) });

            res.json(estoque);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    public encontrarVendaPorId(req: Request, res: Response): void {
        try {
            const { id } = req.params;

            const vendaEncontrada = this.serviceVenda.encontrarId(parseInt(id));

            if (vendaEncontrada) {
                res.json(vendaEncontrada);
            } else {
                res.status(404).json({ error: 'Venda não encontrada' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}