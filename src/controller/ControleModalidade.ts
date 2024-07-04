import { Request, Response, json } from "express";
import { ServiceModalidade } from "../service/ServiceModalidade";

export class ControleModalidade{
    Service: ServiceModalidade;
    constructor(Service:ServiceModalidade){
        this.Service = Service;
    }
    exibirModalidades(req: Request,res: Response){
        try{
            res.status(200).json(
                this.Service.exibirModalidade()
            )
    
        } catch(error: any){
            res.status(400).json({message:error})
        }
    }
    InserirModalidade(req: Request,res: Response){
        try{
            const novoModalidade = this.Service.InserirModalidade(req.body);
            res.status(200).json({
                mensagem: "Nova modalidade de pão criada"
            })
        }catch (error: any){
            res.status(400).json({menssage :error.message})
        }
    
    }
    
    filtrarId(req: Request,res: Response){
        try{
            const produto = this.Service.FiltrarID(req.query.id);
            if(produto){
                res.status(200)
            }else{
                res.status(400);
            }
        }catch(error:any){
            res.status(404).json({message:error.message})
        }
    }
    mudarTipo(req: Request,res: Response){
        try{
            const produto = this.Service.mudarTipo(req.body);
            res.status(200).send({ message: "Modalidade alterada com sucesso" });
        } catch (error: any) {
            res.status(404).send({ error: error.message });
        }
    }
    deletarModalidade(req: Request,res: Response){
        try{
            const produto = this.Service.deletarModalidade(req.body);
            res.status(200).send({ message: "Modalidade deletada com sucesso" });
        } catch (error: any) {
            res.status(404).send({ error: error.message });
        }

    }
}    


