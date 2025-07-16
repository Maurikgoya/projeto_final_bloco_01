import { Produto } from "./Produto";

export class Torta extends Produto {

    private _desconto: number;

    constructor(nome: string, numero: number, tipo: number, preco: number, desconto: number) {
        super(nome, numero, tipo, preco);
        this._desconto = desconto;

    }

    public get desconto(): number {
        return this.preco * 0.8;
    }

    public set desconto(value: number) {
        this._desconto = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Preco com desconto: ${this._desconto.toFixed(2)}`);
    }

    public pagar(valor: number): boolean {

        if (this._desconto > valor) {

            console.log("\nPagamento insuficiente!");
            return false;
        }

        const troco = valor - this._desconto;
        console.log(`Pagamento realizado com sucesso! Troco: R$ ${troco.toFixed(2)}`);
        return true;
    }

}