/*
10- Para doar sangue é necessário ter entre 18 e 67 anos 
e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade 
de uma pessoa e seu peso e diga se ela pode doar sangue ou não, 
caso não, diga o(s) motivo(s) .
Nome aluno:
E-mail:
*/
console.clear();
let teclado = require('prompt-sync')();

let idade: number = teclado(`Digite a idade: `);
let peso: number = teclado(`Digite o peso: `);

if ((idade >= 18) && (idade <= 67) && (peso >= 60)){
    console.log(`Doador de sangue liberado`);
}
else if ((idade < 18) && (peso < 60)){
    console.log(`O doador tem menos de 18 anos e menos de 60Kg, não pode doar sangue.`);
}
else if((idade > 67) && ( peso < 60)){
    console.log(`O doador tem mais de 67 anos e menos de 60Kg, não pode doar sangue.`);
}
else if (idade < 18) {
    console.log(`O doador tem menos de 18 anos, não pode doar sangue.`);    
} 
else if (idade > 67) {
    console.log(`O doador tem mais de 67 anos, não pode doar sangue.`);     
}
else if (peso < 60){
    console.log(`O doador tem menos de 60 Kg, não pode doar sangue.`);
}
else{
    console.log(`Algo deu errado`);
}