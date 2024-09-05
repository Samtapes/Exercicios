import { Cliente } from './Cliente'

namespace Modulos {
    class Pedido {
        cliente: Cliente;
        produto: string;
        valorTotal: number;
    
        constructor(cliente: Cliente, produto: string, valorTotal: number) {
            this.cliente = cliente;
            this.produto = produto;
            this.valorTotal = valorTotal
        }

        exibirDetalhes(): void{
            console.log(`O cliente ${this.cliente.nome}, comprou ${this.produto} pelo preço de R$${this.valorTotal}`)
        }
    }

    var cliente1: Cliente = new Cliente("Lionel Messi", "messias@gmail.com");
    var pedido1: Pedido = new Pedido(cliente1, "Alcachofra", 12);
    pedido1.exibirDetalhes();

    var cliente2: Cliente = new Cliente("Cristiano Ronaldo", "robozao@gmail.com");
    var pedido2: Pedido = new Pedido(cliente2, "Carne de Peru", 99.99);
    pedido2.exibirDetalhes();

    var pedido3: Pedido = new Pedido(cliente1, "Peru", 999.99);
    pedido3.exibirDetalhes();
}
