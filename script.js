/*console.log('Pratica Guiada 1 - if e if');

const idadeDependente=prompt("Solicitação de dependente \n Qual a idade do dependente")

if(idadeDependente>=13){
    if(idadeDependente<18){
        console.log("Seu filho já pode ter um acartão vinculado ao seu");
    }else{
        console.log("Consulte outras possibilidades do Labank");
    }
}else{
    console.log("Consulte outras possibilidades do Labank");
}

if(idadeDependente>=13 && idadeDependente<18){
    console.log("Seu filho já pode ter um acartão vinculado ao seu");
}else{
    con
run-fywh-xca*/

const numero = prompt('Digite um numero.')
if (numero%2 == 0){
    if (numero%3 == 0){
        console.log('é dividido por 2 e 3');
    } else {
        console.log('não é divisivel');
    }
}

switch (numero) {
    case 6:
        console.log(`você digitou o número seis`)
        break;
    case 12:
        console.log(`você digitou o número doze`)
        break;
    case 18:
        console.log(`você digitou o número dezoito`)
        break;
    case 24:
        console.log(`você digitou o número vinte e quatro`)
        break;

    default:
        break;
}
