/*Implementar exemplos práticos contendo:
Uso de arrays e objetos
Uma função assíncrona com async/await
Simulação de uma Promise
Explicar, em comentários, o fluxo assíncrono
Criação de Testes Unitários*/


// ARRAYS 

let nomes: string[] = ["Alesson", "João", "Maria"];

console.log("Os nomes na lista são: ");
console.log(nomes);


//OBJETOS 

type Pessoa = {
    nome: string;
    idade: number;
};

const pessoa: Pessoa = {
    nome: "Alesson",
    idade: 33
};

console.log("A pessoa se chama: ");
console.log(pessoa);


//PROMISE 

function buscarNome(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Alesson");
        }, 1000);
    });
}


// ASYNC/AWAIT 


async function mostrarNome(): Promise<void> {
    console.log("Buscando nome...");

    const nome = await buscarNome();

    console.log("Nome encontrado:", nome);
}

mostrarNome();

/* A funão async, ela permite que trabalhemos com operações assicronas, já o await espera a promise terminar o dela antes de continuar e durante toda essa espera, o resto do codigo continua funcionando. */