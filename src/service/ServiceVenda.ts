import { RepositorioVenda } from "../repository/RepositorioVendaPaes";
import { RepositorioEstoque } from "../repository/RepositorioEstoque";
import { vendaPaes } from "../model/vandaPaes";
import { Itemvenda } from "../model/Itemvenda";
import { RepositorioModalidade } from "../repository/RepositorioModalidade";
import { EstoquePaes } from "../model/EstoquePaes";

export class ServiceVenda {
    repositorioEstoque: RepositorioEstoque;
    repositorioModalidade: RepositorioModalidade;
    repositorioVenda: RepositorioVenda;

    constructor(repositorioEstoque: RepositorioEstoque, repositorioModalidade: RepositorioModalidade, repositorioVenda: RepositorioVenda) {
        this.repositorioEstoque = repositorioEstoque;
        this.repositorioModalidade = repositorioModalidade;
        this.repositorioVenda = repositorioVenda;
    }

    cadastrarVenda(produto: any): vendaPaes | undefined {
        const { cpfCliente, itensComprados } = produto;

        if (!cpfCliente || !itensComprados || !Array.isArray(itensComprados)) {
            throw new Error("Informações incompletas");
        }

        let resumoItens: Itemvenda[] = [];
        let total = 0;

        for (const item of itensComprados) {
            const estoqueProduto = this.repositorioEstoque.buscarId(item.estoquePaesId);

            if (!estoqueProduto) {
                throw new Error(`Produto com ID ${item.estoquePaesId} não encontrado`);
            }

            if (estoqueProduto.quantidade < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque para o produto ${estoqueProduto.id}`);
            }

            const nomeItem = this.repositorioModalidade.consultarNomeDaModalidade(estoqueProduto.id);

            const quantidadePedida = item.quantidade;
            estoqueProduto.quantidade -= quantidadePedida;
            total += quantidadePedida * estoqueProduto.precoVenda;

            const nomeItemValido = nomeItem || "Nome Indisponível";

            // Construindo cada objeto Itemvenda e adicionando a resumoItens
            const itemVenda: Itemvenda = {
                estoquePaesId: estoqueProduto.id,
                quantidade: quantidadePedida,
                nomeItem: nomeItemValido
            };

            resumoItens.push(itemVenda);
        }

        // Criando a nova venda com os dados coletados
        const novaVenda = new vendaPaes(cpfCliente, total, resumoItens);

        // Salvando a nova venda no repositório de vendas
        this.repositorioVenda.CadastrarVenda(novaVenda);

        return novaVenda;
    }

    buscarItemEstoque(item: any): EstoquePaes | undefined {
        const estoque = this.repositorioEstoque.buscarId(item.estoquePaesId);
        if (!estoque) {
            throw new Error(`Item com ID ${item.estoquePaesId} não encontrado no estoque`);
        }
        return estoque;
    }

    encontrarId(id: number): vendaPaes | undefined {
        return this.repositorioVenda.EncontarId(id);
    }
}
