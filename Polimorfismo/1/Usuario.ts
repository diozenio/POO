export default class Usuario {
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string, email: string, senha: string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    apresentar(){
        console.log(`Usuário: ${this.nome}`);
        console.log(`Email: ${this.email}`);
    }
}