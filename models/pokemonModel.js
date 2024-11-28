const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno', peso: 6.9, altura: 0.8, lvlPoder: 45 },
  { id: 2, nome: 'Ivysaur', tipo: 'Vegetal/Veneno', peso: 13.0, altura: 1.0, lvlPoder: 60 },
  { id: 3, nome: 'Venusaur', tipo: 'Vegetal/Veneno', peso: 100.0, altura: 2.0, lvlPoder: 80 },
  { id: 4, nome: 'Charmander', tipo: 'Fogo', peso: 6.5, altura: 0.6, lvlPoder: 95 },
  { id: 5, nome: 'Charmeleon', tipo: 'Fogo', peso: 19.0, altura: 1.1, lvlPoder: 150 },
  { id: 6, nome: 'Charizard', tipo: 'Fogo/Voador', peso: 90.5, altura: 1.7, lvlPoder: 200 },
  { id: 7, nome: 'Squirtle', tipo: 'Água', peso: 9.0, altura: 0.5, lvlPoder: 65 },
  { id: 8, nome: 'Wartortle', tipo: 'Água', peso: 22.5, altura: 1.0, lvlPoder: 85 },
  { id: 9, nome: 'Blastoise', tipo: 'Água', peso: 85.5, altura: 1.6, lvlPoder: 120 },
  { id: 10, nome: 'Caterpie', tipo: 'Inseto', peso: 2.9, altura: 0.3, lvlPoder: 30 },
  { id: 11, nome: 'Metapod', tipo: 'Inseto', peso: 9.9, altura: 0.7, lvlPoder: 40 },
  { id: 12, nome: 'Butterfree', tipo: 'Inseto/Voador', peso: 32.0, altura: 1.1, lvlPoder: 70 },
  { id: 13, nome: 'Weedle', tipo: 'Inseto/Veneno', peso: 3.2, altura: 0.3, lvlPoder: 25 },
  { id: 14, nome: 'Kakuna', tipo: 'Inseto/Veneno', peso: 10.0, altura: 0.6, lvlPoder: 35 },
  { id: 15, nome: 'Beedrill', tipo: 'Inseto/Veneno', peso: 29.5, altura: 1.0, lvlPoder: 90 },
  { id: 16, nome: 'Pidgey', tipo: 'Normal/Voador', peso: 1.8, altura: 0.3, lvlPoder: 30 },
  { id: 17, nome: 'Pidgeotto', tipo: 'Normal/Voador', peso: 30.0, altura: 1.1, lvlPoder: 55 },
  { id: 18, nome: 'Pidgeot', tipo: 'Normal/Voador', peso: 39.5, altura: 1.5, lvlPoder: 100 },
  { id: 19, nome: 'Rattata', tipo: 'Normal', peso: 3.5, altura: 0.3, lvlPoder: 25 },
  { id: 20, nome: 'Raticate', tipo: 'Normal', peso: 18.5, altura: 0.7, lvlPoder: 55 },
  { id: 21, nome: 'Spearow', tipo: 'Normal/Voador', peso: 2.0, altura: 0.3, lvlPoder: 35 },
  { id: 22, nome: 'Fearow', tipo: 'Normal/Voador', peso: 38.0, altura: 1.2, lvlPoder: 85 },
  { id: 23, nome: 'Ekans', tipo: 'Veneno', peso: 6.9, altura: 2.0, lvlPoder: 45 },
  { id: 24, nome: 'Arbok', tipo: 'Veneno', peso: 65.0, altura: 3.5, lvlPoder: 80 },
  { id: 25, nome: 'Pikachu', tipo: 'Elétrico', peso: 6.0, altura: 0.4, lvlPoder: 55 },
  { id: 26, nome: 'Raichu', tipo: 'Elétrico', peso: 30.0, altura: 0.8, lvlPoder: 90 },
  { id: 27, nome: 'Sandshrew', tipo: 'Terra', peso: 12.0, altura: 0.6, lvlPoder: 50 },
  { id: 28, nome: 'Sandslash', tipo: 'Terra', peso: 29.5, altura: 1.0, lvlPoder: 75 },
  { id: 29, nome: 'Nidoran♀', tipo: 'Veneno', peso: 7.0, altura: 0.4, lvlPoder: 40 },
  { id: 30, nome: 'Nidorina', tipo: 'Veneno', peso: 20.0, altura: 0.8, lvlPoder: 60 },
  { id: 31, nome: 'Nidoqueen', tipo: 'Veneno/Terra', peso: 60.0, altura: 1.3, lvlPoder: 90 },
  { id: 32, nome: 'Nidoran♂', tipo: 'Veneno', peso: 9.0, altura: 0.5, lvlPoder: 40 },
  { id: 33, nome: 'Nidorino', tipo: 'Veneno', peso: 19.5, altura: 0.9, lvlPoder: 65 },
  { id: 34, nome: 'Nidoking', tipo: 'Veneno/Terra', peso: 62.0, altura: 1.4, lvlPoder: 90 },
  { id: 35, nome: 'Clefairy', tipo: 'Fada', peso: 7.5, altura: 0.6, lvlPoder: 50 },
  { id: 36, nome: 'Clefable', tipo: 'Fada', peso: 40.0, altura: 1.3, lvlPoder: 85 },
  { id: 37, nome: 'Vulpix', tipo: 'Fogo', peso: 9.9, altura: 0.6, lvlPoder: 45 },
  { id: 38, nome: 'Ninetales', tipo: 'Fogo', peso: 19.9, altura: 1.1, lvlPoder: 90 },
  { id: 39, nome: 'Jigglypuff', tipo: 'Normal/Fada', peso: 5.5, altura: 0.5, lvlPoder: 35 },
  { id: 40, nome: 'Wigglytuff', tipo: 'Normal/Fada', peso: 12.0, altura: 1.0, lvlPoder: 75 },
  { id: 41, nome: 'Zubat', tipo: 'Veneno/Voador', peso: 7.5, altura: 0.8, lvlPoder: 40 },
  { id: 42, nome: 'Golbat', tipo: 'Veneno/Voador', peso: 55.0, altura: 1.6, lvlPoder: 75 },
  { id: 43, nome: 'Oddish', tipo: 'Vegetal/Veneno', peso: 5.4, altura: 0.5, lvlPoder: 45 },
  { id: 44, nome: 'Gloom', tipo: 'Vegetal/Veneno', peso: 8.6, altura: 0.8, lvlPoder: 60 },
  { id: 45, nome: 'Vileplume', tipo: 'Vegetal/Veneno', peso: 18.6, altura: 1.2, lvlPoder: 85 },
  { id: 46, nome: 'Paras', tipo: 'Inseto/Vegetal', peso: 5.4, altura: 0.3, lvlPoder: 40 },
  { id: 47, nome: 'Parasect', tipo: 'Inseto/Vegetal', peso: 29.5, altura: 1.0, lvlPoder: 70 },
  { id: 48, nome: 'Venonat', tipo: 'Inseto/Veneno', peso: 30.0, altura: 1.0, lvlPoder: 50 },
  { id: 49, nome: 'Venomoth', tipo: 'Inseto/Veneno', peso: 12.5, altura: 1.5, lvlPoder: 90 },
  { id: 50, nome: 'Diglett', tipo: 'Terra', peso: 0.8, altura: 0.2, lvlPoder: 35 },
  { id: 51, nome: 'Dugtrio', tipo: 'Terra', peso: 33.3, altura: 0.7, lvlPoder: 65 },
  { id: 52, nome: 'Meowth', tipo: 'Normal', peso: 4.2, altura: 0.4, lvlPoder: 40 },
  { id: 53, nome: 'Persian', tipo: 'Normal', peso: 32.0, altura: 1.0, lvlPoder: 65 },
  { id: 54, nome: 'Psyduck', tipo: 'Água', peso: 19.6, altura: 0.8, lvlPoder: 50 },
  { id: 55, nome: 'Golduck', tipo: 'Água', peso: 76.6, altura: 1.7, lvlPoder: 80 },
  { id: 56, nome: 'Mankey', tipo: 'Lutador', peso: 28.0, altura: 0.5, lvlPoder: 50 },
  { id: 57, nome: 'Primeape', tipo: 'Lutador', peso: 32.0, altura: 1.0, lvlPoder: 80 },
  { id: 58, nome: 'Growlithe', tipo: 'Fogo', peso: 19.0, altura: 0.7, lvlPoder: 55 },
  { id: 59, nome: 'Arcanine', tipo: 'Fogo', peso: 155.0, altura: 1.9, lvlPoder: 100 },
  { id: 60, nome: 'Poliwag', tipo: 'Água', peso: 12.4, altura: 0.6, lvlPoder: 40 },
  { id: 61, nome: 'Poliwhirl', tipo: 'Água', peso: 20.0, altura: 1.0, lvlPoder: 65 },
  { id: 62, nome: 'Poliwrath', tipo: 'Água/Lutador', peso: 54.0, altura: 1.3, lvlPoder: 85 },
  { id: 63, nome: 'Abra', tipo: 'Psíquico', peso: 19.5, altura: 0.9, lvlPoder: 20 },
  { id: 64, nome: 'Kadabra', tipo: 'Psíquico', peso: 56.5, altura: 1.3, lvlPoder: 70 },
  { id: 65, nome: 'Alakazam', tipo: 'Psíquico', peso: 48.0, altura: 1.5, lvlPoder: 100 },
  { id: 66, nome: 'Machop', tipo: 'Lutador', peso: 19.5, altura: 0.8, lvlPoder: 50 },
  { id: 67, nome: 'Machoke', tipo: 'Lutador', peso: 70.5, altura: 1.5, lvlPoder: 75 },
  { id: 68, nome: 'Machamp', tipo: 'Lutador', peso: 130.0, altura: 1.6, lvlPoder: 90 },
  { id: 69, nome: 'Bellsprout', tipo: 'Vegetal/Veneno', peso: 4.0, altura: 0.7, lvlPoder: 40 },
  { id: 70, nome: 'Weepinbell', tipo: 'Vegetal/Veneno', peso: 6.4, altura: 1.0, lvlPoder: 60 },
  { id: 71, nome: 'Victreebel', tipo: 'Vegetal/Veneno', peso: 15.5, altura: 1.7, lvlPoder: 85 },
  { id: 72, nome: 'Tentacool', tipo: 'Água/Veneno', peso: 45.5, altura: 0.9, lvlPoder: 40 },
  { id: 73, nome: 'Tentacruel', tipo: 'Água/Veneno', peso: 55.0, altura: 1.6, lvlPoder: 80 },
  { id: 74, nome: 'Geodude', tipo: 'Pedra/Terra', peso: 20.0, altura: 0.4, lvlPoder: 50 },
  { id: 75, nome: 'Graveler', tipo: 'Pedra/Terra', peso: 105.0, altura: 1.0, lvlPoder: 65 },
  { id: 76, nome: 'Golem', tipo: 'Pedra/Terra', peso: 300.0, altura: 1.4, lvlPoder: 85 },
  { id: 77, nome: 'Ponyta', tipo: 'Fogo', peso: 30.0, altura: 1.0, lvlPoder: 60 },
  { id: 78, nome: 'Rapidash', tipo: 'Fogo', peso: 95.0, altura: 1.7, lvlPoder: 100 },
  { id: 79, nome: 'Slowpoke', tipo: 'Água/Psíquico', peso: 36.0, altura: 1.2, lvlPoder: 40 },
  { id: 80, nome: 'Slowbro', tipo: 'Água/Psíquico', peso: 78.5, altura: 1.6, lvlPoder: 75 },
  { id: 81, nome: 'Magnemite', tipo: 'Elétrico/Metálico', peso: 6.0, altura: 0.3, lvlPoder: 45 },
  { id: 82, nome: 'Magneton', tipo: 'Elétrico/Metálico', peso: 60.0, altura: 1.0, lvlPoder: 75 },
  { id: 83, nome: 'Farfetch\'d', tipo: 'Normal/Voador', peso: 15.0, altura: 0.8, lvlPoder: 52 },
  { id: 84, nome: 'Doduo', tipo: 'Normal/Voador', peso: 39.2, altura: 1.4, lvlPoder: 50 },
  { id: 85, nome: 'Dodrio', tipo: 'Normal/Voador', peso: 85.2, altura: 1.8, lvlPoder: 80 },
  { id: 86, nome: 'Seel', tipo: 'Água', peso: 90.0, altura: 1.1, lvlPoder: 45 },
  { id: 87, nome: 'Dewgong', tipo: 'Água/Gelo', peso: 120.0, altura: 1.7, lvlPoder: 75 },
  { id: 88, nome: 'Grimer', tipo: 'Veneno', peso: 30.0, altura: 0.9, lvlPoder: 50 },
  { id: 89, nome: 'Muk', tipo: 'Veneno', peso: 30.0, altura: 1.2, lvlPoder: 75 },
  { id: 90, nome: 'Shellder', tipo: 'Água', peso: 4.0, altura: 0.3, lvlPoder: 40 },
  { id: 91, nome: 'Cloyster', tipo: 'Água/Gelo', peso: 132.5, altura: 1.5, lvlPoder: 90 },
  { id: 92, nome: 'Gastly', tipo: 'Fantasma/Veneno', peso: 0.1, altura: 1.3, lvlPoder: 35 },
  { id: 93, nome: 'Haunter', tipo: 'Fantasma/Veneno', peso: 0.1, altura: 1.6, lvlPoder: 55 },
  { id: 94, nome: 'Gengar', tipo: 'Fantasma/Veneno', peso: 40.5, altura: 1.5, lvlPoder: 90 },
  { id: 95, nome: 'Onix', tipo: 'Pedra/Terra', peso: 210.0, altura: 8.8, lvlPoder: 70 },
  { id: 96, nome: 'Drowzee', tipo: 'Psíquico', peso: 32.4, altura: 1.0, lvlPoder: 60 },
  { id: 97, nome: 'Hypno', tipo: 'Psíquico', peso: 75.6, altura: 1.6, lvlPoder: 85 },
  { id: 98, nome: 'Krabby', tipo: 'Água', peso: 6.5, altura: 0.4, lvlPoder: 45 },
  { id: 99, nome: 'Kingler', tipo: 'Água', peso: 60.0, altura: 1.3, lvlPoder: 85 },
  { id: 100, nome: 'Voltorb', tipo: 'Elétrico', peso: 10.4, altura: 0.5, lvlPoder: 40 },
  { id: 101, nome: 'Electrode', tipo: 'Elétrico', peso: 66.6, altura: 1.2, lvlPoder: 60 },
  { id: 102, nome: 'Exeggcute', tipo: 'Vegetal/Psíquico', peso: 2.5, altura: 0.4, lvlPoder: 50 },
  { id: 103, nome: 'Exeggutor', tipo: 'Vegetal/Psíquico', peso: 120.0, altura: 2.0, lvlPoder: 95 },
  { id: 104, nome: 'Cubone', tipo: 'Terra', peso: 6.5, altura: 0.4, lvlPoder: 50 },
  { id: 105, nome: 'Marowak', tipo: 'Terra', peso: 45.0, altura: 1.0, lvlPoder: 80 },
  { id: 106, nome: 'Hitmonlee', tipo: 'Lutador', peso: 49.8, altura: 1.5, lvlPoder: 90 },
  { id: 107, nome: 'Hitmonchan', tipo: 'Lutador', peso: 50.2, altura: 1.4, lvlPoder: 90 },
  { id: 108, nome: 'Lickitung', tipo: 'Normal', peso: 65.5, altura: 1.2, lvlPoder: 55 },
  { id: 109, nome: 'Koffing', tipo: 'Veneno', peso: 1.0, altura: 0.6, lvlPoder: 40 },
  { id: 110, nome: 'Weezing', tipo: 'Veneno', peso: 9.5, altura: 1.2, lvlPoder: 65 },
  { id: 111, nome: 'Rhyhorn', tipo: 'Terra/Pedra', peso: 115.0, altura: 1.0, lvlPoder: 80 },
  { id: 112, nome: 'Rhydon', tipo: 'Terra/Pedra', peso: 120.0, altura: 1.9, lvlPoder: 105 },
  { id: 113, nome: 'Chansey', tipo: 'Normal', peso: 34.6, altura: 1.1, lvlPoder: 50 },
  { id: 114, nome: 'Tangela', tipo: 'Vegetal', peso: 35.0, altura: 1.0, lvlPoder: 65 },
  { id: 115, nome: 'Kangaskhan', tipo: 'Normal', peso: 80.0, altura: 2.2, lvlPoder: 90 },
];

  
  const getPokemons = () => pokemons;
  
  const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
  

  const getPokemonByName = (nome) => pokemons.find(p => p.nome.toLowerCase() === nome.toLowerCase());

  
  const createPokemon = (nome, tipo, peso, altura, lvlPoder) => {
    const novoPokemon = { id: pokemons.length + 1, nome, tipo, peso, altura, lvlPoder};
    pokemons.push(novoPokemon);
  };
  
  module.exports = { getPokemons, getPokemonById, getPokemonByName, createPokemon };