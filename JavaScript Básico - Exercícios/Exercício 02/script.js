/* 
2 - Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: 

"Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 

Mantenha a mensagem condizente com a idade informada.
*/

let nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite sua idade: ");

 if(idade > 0 && idade < 18){
  if(nome == "Thomas Anderson"){
    alert(`Olá ${nome}, você é MENOR de idade. Você é personagem do filme The Matrix!`);
  }
  else
    alert(`Olá ${nome}, você é MENOR de idade`);
 }

 else if (idade >= 18){
  if(nome == "Thomas Anderson"){
    alert(`Olá ${nome}, você é MAIOR de idade. Você é personagem do filme The Matrix!`);
  }
  else
    alert(`Olá ${nome}, você é MAIOR de idade`);
 }

 else
 alert("Digite uma idade válida!");