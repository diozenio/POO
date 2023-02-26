# Interfaces

Interfaces em Programação Orientada a Objetos (POO) são um tipo de contrato que define um conjunto de métodos e propriedades que uma classe deve implementar. Elas são usadas para definir a forma como as classes interagem entre si e para garantir que as classes que implementam uma interface tenham um conjunto consistente de métodos e propriedades. Em TypeScript, as interfaces são definidas usando a palavra-chave interface.

Exemplo de interface em TypeScript:

``` typescript
interface Animal {
  nome: string;
  som: string;
  fazerSom: () => void;
}

class Cachorro implements Animal {
  nome = "Buddy";
  som = "Woof";

  fazerSom() {
    console.log(this.som);
  }
}

const cachorro = new Cachorro();
cachorro.fazerSom(); // output: Woof
```

No exemplo acima, definimos uma interface Animal que possui três propriedades: nome, som e fazerSom. A classe Dog implementa essa interface e implementa o método fazerSom, que exibe o som do cachorro no console.

Interfaces são úteis em diversas situações, como por exemplo:

- Para definir um conjunto de propriedades e métodos que um objeto deve ter;
- Para garantir que um conjunto de classes implementem o mesmo conjunto de métodos e propriedades;
- Para desacoplar o código, permitindo que objetos de diferentes classes possam ser tratados de forma uniforme;
- Para criar contratos para funções que esperam receber objetos com um determinado conjunto de propriedades e métodos.

# Exercícios

1) Crie uma interface Veiculo com as propriedades modelo, ano, cor e marca. Em seguida, crie uma classe Carro que implemente essa interface e uma classe Moto que também implemente essa interface. Crie objetos das duas classes e exiba suas propriedades no console.

2) Crie uma interface Usuario com as propriedades nome, email e senha. Em seguida, crie uma função cadastrarUsuario que receba um objeto que implemente essa interface e cadastre o usuário no sistema. Crie um objeto que implemente essa interface e passe-o para a função cadastrarUsuario.