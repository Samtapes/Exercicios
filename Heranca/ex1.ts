namespace Heranca {
    class Funcionario {
        constructor(public nome: string, public cargo: string, public salario: number) {}
    
        descricao(){
            return `O funcionário ${this.nome} do cargo ${this.cargo}, recebe ${this.salario}`;
        }
    }
    
    var jose = new Funcionario("José", "CEO", 1200);
    console.log(jose.descricao());
}
