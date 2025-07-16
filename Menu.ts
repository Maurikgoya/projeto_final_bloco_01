import readline = require("readline-sync");

export function main() {

    let opcao: number;

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

                keyPress()
                break;
            case 2:
                console.log("\n\nAqui estao os produtos no carrinho\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar produto - por numero\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da compra\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nRemover produto do carrinho\n\n");

                keyPress()
                break;
            case 6:
                console.log("\n\nPagar\n\n");

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