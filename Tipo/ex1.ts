interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = "dinheiro" | "cartão" | "pix";

function compra(produto: Produto, pagamento: FormaPagamento ): string{
    return `O produto ${produto.nome} da categoria ${produto.categoria} que custa R$${produto.preco}, sera pago com ${pagamento}`;
}

var produto: Produto = {nome: "Maçã", preco: 3.80, categoria: "Alimento"};

console.log(compra(produto, "pix"));