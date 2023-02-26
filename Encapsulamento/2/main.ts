abstract class Veiculo { 
    protected _marca: string;
    protected _modelo: string;

    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
    }

    abstract marca(): string;
    abstract modelo(): string;

    abstract setMarca(marca: string);
    abstract setModelo(modelo: string);
}

class Carro extends Veiculo {

    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }

    public marca(): string {
        return this._marca;
    }

    public modelo(): string {
        return this._modelo;
    }

    public setMarca(marca: string) {
        this._marca = marca;
    }

    public setModelo(modelo: string) {
        this._modelo = modelo;
    }
}

const carro = new Carro("Ford", "Fusion");

console.log(carro.marca());
console.log(carro.modelo());

carro.setMarca("Chevrolet");
carro.setModelo("Cruze");

console.log(carro.marca());
console.log(carro.modelo());
