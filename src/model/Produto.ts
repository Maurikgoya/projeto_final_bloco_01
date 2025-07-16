export abstract class Produto {

    private _nome: string;
    private _numero: number;
    private _tipo: number;
    private _preco: number;


    constructor(nome: string, numero: number, tipo: number, preco: number) {
        this._nome = nome;
        this._numero = numero;
        this._tipo = tipo;
        this._preco = preco;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get numero(): number {
        return this._numero;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }

    public pagar(valor: number): boolean {

        if (this._preco > valor || this._preco < valor) {
            console.log("\nPague o valor integro do produto por favor!");
            return false;
        }

        this._preco -= valor;
        return true;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Torta";
                break;

            case 2:
                tipo = "Outro";
                break;
        }
        console.log("\n\n*******************************************************");
        console.log("Dados da conta:");
        console.log("*******************************************************");
        console.log("Nome do produto: " + this._nome);
        console.log("Numero do produto: " + this._numero);
        console.log("Tipo de produto: " + this._tipo);
        console.log("Preco: " + this._preco.toFixed(2));

    }
}