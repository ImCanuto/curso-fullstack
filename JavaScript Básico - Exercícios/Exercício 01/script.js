/* 
​1 - Faça uma página que ao entrar vai pedir o nome do usuário e depois a idade, em seguida mostre na tela uma mensagem de saudação de acordo com a idade do usuário:  

"Olá [nome], você é MAIOR de idade" 

ou 

"Olá [nome], você é MENOR de idade" 
*/

let nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite sua idade: ");

 if(idade > 0 && idade < 18){
  alert(`Olá ${nome}, você é MENOR de idade`);
 }

 else if (idade >= 18){
  alert(`Olá ${nome}, você é MAIOR de idade`);
 }

 else
 alert("Digite uma idade válida!");