export default class Conta {
    numero: string;
    saldo: number;
    titular: string;

    constructor(numero: string, saldo: number, titular: string) {
        this.numero = numero;
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valorDeposito: number) {
        this.saldo += valorDeposito;
    }

    sacar(valorSaque: number){
        if(valorSaque>this.saldo){
            console.log("Saldo indisponível!");
            return;
        }
        this.saldo -= valorSaque;  
    }

    consultarSaldo(){
        console.log(`Você tem R$${this.saldo} de saldo`);
    }
}