export default class Animal {
    nome: string;
    idade: number;
    especie: string;

    constructor(nome: string, idade: number, especie: string) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    comer() {
        console.log(`O ${this.nome} está comendo`);
    }

    dormir() {
        console.log(`Silêncio! O ${this.nome} está dormindo... ZzzZZzzZZ...`);
    }

    brincar() {
        console.log(`Hora do ${this.nome} brincar`);
    }
}