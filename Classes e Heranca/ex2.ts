namespace Classes {

    class ContaBancaria {
        titular: string;
        saldo: number;

        constructor(titular: string, saldo: number){
            this.titular = titular;
            this.saldo = saldo;
        }

        exibirSalario(): void {
            console.log(`Saldo atual na conta: R$${this.saldo}`);
        }
    }

    class ContaCorrente extends ContaBancaria {
        limiteCredito: number;

        constructor(titular: string, saldo: number, limiteCredito: number) {
            super(titular, saldo);
            this.limiteCredito = limiteCredito;
        }

        exibirSalario(): void {
            console.log(`Saldo atual na conta: R$${this.saldo}; Limite: R$${this.limiteCredito}`);
        }
    }
}