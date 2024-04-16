/*
5 - Crie uma página que vai pedir ao usuário "Digite qual tabuada você quer saber:", o usuário vai digitar um número e a partir desse número você vai exibir a tabuada correspondente. 

Utilize um laço de repetição para montar a tabuada.
*/

function getTabuada(theNumber){
  for (var i=1 ; i<=10 ; i++){
    document.write(`${theNumber} X ${i} = ${theNumber*i}`);
    document.write('<br>');
  }
}

let number = prompt("Digite qual tabuada você quer saber:")
getTabuada(number);