interface Veiculo {
    modelo: string;
    ano: number;
    cor: string;
    marca: string;
}

class Carro implements Veiculo {
    modelo: string;
    ano: number;
    cor: string;
    marca: string;
    constructor(modelo: string, ano: number, cor: string, marca: string) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.marca = marca;
    }
}

const c1 = new Carro('Gol', 2019, 'Preto', 'Volkswagen');
console.log("Carro 1: ", c1);

const c2 = new Carro('Civic', 2018, 'Prata', 'Honda');
console.log("Carro 2: ", c2);

