function medirTempoDeExecucao(
    target: any,
    context: ClassMethodDecoratorContext
) {
    const metodoOriginal = target;

    return function (...args: any[]) {
        console.time(context.name as string);
        const resultado = metodoOriginal.apply(this, args);
        console.timeEnd(context.name as string);
        return resultado;
    };
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);
