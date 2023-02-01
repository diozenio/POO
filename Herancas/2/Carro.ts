import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    cor: string;

    constructor(marca: string, modelo: string, ano: number, cor: string) {
        super(marca, modelo, ano);
        this.cor = cor;
    }

    apresentar(): void {
        console.log(`Carro: ${this.marca} ${this.modelo} (${this.ano}) - Cor: ${this.cor}`);
    }
}