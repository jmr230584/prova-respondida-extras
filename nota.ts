/*Ref. 17
5 – Ler valor de nota de N1 e N2 (número real) e escrever a nota 
correspondente, tal que 0 é a menor nota e 10 a maior, e imprimir 
o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno:
E-mail:
*/
console.clear();
const teclado = require('prompt-sync')();
let notaFinal:number;

let n1: number = parseFloat (teclado(`Digite a nota N1: `));
let n2: number = parseFloat (teclado(`Digite a nota N2: `));

notaFinal = ((n1+n2)/2);
//console.log(notaFinal);

if (notaFinal <= 10) {
    if (notaFinal >= 8.5){
        console.log(`A média do aluno é ${notaFinal} NOTA A`);
    }else if (notaFinal < 8.5){
        if(notaFinal >= 7){
            console.log(`A média do aluno é ${notaFinal} NOTA B`);
        }
        else if(notaFinal < 7){
            if(notaFinal >=5){
                console.log(`A média do aluno é ${notaFinal} NOTA C`);
            }
            else if(notaFinal <5){
                if(notaFinal >=3){
                    console.log(`A média do aluno é ${notaFinal} NOTA D`);
                }
                else if(notaFinal <3){
                    console.log(`A média do aluno é ${notaFinal} NOTA E`);
                }
                else{
                    console.log(`Algo deu errado!!`);
                }
            }
        }
    }
}
else{
    console.log(`Algo deu errado!!`);
}

