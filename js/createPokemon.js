
const pokeContainer = document.querySelector(".pokemons__content");

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
  };
export default function createPokemonBox(pokemon) {
  const { name, weight } = pokemon;
  const id = pokemon.id.toString().padStart(3, "0");
  const type = pokemon.types[0].type.name;
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon__box");
  pokemonEl.style.backgroundColor = colors[type];
  pokemonEl.innerHTML = buildHtmlOfPokemon(id, name, weight, type);
  pokeContainer.appendChild(pokemonEl);
  console.log('peadeadf');
}

 export function log (){
  console.log('eadjslafjdl;jl;dsfjsl')
}
function buildHtmlOfPokemon(id, name, weight, type) {
  return `
      <img
        class="poke-img"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"
        alt="${name} Pokemon"
      />
      <div class="pokemon__data">
      <h3 class="pokemon__name">${name}</h3>
      <p class="pokemon__id"># ${id}</p>
      <p class="pokemon__weight">${weight} kg</p>
      <p class="pokemon__type">Type : ${type}</p>
      </div>
      
      `;
}
