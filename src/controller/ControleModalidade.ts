import { Request, Response, json } from "express";
import { ServiceModalidade } from "../service/ServiceModalidade";
const Service = new ServiceModalidade();

export function exibirModalidades(req: Request,res: Response){
    try{
        res.status(200).json(
            Service.exibirModalidade
        )

    } catch(error: any){
        res.status(400).json({message:error})
    }
}
export function InserirModalidade(req: Request,res: Response){
    try{
        const novoModalidade = Service.InserirModalidade(req.body);
        res.status(200)
    }catch (error: any){
        res.status(400).json({menssage :error.message})
    }

}

export function filtrarId(req: Request,res: Response){
    try{
        const produto = Service.FiltrarID(req.query.id);
        if(produto){
            res.status(200)
        }else{
            res.status(400);
        }
    }catch(error:any){
        res.status(404).json({message:error.message})
    }
}
export function mudarTipo(req: Request,res: Response){
    try{
        const produto = Service.mudarTipo(req.body);
            res.status(200)
    }catch(error:any){
        res.status(404).json({message:error.message})
    }
}
export function deletarModalidade(req: Request,res: Response){
    try{
        const produto = Service.deletarModalidade(req.query.id);
            res.status(200)
    }catch(error:any){
        res.status(404).json({message:error.message})
    }
}

