import Conta from "./Conta";

const conta = new Conta("0000-0", 100, "Dionísio");
conta.consultarSaldo();
conta.depositar(100);
conta.consultarSaldo();
conta.sacar(150);
conta.sacar(150);
conta.consultarSaldo();