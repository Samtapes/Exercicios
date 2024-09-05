namespace Classes {
    class Individuo {
        nome: string;
        idade: number;
    
        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }
    
        exibirInformacoes(): void {
            console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        }
    }
    
    class Aluno extends Individuo {
        curso: string;
    
        constructor(nome: string, idade: number, curso: string) {
            super(nome, idade);
            this.curso = curso;
        }
    
        exibirInformacoesCompleta(): void {
            console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`);
        }
    }
    
    const aluno1 = new Aluno("Augusto", 29, "Filosofia");
    aluno1.exibirInformacoesCompleta();
}
