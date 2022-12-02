import { getPokemons, getSelectedPokemon } from '@/services/pokemon';

import * as ACTIONS from './actions';
// import * as GETTERS from './getters';
import * as MUTATIONS from './mutations';

export default {
  state: {
    pokemon: [],
    pokemonSelected: {},
    errorStatus: {},
  },
  actions: {
    [ACTIONS.FETCH_POKEMON]: async ({ commit }) => {
      try {
        const { data } = await getPokemons();
        commit(MUTATIONS.SET_POKEMON, data.results);
      } catch (error) {
        commit(MUTATIONS.SET_POKEMON_ERROR, {
          actions: ACTIONS.FETCH_POKEMON,
          ...error,
        });
      }
    },
    [ACTIONS.FETCH_POKEMON_SELECTED]: async ({ commit }, id) => {
      try {
        const { data } = await getSelectedPokemon(id);
        commit(MUTATIONS.SET_POKEMON_SELECTED, data);
      } catch (error) {
        commit(MUTATIONS.SET_POKEMON_ERROR, {
          actions: ACTIONS.FETCH_POKEMON_SELECTED,
          ...error,
        });
      }
    },
  },
  mutations: {
    [MUTATIONS.SET_POKEMON]: (state, payload) => {
      state.pokemon = payload;
    },
    [MUTATIONS.SET_POKEMON_SELECTED]: (state, payload) => {
      state.pokemonSelected = payload;
    },
  },
  getters: {},
};
