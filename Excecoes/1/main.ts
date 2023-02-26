abstract class Calculadora {
    static somar(a: number, b: number): number {
        return a + b;
    }

    static dividir(a: number, b: number): number {
        if (b != 0) {
            return a / b;
        } else {
            throw new Error("O segundo argumento não pode ser igual a 0.");
        }
    }
}

try {
    const soma = Calculadora.somar(20, 10);
    console.log("Soma: " + soma);

    const divisao = Calculadora.dividir(10, 2);
    console.log("Divisão: " + divisao);
    
    const operacaoInvalida = Calculadora.dividir(10, 0);
} catch (e) {
    console.error(e.message);
}