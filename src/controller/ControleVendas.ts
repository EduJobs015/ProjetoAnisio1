import { Request, Response } from 'express';
import { ServiceVenda } from '../service/ServiceVenda';

export class VendaController {
    serviceVenda: ServiceVenda;

    constructor(serviceVenda: ServiceVenda) {
        this.serviceVenda = serviceVenda;
    }

    cadastrarVenda(req: Request, res: Response){
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

    buscarId(req: Request,res: Response){
        try{
            const venda = this.serviceVenda.BuscarId(req.query.id);
            if(venda){
                res.status(200).json({
                    venda
                })
            }
        }catch(error:any){
            res.status(404).json({message:error.message})
        }
    }
}
