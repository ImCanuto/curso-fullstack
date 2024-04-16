/*
6 - Criar uma página que lê uma lista de atores e exibe em caixas seus trabalhos
*/

let listaAtores = [

  {

    nome: 'Keanu Reeves',

    personagem: 'Neo',

    filme: 'The Matrix',

  },

  {

    nome: 'David Prowse',

    personagem: 'Darth Vader',

    filme: 'Star Wars Episódios IV-VI',

  },

  {

    nome: 'Bruce Wayne',

    personagem: 'Batman',

    filme: 'Batman - O Início'

  },
  {

    nome: 'Keanu Reeves',

    personagem: 'Neo',

    filme: 'The Matrix',

  },

  {

    nome: 'David Prowse',

    personagem: 'Darth Vader',

    filme: 'Star Wars Episódios IV-VI',

  },

  {

    nome: 'Bruce Wayne',

    personagem: 'Batman',

    filme: 'Batman - O Início'

  },

]

function showAtores(object){
  let htmlAtores = '';
  
  object.forEach((ator) => {
    let nome = ator.nome;
    let personagem = ator.personagem;
    let filme = ator.filme;

    htmlAtores += `
    <div class="box">
      <h2>${nome}</h2>
      <p>Interpreta o personagem ${personagem} no filme ${filme}</p>
    </div>
    `
  })

  const results = document.querySelector('.container');
  results.innerHTML = htmlAtores;
}

showAtores(listaAtores);


