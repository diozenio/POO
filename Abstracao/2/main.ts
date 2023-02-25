abstract class MetodoDePagamento {
    abstract processarPagamento(valor: number): void;
}

class Boleto extends MetodoDePagamento {
    processarPagamento(valor: number) {
        const valorFinal = valor + 1.5;
        console.log(`Pagamento de ${valorFinal.toLocaleString("pt-BR", {'style': 'currency', 'currency': 'BRL'})} realizado via boleto, com o acréscimo de R$1,50.`);
    }
}

class Pix extends MetodoDePagamento {
    processarPagamento(valor: number) {
        console.log(`Pagamento de ${valor.toLocaleString("pt-BR", {'style': 'currency', 'currency': 'BRL'})} realizado via Pix.`);
    }
}

const boleto = new Boleto();
boleto.processarPagamento(100);

const pix = new Pix();
pix.processarPagamento(50);