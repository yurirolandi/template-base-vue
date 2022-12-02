<template>
  <div class="list-pokemon">
    <div class="list" v-for="pokemon in pokemons" :key="pokemon.name">
      <h3> {{ pokemon.name }} </h3>
      <button class="list-view"
        @click.stop="$emit('viewPokemon', pokemon)">
        Visualizar pokemon
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPokemon',
  props: {
    pokemons: Array,
  },
};
</script>

<style scoped lang="scss">
.list-pokemon {
  max-width: 30vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  .list {
    margin: 0.5rem 0.8rem;
    border: 1px solid #cecece;
    border-radius: 15px;
    padding: 1rem;
    h3 {
      margin-top: 0;
    }
    .list-view {
      border: none;
      padding: 0.4rem;
      border-radius: 0.4rem;
      color: white;
      background: #42b983;
      cursor: pointer;
    }
  }
}
</style>
