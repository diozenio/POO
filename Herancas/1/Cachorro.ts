import Animal from "./Animal";

export default class Cachorro extends Animal {
    raca: string;
    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    apresentar() {
        console.log(`Eu sou da raça ${this.raca}.`);
    }

    latir() {
        console.log("Au au!");
    }
}