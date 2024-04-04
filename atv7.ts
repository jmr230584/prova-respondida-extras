/*
Nome 1:
Nome 2:
Nome 3:
Nome 4:
Nome 5:

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos) 
*/

let opcao: number = 0;

do{
    const teclado = require (`prompt-sync`)();

    let n1: number = parseFloat(teclado(`Digite o primeiro número: `));
    let n2: number = parseFloat(teclado(`Digite o primeiro número: `));

    let total: number = n1 + n2;

    console.log(`A soma de ${n1} + ${n2} é ${total}`);

    console.log(`Para continuar somando digite:`);
    console.log(`0 - sair`);
    console.log(`1 - continuar... `);

    opcao = parseInt(teclado(`Digite a opção: `));

}while(opcao == 1);

console.log(`Fim de programa ...`);
