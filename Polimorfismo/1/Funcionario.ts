import Usuario from "./Usuario"

export default class Funcionario extends Usuario {
    salario: number;

    constructor(nome: string, email: string, senha: string, salario: number) {
        super(nome, email, senha);
        this.salario = salario;
    }    

    apresentar() {
        console.log('Nome: ' + this.nome);
        console.log('Email: ' + this.email);
        console.log('Salário: ' + this.salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
    }
}