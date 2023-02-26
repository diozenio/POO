interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

const usuarios : Usuario[] = []; 

function cadastrarUsuario(u: Usuario) {
    usuarios.push(u);
}

function listarUsuarios(): Usuario[] {
    return usuarios;
}

const u1 = { nome: 'João', email: 'joao@email.com', senha: '123456' };

const u2 = { nome: 'Maria', email: 'maria@email.com', senha: '123456' };

cadastrarUsuario(u1);
cadastrarUsuario(u2);

console.log(listarUsuarios());