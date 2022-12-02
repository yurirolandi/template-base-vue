import http from './http';

export const getPokemons = async () => {
  const data = await http.get('/pokemon');
  return data;
};

export const getSelectedPokemon = async (id) => {
  const data = await http.get(`/pokemon/${id}`);
  return data;
};
