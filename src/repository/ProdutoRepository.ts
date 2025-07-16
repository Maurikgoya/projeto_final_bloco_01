import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(numero: number): void;

	pagar(numero: number, valor: number): void;

}