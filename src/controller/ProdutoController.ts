import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private carrinho: Array<Produto> = new Array<Produto>();
    numero = 0;

    cadastrar(produto: Produto): void {
        this.carrinho.push(produto);
        console.log("\nProduto numero: " + produto.numero +
            " foi criada com sucesso!");
    }

    procurarPorNumero(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else
            throw new Error("O produto numero: " + numero + " nao foi encontrado!")
    }

    listarTodas(): void {
        for (let Produto of this.carrinho) {
            Produto.visualizar();
        }
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);

        if (buscaProduto != null) {
            this.carrinho[this.carrinho.indexOf(buscaProduto)] = produto;
            console.log("\nO produto numero: " + produto.numero +
                "foi atualizado com sucesso!");
        } else
            throw new Error("\nO Produto numero: " + produto.numero +
                " nao foi encontrado!");
    }

    deletar(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {
            this.carrinho.splice(this.carrinho.indexOf(buscaProduto), 1);
            console.log("\nO produto numero: " + numero + " foi apagado com sucesso!");
        } else
            throw new Error("\nO produto numero: " + numero + "nao foi encontrado!");

    }

    pagar(numero: number, valor: number): void {
        let produto = this.buscarNoArray(numero);

        if (produto != null) {

            if (produto.pagar(valor) == true)
                console.log("\nO pagamento do produto numero: " + numero +
                    " foi efetuado com sucesso!");

        } else {
            throw new Error("\nO produto numero: " + numero +
                " nao foi encontrado!");
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {

        for (let conta of this.carrinho) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}