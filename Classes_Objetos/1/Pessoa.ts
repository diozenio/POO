import Endereco from "./Endereco";

export default class Pessoa {
    nome: string;
    idade: number;
    endereco: Endereco;
    telefone: string;

    constructor(nome: string, idade: number, endereco: Endereco, telefone: string) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    apresentar(){
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos. Moro na rua ${this.endereco.rua}, no bairro ${this.endereco.bairro} da cidade de ${this.endereco.cidade}. Para falar comigo é só me ligar no telefone ${this.telefone}. Até logo!`);
                
    }

    saudar() {
        console.log("Olá, como você está?");
    }
}