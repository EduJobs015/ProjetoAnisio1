import { ServiceEstoque } from "../service/ServiceEstoque";
import { Request, Response, json } from "express";
const Service = new ServiceEstoque();

export function adicionarEstoque(req: Request,res: Response){
    try{
        const AddEstoque = Service.adicionarEstoque(req.body);
        res.status(200).json({menssage:"Estoque adicionado"})
    }catch (error: any){
        res.status(400).json({menssage :error.message})
    }
}
export function ExibirEstoque(req: Request,res: Response){
    try{
        res.status(200).json(Service.ExibirEstoque)
    }catch (error: any){
        res.status(400).json({menssage :error.message})
    }
}
export function buscarId(req: Request,res: Response){
    try{
        const produto = Service.buscarId(req.query.id);
        if(produto){
            res.status(200)
        }else{
            res.status(400);
        }
    }catch(error:any){
        res.status(404).json({message:error.message})
    }
}
export function MudarQuantidade(req: Request,res: Response){
    try{
        const produto = Service.MudarQuantidade(req.body);
            res.status(200)
    }catch(error:any){
        res.status(404).json({message:error.message})
    }
}

