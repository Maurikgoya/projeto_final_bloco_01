import { Produto } from "./Produto";

export class Outro extends Produto {

    private _nota: number;

    constructor(nome: string, numero: number, tipo: number, preco: number, nota: number) {
        super(nome, numero, tipo, preco);
        this._nota = nota;

    }

    public get nota(): number {
        return this._nota;
    }

    public set nota(value: number) {
        this._nota = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Nota do produto: ${this._nota}`);
    }

}