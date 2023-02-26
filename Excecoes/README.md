# Exceções

As exceções em Programação Orientada a Objetos (POO) são erros que ocorrem durante a execução do programa e que podem interromper seu fluxo normal. As exceções permitem que um programa lide com esses erros de maneira adequada, sinalizando ao programador que algo inesperado ocorreu. Em POO, exceções são geralmente tratadas por meio de um bloco try-catch, que tenta executar o código dentro do bloco try e, se houver uma exceção, captura-a e a trata no bloco catch.

O TypeScript oferece suporte a exceções por meio das classes de exceção, que herdam da classe base Error. Ao lançar uma exceção em TypeScript, usamos a palavra-chave throw. Aqui está um exemplo simples de como usar exceções em TypeScript:

``` typescript
class SaldoInsuficienteError extends Error {
  constructor() {
    super('Saldo insuficiente');
  }
}

class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  sacar(valor: number) {
    if (valor > this.saldo) {
      throw new SaldoInsuficienteError();
    }
    this.saldo -= valor;
  }
}

const minhaConta = new ContaBancaria(100);
try {
  minhaConta.sacar(200);
} catch (error) {
  console.error(error.message); // "Saldo insuficiente"
}
```

Neste exemplo, criamos uma classe ContaBancaria com um método sacar que lança uma exceção SaldoInsuficienteError se o saldo for insuficiente. Na parte do código onde usamos a classe ContaBancaria, usamos um bloco try-catch para capturar a exceção e tratá-la de acordo.

# Exercício 

1) Crie uma classe Calculadora com os métodos somar e dividir. Ambos os métodos devem receber dois números como argumentos e retornar o resultado da operação. O método dividir deve lançar uma exceção se o segundo argumento for zero.

2) Crie uma classe Autenticador com o método login. O método login deve receber um nome de usuário e uma senha como argumentos e retornar true se o usuário puder ser autenticado com sucesso e false caso contrário. O método login deve lançar uma exceção se o nome de usuário ou a senha forem inválidos.