class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(){
        return `O funcionário ${this.nome} do cargo ${this.cargo}, recebe ${this.salario}`;
    }
}