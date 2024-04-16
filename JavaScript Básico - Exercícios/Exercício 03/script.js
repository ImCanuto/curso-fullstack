/* 
​3 - Modifique o exercício anterior para pedir os dados do usuário somente depois dele clicar em um botão escrito "Entrar". 

Faça a mensagem de saudação ser exibida em um H1, e a mensagem personalizada em um H2.
*/

function testeIdade(){
  let nome = prompt("Digite o seu nome: ");
  let idade = prompt("Digite sua idade: ");

  if(idade > 0 && idade < 18){
    if(nome == "Thomas Anderson"){
      document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MENOR de idade.`;
      document.querySelector('#message').innerHTML =  `Você é personagem do filme The Matrix!`;
    }
    else
      document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MENOR de idade`;
  }

  else if (idade >= 18){
    if(nome == "Thomas Anderson"){
      document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MAIOR de idade.`;
      document.querySelector('#message').innerHTML = `Você é personagem do filme The Matrix!`;
    }
    else
      document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MAIOR de idade.`;
  }

  else
  alert("Digite uma idade válida!");
}