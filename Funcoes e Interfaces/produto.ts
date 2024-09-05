namespace Interfaces {
    interface Livro {
        titulo: string;
        autor: string;
        anoPublicacao: number;
    }
    
    function exibirInformacoes(livro: Livro): string {
        return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
    }
    
    const novoLivro: Livro = {
        titulo: "Mortes Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        anoPublicacao: 1848
    };
    
    console.log(exibirInformacoes(novoLivro));
}
