let currentPokemon = [];
let displayPokemon = [];
let SHOW_ON_PAGE = 10;
let START = 0;

const getData = () => {
  // const pokemon = document.querySelector("#pokemon").value;
  // const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const gen = document.querySelector("#gen").value;
  const url = `https://pokeapi.co/api/v2/generation/${gen}`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(generationData => {
      let pokeData = generationData.pokemon_species;
      currentPokemon = pokeData;
      displayData(0);
    });
}

const displayData = (start = 0) => {
  displayPokemon = currentPokemon.slice(start, SHOW_ON_PAGE);
  let container = document.querySelector('#poke-container');
  let items = '';
  displayPokemon.forEach(p => {
    items += `<div class="pokemon">
    <p class="poke-name">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</p>
    <div>
    <button onclick="getMoreData(this,'${p.name}')">More info about ${p.name}</button>
    </div>
    </div>
    `
  })
  container.innerHTML = items;
}

const getMoreData = (btn, name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(pokemonData => {
      let abilities = pokemonData["abilities"];
      let div = btn.parentNode;
      let text= "";
      abilities.forEach(a => {
        text += `<p>${a.ability.name}</p>`

      })
      div.innerHTML = text;
    });
}