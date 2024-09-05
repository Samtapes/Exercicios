namespace Classes {

    class Funcionario {
        nome: string;
        cargo: string;
        salario: number;

        constructor(nome: string, cargo: string, salario: number){
            this.nome = nome;
            this.cargo = cargo;
            this.salario = salario;
        }

        descricao(): string{
            return `O funcionário ${this.nome} do cargo ${this.cargo}, recebe R$${this.salario} por mês.`;
        }
    }

    class Gerente extends Funcionario{
        departamento: string;

        constructor(nome: string, salario: number, departamento: string){
            super(nome, "Gerente", salario);
            this.departamento = departamento;
        }

        descricao(): string {
            return `O gerente ${this.nome} supervisiona o departamento ${this.departamento}, recebe R$${this.salario} por mês.`
        }
    }

    var funcionario: Funcionario = new Funcionario("Roberto", "Desenvolvedor Júnior", 3200);
    var gerente: Gerente = new Gerente("Guilherme", 18330, "Engenharia e Desenvolvimento");

    console.log(funcionario.descricao());
    console.log(gerente.descricao());
}