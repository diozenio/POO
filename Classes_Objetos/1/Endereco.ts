export default class Endereco {
    rua: string;
    bairro: string;
    cidade: string;

    constructor({ rua, bairro, cidade }: Endereco) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}