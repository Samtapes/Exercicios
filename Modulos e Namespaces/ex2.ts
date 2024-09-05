export namespace Financeiro {
    export function calcularImposto(valor: number, taxaImposto: number): number {
        return valor + (taxaImposto * valor);
    }

    export function calcularDesconto(valor: number, taxaDesconto: number): number {
        return valor - (taxaDesconto * valor);
    }

    export class Orcamento {
        valorTotal: number;
        itens: string[];

        constructor(valorTotal: number, itens: string[]) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
    }
}