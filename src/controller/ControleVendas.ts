import { Request, Response } from 'express';
import { ServiceVenda } from '../service/ServiceVenda';

export class VendaController {
    serviceVenda: ServiceVenda;

    constructor(serviceVenda: ServiceVenda) {
        this.serviceVenda = serviceVenda;
    }

    public cadastrarVenda(req: Request, res: Response){
        try {
            const { cpfCliente, itensComprados } = req.body;

            if (!cpfCliente || !itensComprados) {
                res.status(400).json({ message: 'Dados insuficientes para cadastrar a venda' });
            }

            const novaVenda = this.serviceVenda.cadastrarVenda({ cpfCliente, itensComprados });

            res.status(201).json(novaVenda);
        } catch (error) {
            res.status(400).json({ message: error || 'Erro ao cadastrar venda' });
        }
    }

    public buscarItemEstoque(req: Request, res: Response){
        try {
            const { estoquePaesId } = req.params;

            if (!estoquePaesId) {
                res.status(400).json({ error: 'ID do estoque não fornecido' });
            }

            const estoque = this.serviceVenda.buscarItemEstoque({ estoquePaesId: parseInt(estoquePaesId) });

            if (estoque) {
                res.json(estoque);
            } else {
                res.status(404).json({ error: 'Item do estoque não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error || 'Erro ao buscar item do estoque' });
        }
    }

    public encontrarVendaPorId(req: Request, res: Response){
        try {
            const { id } = req.params;

            if (!id) {
                res.status(400).json({ error: 'ID da venda não fornecido' });
            }

            const vendaEncontrada = this.serviceVenda.encontrarId(parseInt(id));

            if (vendaEncontrada) {
                res.json(vendaEncontrada);
            } else {
                res.status(404).json({ error: 'Venda não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error || 'Erro ao buscar venda por ID' });
        }
    }
}
