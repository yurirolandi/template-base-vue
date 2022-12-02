<template>
  <div class="home">
    <ListPokemon :pokemons="pokemonList" @viewPokemon="view"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { FETCH_POKEMON, FETCH_POKEMON_SELECTED } from '@/store/modules/pokemon/actions';
import ListPokemon from '@/components/ListPokemon.vue';

export default {
  name: 'HomeView',
  components: {
    ListPokemon,
  },
  computed: {
    ...mapState({
      pokemonList: ({ pokemon }) => pokemon.pokemon,
    }),
  },
  methods: {
    async view(pokemonSelected) {
      const id = pokemonSelected.url.split('/')[6] || '';
      await this.$store.dispatch(FETCH_POKEMON_SELECTED, id);
      this.$router.push(`/about/${id}`);
    },
  },
  async mounted() {
    await this.$store.dispatch(FETCH_POKEMON);
  },

};
</script>
