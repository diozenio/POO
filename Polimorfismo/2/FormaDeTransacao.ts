export default class FormaDeTransacao {
    valor: number;

    constructor (valor: number) {
        this.valor = valor;
    }

    efetuarTransacao(): void {
        console.log(`Transação de ${this.valor.toLocaleString("pt-BR", {'style': 'currency', 'currency': 'BRL'})} efetuada com sucesso!`);
    }
}