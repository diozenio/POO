import FormaDeTransacao from "./FormaDeTransacao";

export default class Dinheiro extends FormaDeTransacao {
    constructor(valor: number) {
        super(valor);
    }
}