namespace Tipo {
    type Pessoa = {
        nome: string;
        idade: number;
    }
    
    type Empregado = {
        empresa: string;
        salario: number;
    }
    
    type PessoaEmpregado = Pessoa & Empregado;
    
    function func(p: PessoaEmpregado ): string {
        return `O indivíduo ${p.nome} de ${p.idade} anos, da empresa ${p.empresa}, que recebe ${p.salario}`;
    }

    var novoEmpregado: PessoaEmpregado = {nome: "Carlos", idade: 21, empresa: "Fiap", salario: 1234};
    console.log(func(novoEmpregado));
}