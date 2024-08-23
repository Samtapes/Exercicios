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