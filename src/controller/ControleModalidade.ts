import { Request, Response, json } from "express";
import { modalidaeService } from "../service/ModalidadeService";
const Service = new modalidaeService();

export function exibirModalidades(req: Request,res: Response){
    try{
        res.status(200).json(
            Service.exibirPaes
        )

    } catch(error: any){
        res.status(400).json({message:error})
    }
}

