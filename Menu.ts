import readline = require("readline-sync");
import { Torta } from "./src/model/Torta";
import { Outro } from "./src/model/Outro";
import { ProdutoController } from "./src/controller/ProdutoController";



export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, numero, tipo, preco, desconto, nota, valor: number;
    let nome: string;
    let tiposProdutos = ['Torta', 'Outros']

    while (true) {

        console.log("******************************************************");
        console.log("                                                      ");
        console.log("                Padoca do Mauri                       ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ");
        console.log("           1 - Registrar produto (tortas em promoção) ");
        console.log("           2 - Ver carrinho                           ");
        console.log("           3 - Buscar produto por numero              ");
        console.log("           4 - Atualizar dados da compra              ");
        console.log("           5 - Remover produto do carrinho            ");
        console.log("           6 - Pagar                                  ");
        console.log("           7 - Sair                                   ");
        console.log("                                                      ");
        console.log("******************************************************");


        console.log("Entre com a opcao desejada: ");
        opcao = readline.questionInt("");

        if (opcao == 7) {
            console.log("Padoca do Mauri, onde as tortas são melhores e mais baratas!");

            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nRegistrar produto\n\n");

                console.log("Digite o nome do produto: ");
                nome = readline.question("");

                console.log("Digite o tipo do produto ( 1 - Torta | 2 - Outro): ");
                tipo = readline.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

                console.log("Digite o preco do produto (R$): ");
                preco = readline.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o valor do desconto(R$): ");
                        desconto = readline.questionFloat("");
                        produtos.cadastrar(
                            new Torta(nome, produtos.gerarNumero(), tipo, preco, desconto));
                        break;
                    case 2:
                        console.log("Digite a nota para o produto (0-10): ");
                        nota = readline.questionInt("");
                        produtos.cadastrar(new Outro(nome, produtos.gerarNumero(), tipo, preco, nota));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nAqui estao os produtos no carrinho\n\n");

                produtos.listarTodas();

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar produto - por numero\n\n");
                try {
                    console.log("Digite o numero do produto: ");
                    numero = readline.questionInt("");
                    produtos.procurarPorNumero(numero);
                } catch (error) {
                    console.error("Erro:" + error);
                }
                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da compra\n\n");
                console.log("Digite o numero do produto: ");
                numero = readline.questionInt("");


                let produto = produtos.buscarNoArray(numero);

                if (produto != null) {
                    try {
                        console.log("Digite o nome do produto: ");
                        nome = readline.question("");

                        tipo = produto.tipo;

                        console.log("\nDigite o preco do produto(R$): ");
                        preco = readline.questionFloat("");

                        switch (tipo) {
                            case 1:
                                console.log("Digite o valor do desconto(R$): ");
                                desconto = readline.questionFloat("");
                                produtos.atualizar(new Torta(nome, numero, tipo, preco, desconto));
                                break;
                            case 2:
                                console.log("Digite a nota para o produto (0-10): ");
                                nota = readline.questionInt("");
                                produtos.atualizar(new Outro(nome, numero, tipo, preco, nota));
                                break;
                        }

                    } catch (error) {
                        console.error("\nO produto numero " + numero + " nao foi encontrado!");
                    }
                }
                keyPress()
                break;
            case 5:
                console.log("\n\nRemover produto do carrinho\n\n");

                try {
                    console.log("\nDigite numero do produto: ");
                    numero = readline.questionInt("");
                    produtos.deletar(numero);
                } catch (error) {
                    console.error("Erro: " + error);
                }
                keyPress()
                break;
            case 6:
                console.log("\n\nPagar\n\n");

                try {
                    console.log("Digite o numero do produto: ");
                    numero = readline.questionInt("");

                    console.log("Digite o valor de pagamento(R$): ");
                    valor = readline.questionFloat("");

                    produtos.pagar(numero, valor);
                } catch (error) {
                    console.error("Erro: " + error);
                }
                keyPress()
                break;
            default:
                console.log("\nOpcao invalida!\n");

                keyPress()
                break;
        }
    }

}

export function keyPress(): void {
    console.log("\nPressione enter para continuar comprando...");
    readline.prompt();
}