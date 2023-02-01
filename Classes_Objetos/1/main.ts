import Endereco from "./Endereco";
import Pessoa from "./Pessoa";

const endereco = new Endereco({ bairro: "Ibirapuera", cidade: "São Paulo", rua: "Alameda Jauaperi" });
const pessoa = new Pessoa("Dionísio", 18, endereco, "99999-9999");

pessoa.apresentar();
pessoa.saudar();