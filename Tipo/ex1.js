function compra(produto, pagamento) {
    return "O produto ".concat(produto.nome, " da categoria ").concat(produto.categoria, " que custa R$").concat(produto.preco, ", sera pago com ").concat(pagamento);
}
var produto = { nome: "Maçã", preco: 3.80, categoria: "Alimento" };
console.log(compra(produto, "pix"));
