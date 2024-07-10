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

    public encontrarVendaPorId(req: Request, res: Response){
        try {
            const id  = this.serviceVenda.exibirvenda();

            if (!id) {
                res.status(400).json({ error: 'ID da venda não fornecido' });
            }

            const vendaEncontrada = this.serviceVenda.FiltrarID(id);

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
