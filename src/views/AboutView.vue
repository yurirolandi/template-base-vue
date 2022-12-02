<template>
  <div class="about">
    <PokemonDetails :pokemonAtributes="pokemonSelected" />
  </div>
</template>

<script>
import PokemonDetails from '@/components/PokemonDetails.vue';
import { mapState } from 'vuex';

export default {
  name: 'AboutView',
  components: {
    PokemonDetails,
  },
  computed: {
    ...mapState({
      pokemonSelected: ({ pokemon }) => pokemon.pokemonSelected,
    }),
  },
};

</script>
