/* 
​4 - Modifique o exercício anterior para exibir um alerta escrito "Preencha os campos corretamente!" caso o usuário não preencha o nome ou idade. 

A página não deve exibir a mensagem de saudação neste caso.
*/

function testeIdade(){
  let nome = prompt("Digite o seu nome: ");
  let idade = prompt("Digite sua idade: ");

  if(idade !== "" && nome !== ""){
    if(idade > 0 && idade < 18){
      if(nome == "Thomas Anderson"){
        document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MENOR de idade.`;
        document.querySelector('#message').innerHTML =  `Você é personagem do filme The Matrix!`;
      }
      else
        document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MENOR de idade`;
    }

    else{
      if(nome == "Thomas Anderson"){
        document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MAIOR de idade.`;
        document.querySelector('#message').innerHTML = `Você é personagem do filme The Matrix!`;
      }
      else
        document.querySelector('#salutation').innerHTML = `Olá ${nome}, você é MAIOR de idade.`;
    }
  }
  else{
    alert("Preencha os campos corretamente!")
  }
}