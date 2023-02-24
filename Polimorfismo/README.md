# Polimorfismo

Polimorfismo é uma das quatro características da Programação Orientada a Objetos (POO) que permite que um objeto se comporte de forma diferente dependendo do contexto. Ele permite que objetos de diferentes classes compartilhem métodos com o mesmo nome, mas implementem suas próprias versões destes métodos.

Há dois tipos de polimorfismo: sobrecarga e sobrescrita. O polimorfismo de sobrecarga ocorre quando várias versões de um método com o mesmo nome são fornecidas com diferentes tipos ou quantidades de parâmetros. O polimorfismo de sobrescrita ocorre quando uma classe filha fornece uma implementação diferente para um método herdado da classe pai.

Aqui estão três exemplos de polimorfismo para praticar:


## Sobrecarga:
``` typescript
class Calculadora {
  soma(a: number, b: number): number {
    return a + b;
  }

  soma(a: string, b: string): string {
    return `${a} ${b}`;
  }
}

const calc = new Calculadora();
console.log(calc.soma(1, 2)); // 3
console.log(calc.soma("Olá", "Mundo")); // "Olá Mundo"
```

#
## Sobrescrita:
``` typescript
class Animal {
  falar(): string {
    return "Eu sou um animal";
  }
}

class Cachorro extends Animal {
  falar(): string {
    return "Au au";
  }
}

const animal = new Animal();
console.log(animal.falar()); // "Eu sou um animal"

const cachorro = new Cachorro();
console.log(cachorro.falar()); // "Au au"
```

#
## Polimorfismo com classes abstratas:
``` typescript
abstract class Figura {
  abstract area(): number;
}

class Retangulo extends Figura {
  constructor(private largura: number, private altura: number) {
    super();
  }

  area(): number {
    return this.largura * this.altura;
  }
}

class Circulo extends Figura {
  constructor(private raio: number) {
    super();
  }

  area(): number {
    return Math.PI * this.raio ** 2;
  }
}

const retangulo = new Retangulo(10, 5);
console.log(retangulo.area()); // 50

const circulo = new Circulo(5);
console.log(circulo.area()); // 78.53981633974483
```

# Exercícios

1) Implementar um sistema de banco de dados genérico para armazenar informações de contas de usuários, que podem ser de clientes, fornecedores, funcionários ou outros tipos de usuários.

2) Desenvolver um sistema de gerenciamento de fluxo de caixa que aceita diferentes tipos de transações financeiras, como transferências bancárias, pagamentos com cartão de crédito e pagamentos em dinheiro.
