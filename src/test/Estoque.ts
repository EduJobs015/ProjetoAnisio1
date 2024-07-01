import { RepositorioEstoque } from "../repository/RepositorioEstoque";
import { EstoquePaes } from "../model/EstoquePaes";
const estoque: RepositorioEstoque = new RepositorioEstoque()

try{
    estoque.adicionarEstoque(new EstoquePaes(1,3, 30,2,10))
    const produto = estoque.buscarId(1)
    console.log("sucesso", produto, produto?.quantidade)
    console.log("sucesso")
}catch(error: any){
    console.error("erro")
}
try{
    estoque.deletarQuantidade(1,10) 
    const produto = estoque.buscarId(1)
    console.log("sucesso", produto, produto?.quantidade)
}catch(error: any){
    console.error("erro")
}


