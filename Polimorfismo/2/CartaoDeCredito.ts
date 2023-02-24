import FormaDeTransacao from "./FormaDeTransacao";

export default class CartaoDeCredito extends FormaDeTransacao {
    juros: number;
    
    constructor(valor: number, juros: number) {
        super(valor);
        this.juros = juros;
    }

    efetuarTransacao(): void {
        console.log(`Valor com juros: ${this.valorComJuros().toLocaleString("pt-BR", {'style': 'currency', 'currency': 'BRL'})}`);
        console.log(`Transação de ${this.valorComJuros().toLocaleString("pt-BR", {'style': 'currency', 'currency': 'BRL'})} efetuada com sucesso!`);
    }

    valorComJuros(): number {
        return this.valor * (1 + this.juros);
    }
}