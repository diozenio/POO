# Abstração 

Abstração em Programação Orientada a Objetos (POO) é um conceito que permite aos desenvolvedores simplificar problemas complexos dividindo-os em partes menores e mais gerenciáveis. Ela permite que um objeto represente apenas os aspectos relevantes de um objeto em um sistema, omitindo informações irrelevantes para um contexto específico. Abstração permite que os desenvolvedores criem classes que encapsulem dados e comportamentos, e permitam que esses objetos interajam com outros objetos no sistema.

# Classes abstratas

Classes abstratas em Programação Orientada a Objetos (POO) são classes que não podem ser instanciadas, mas são usadas como base para outras classes derivadas. Essas classes fornecem uma estrutura básica para as classes derivadas e podem definir métodos e propriedades que as classes derivadas devem implementar.

Em outras palavras, uma classe abstrata define um contrato que as suas classes filhas devem seguir. As classes filhas podem estender a classe abstrata e implementar os métodos e propriedades que ela define. No entanto, elas não podem ser instanciadas diretamente.

Aqui está um exemplo de classe abstrata em TypeScript:

``` typescript
abstract class Animal {
  protected nome: string;
  
  constructor(nome: string) {
    this.nome = nome;
  }
  
  public abstract fazerSom(): void;
  
  public abstract mover(): void;
}

class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome);
  }
  
  public fazerSom(): void {
    console.log(`${this.nome} latindo...`);
  }
  
  public mover(): void {
    console.log(`${this.nome} correndo...`);
  }
}

class Gato extends Animal {
  constructor(nome: string) {
    super(nome);
  }
  
  public fazerSom(): void {
    console.log(`${this.nome} miando...`);
  }
  
  public mover(): void {
    console.log(`${this.nome} pulando...`);
  }
}

// Utilização das classes derivadas
const cachorro: Animal = new Cachorro('Rex');
const gato: Animal = new Gato('Garfield');

cachorro.fazerSom(); // Output: Rex latindo...
cachorro.mover(); // Output: Rex correndo...

gato.fazerSom(); // Output: Garfield miando...
gato.mover(); // Output: Garfield pulando...
```

Neste exemplo, a classe Animal é definida como uma classe abstrata, e ela define dois métodos abstratos, fazerSom() e mover(). As classes Cachorro e Gato estendem a classe Animal e implementam esses métodos. Observe que a classe Animal não pode ser instanciada diretamente, mas suas classes filhas podem ser.

Usar uma classe abstrata em um projeto pode trazer muitos benefícios, como a padronização do código, facilitar a manutenção, reduzir a duplicação de código, entre outros.

# Exercícios

1) Crie uma classe abstrata `Piece` para representar todas as peças de xadrez. Crie outras duas classes que herdem as informações da classe `Piece` e implementem o método abstrato `move()` para permitir que cada peça se mova de acordo com as regras do jogo de xadrez.

2) Crie uma classe abstrata `MetodoDePagamento`, contendo o método abstrato ``processarPagamento()``. Em seguida, crie duas classes que herdem os dados da classe ``MetodoDePagamento``: ``Pix`` e ``Boleto``.