interface Usuario {
    nome: string;
    senha: string;
}

const usuarios : Array<Usuario> = [
    {nome: "João", senha: "joao123"},
    {nome: "Maria", senha: "maria123"}
]

abstract class Autenticador {
    static login(usuario: Usuario): boolean {
        usuarios.forEach(u => {
            if (u.nome === usuario.nome && u.senha === usuario.senha) {
                console.log("Usuário encontrado");
                return true;
            }
        });
        
        throw new Error("Usuário não encontrado!");
    }
}

try {
    Autenticador.login({nome: "Maria", senha: "maria123"})
    Autenticador.login({nome: "Paulo", senha: "paulo123"})
} catch(e) {
    console.error(e.message);
}
