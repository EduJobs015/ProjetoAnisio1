import { ServiceEstoque } from "../service/ServiceEstoque";
import { Request, Response, json } from "express";

export class ControleEstoque{
    Service: ServiceEstoque;
    constructor(Service:ServiceEstoque){
        this.Service = Service;
    }

    adicionarEstoque(req: Request,res: Response){
        try{
            const AddEstoque = this.Service.adicionarEstoque(req.body);
            res.status(200).json({
                menssage:"Estoque adicionado"})
        }catch (error: any){
            res.status(400).json({menssage :error.message})
        }
    }
    ExibirEstoque(req: Request,res: Response){
        try{
            res.status(200).json(this.Service.ExibirEstoque)
        }catch (error: any){
            res.status(400).json({menssage :error.message})
        }
    }
    buscarId(req: Request,res: Response){
        try{
            const produto = this.Service.buscarId(req.query.id);
            if(produto){
                res.status(200).json({
                    produto : produto
                })
            }else{
                res.status(400);
            }
        }catch(error:any){
            res.status(404).json({message:error.message})
        }
    }
    MudarQuantidade(req: Request,res: Response){
        try{
            const produto = this.Service.MudarQuantidade(req.body);
                res.status(200)
        }catch(error:any){
            res.status(404).json({message:error.message})
        }
    }
    deletarQuantidade(req: Request,res: Response){
        try{
            const produto = this.Service.deletarQuantidade(req.body);
                res.status(200)
        }catch(error:any){
            res.status(404).json({message:error.message})
        }
    }
}


