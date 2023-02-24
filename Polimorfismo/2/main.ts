import Dinheiro from "./Dinheiro";
import CartaoDeCredito from "./CartaoDeCredito";

const dinheiro = new Dinheiro(100);
dinheiro.efetuarTransacao();

const cartaoDeCredito = new CartaoDeCredito(100, 0.5);
cartaoDeCredito.efetuarTransacao();