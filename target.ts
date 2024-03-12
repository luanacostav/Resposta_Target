// Respostas para o estágio Target:

// 1)

let indice:number = 13;
let soma:number = 0;
let k:number = 0;

while(k < indice){
    k += 1;
    soma += k;
}

console.log(soma); // Resposta = 91

// 2)

let fibo:number = 1;
let fiboAnt:number = 0;
let fiboNext:number = 0;
let search:string;
let i:number = 0;
let arrayFibo:number[] = [];

function fibonacci(numero:number):string{
    while(i < numero){
        arrayFibo.push(fiboAnt);
        fiboNext = fibo + fiboAnt;
        fiboAnt = fibo;
        fibo = fiboNext;
        i++;
        if(arrayFibo.includes(numero)){
            search = "Pertence";
        } else{
            search = "Não Pertence";
        }
    }
    return search;
}

console.log(fibonacci(10));


// 3)
// a) (Somando +2) -> 9;
// b) (Multiplicando *2) -> 128;
// c) (Números somados aumentam 2 a cada soma) -> 49;
// d) (Cada número multiplicado aumenta o anterior + 2) -> 100;
// e) (Fibonacci soma os dois anteriores) -> 13;
// f) -> 20;

// 4) Eu iria acender o interruptor do meio e iria para sala do meio
// para ver se tem uma lógica ordenada, se a lâmpada da sala do meio estiver acesa
// então iria seguir a lógica de que o primeiro interruptor é da sala antes da do meio e
// o último interruptor é da última sala. 
// Porém se não estiver acesa eu ligaria outra lâmpada
// e iria ver em outra sala se acendeu, se não estiver acesa, então seu interruptor é o último,
// já que deixei o interruptor do meio aceso, a do meio é da última sala e o primeiro é da sala do meio.
// Mas se a primeira sala estiver acesa, ela pode ser o primeiro interruptor ou do meio.

// 5)

let novaPalavra:string = "";

function invert(palavra:string){
    for(let i = palavra.length - 1; i >= 0; i--){
        novaPalavra += palavra[i];
    }
    return novaPalavra;
}

console.log(invert("Luana"));