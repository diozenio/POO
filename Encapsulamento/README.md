# Encapsulamento 

O encapsulamento é um dos conceitos fundamentais da Programação Orientada a Objetos (POO) que permite controlar o acesso aos dados e comportamentos de um objeto, protegendo-os de alterações indesejadas ou de acesso indevido por outras partes do programa.

Em TypeScript, o encapsulamento pode ser implementado por meio de modificadores de acesso, que definem a visibilidade dos membros de uma classe para outras classes ou objetos. Existem três modificadores de acesso: public, private e protected.

O modificador de acesso "public" permite que os membros da classe sejam acessados de qualquer lugar do programa. Já o modificador "private" torna os membros da classe acessíveis apenas dentro da própria classe. Por fim, o modificador "protected" permite que os membros da classe sejam acessados por outras classes derivadas (subclasses) da classe atual, mas não por outras partes do programa.

# Getters e Setters

Getters e Setters são métodos usados no encapsulamento para gerenciar o acesso aos membros de uma classe. Os métodos getter são usados para obter o valor de um membro privado da classe. Por exemplo, se você tiver um membro privado chamado "nome" na sua classe, você pode criar um método getter chamado "getNome ()" que retornará o valor do membro "nome". Por outro lado, os métodos setter são usados para definir o valor de um membro privado da classe. Por exemplo, se você tiver o mesmo membro privado "nome" na sua classe, você pode criar um método setter chamado "setNome ()" que definirá o valor do membro "nome". O uso de getters e setters ajuda a manter os membros privados da classe seguros, pois só é possível obter ou definir os valores deles através dos métodos getter e setter.

Veja o seguinte exemplo:

``` typescript
class Pessoa {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Funcionario extends Pessoa {
  private salario: number;

  constructor(nome: string, salario: number) {
    super(nome);
    this.salario = salario;
  }

  public getNome(): string {
    return this.nome;
  }

  public getSalario(): number {
    return this.salario;
  }
}

let funcionario = new Funcionario("Maria", 3000);
console.log(funcionario.getNome()); // Maria
console.log(funcionario.nome); // Erro de compilação: 'nome' é protegido e só pode ser acessado dentro da classe 'Pessoa' e suas subclasses
console.log(funcionario.getSalario()); // 3000
```

Neste exemplo, o atributo nome da classe Pessoa é definido como protegido, permitindo que seja acessado por subclasses da classe. A classe Funcionario herda o atributo protegido nome da classe Pessoa e o método público getNome permite acessá-lo. O atributo salario é definido como privado e só pode ser acessado por métodos públicos da classe Funcionario.

# Exercícios

1) Crie uma classe abstrata ContaBancaria com os atributos protegidos: _id e _saldo, assim como os métodos: sacar() e depositar(). Em seguida, crie as classes derivadas ContaPJ e ContaPF, adicionando os métodos e atributos necessários para cada uma delas.

2) Crie uma classe abstrata Veículo com os atributos protegidos: _marca e _modelo, assim como os métodos: ligar() e desligar(). Em seguida, crie a classe derivada Carro, adicionando os métodos e atributos necessários para cada uma delas.
