import { Financeiro } from './ex2'

const valorOrcamento: number = 310000;

var orcamento1: Financeiro.Orcamento = new Financeiro.Orcamento(valorOrcamento, ["Carro", "Moto"])

var desconto1: number = Financeiro.calcularDesconto(orcamento1.valorTotal, 0.1);
var imposto1: number = Financeiro.calcularImposto(orcamento1.valorTotal, 2);

console.log(`Valor de orçamento: ${orcamento1.valorTotal}`)
console.log(`Desconto de: ${desconto1}`);
console.log(`Imposto de: ${imposto1}`);