export default class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    apresentar(): void {
        console.log(`Veículo: ${this.marca} ${this.modelo} (${this.ano})`);
    }
}