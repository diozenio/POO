import Usuario from "./Usuario"

export default class Cliente extends Usuario {
    saldo: number;

    constructor(nome: string, email: string, senha: string, saldo: number) {
        super(nome, email, senha);
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(`O cliente ${this.nome} possui ${this.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} de saldo`);
    }
}