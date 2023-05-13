import createPokemonBox from "./js/createPokemon";
import { log } from "./js/createPokemon";

const POKECOUNT = 12;

const initPokemon = async () => {
  for (let i = 1; i <= POKECOUNT; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let loader=document.querySelector('.loader')
  loader.classList.add('visible')
  let url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createPokemonBox(data);
  loader.classList.remove('visible')
};




initPokemon();
log()

