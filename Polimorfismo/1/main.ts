import Cliente from "./Cliente";
import Funcionario from "./Funcionario";
import Usuario from "./Usuario";

const cliente = new Cliente("João", "cliente@email.com", "cliente123", 2500.50);
const funcionario = new Funcionario("Pedro", "funcionario@email.com", "funcionario132", 5000);

console.log("----- CLIENTE -----");
cliente.apresentar();
cliente.verSaldo();
console.log("----- FUNCIONÁRIO -----");
funcionario.apresentar();

if(funcionario instanceof Usuario && cliente instanceof Usuario) {
    console.log("São usuários");
} else {
    console.log("Não são usuário");
}
