const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/add-pokemon', pokemonController.getAddPokemonPage);
router.post('/add-pokemon', pokemonController.addPokemon);


module.exports = router;