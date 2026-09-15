
/*VARIÁVEIS E TIPOS*/


let nome: string = "Alesson";
let idade: number = 33;
let estudante: boolean = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("É estudante?", estudante);



/*ALIASES (TYPE ALIASES)*/


type Usuario = {
    nome: string;
    idade: number;
    ativo: boolean;
};

const usuario: Usuario = {
    nome: "Alesson",
    idade: 33,
    ativo: true
};

console.log("Usuário: ", usuario);



/*OBJETOS COM TIPOS*/


type Produto = {
    nome: string;
    preco: number;
    disponivel: boolean;
};

const produto: Produto = {
    nome: "Notebook",
    preco: 2500,
    disponivel: true
};

console.log("Produto: ", produto);


console.log("Números de 1 a 5 usando FOR: ");

for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}


console.log("Números de 1 a 5 usando WHILE: ");

let contador: number = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

/*FUNÇÕES*/

function apresentarPessoa(nome: string, idade: number): string {
    return ("Meu nome é " + nome + "e tenho" + idade + "anos.")
}

console.log(apresentarPessoa("Alesson", 33));



function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

const resultado: number = somar(10, 20);

console.log("Resultado da soma: ", resultado);



function mostrarUsuario(usuario: Usuario): void {
    console.log("Dados do usuário: ");
    console.log("Nome:", usuario.nome);
    console.log("Idade:", usuario.idade);
    console.log("Ativo:", usuario.ativo);
}

mostrarUsuario(usuario);