<template>
    <div class="pokemon-details">
      <div class="pokemon-details__container"
        :style="{ background: colors[pokemonAtributes.types[0].type.name] }">
        <div class="image-container">
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonAtributes.id}.png`"
            :alt="pokemonAtributes.name" />
        </div>
    <div class="info">
        <span class="number">
          Id:  {{ pokemonAtributes.id }}
        </span>
        <h3 class="name">
            {{ pokemonAtributes.name }}
        </h3>
        <small class="type">Tipo: <span> {{ pokemonAtributes.types[0].type.name }} </span> </small>
    </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PokemonDetails',
  props: {
    pokemonAtributes: Object,
  },
  data() {
    return {
      colors: {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.pokemon-details {
  max-width: 20vw;
  margin: 0 auto;
  &__container {
    background-color: red;
    border-radius: 15px;
    height: 25vh;
    padding: 0.5rem 0;
    .image-container {
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      width: 100px;
      height: 100px;
      text-align: center;
      margin: 0 auto;
      > img {
        max-width: 90%;
        margin-top: 7px;
      }
    }
    .info {
      margin-top: 1rem;
      .number {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 0.8em;
      }
      .name {
        margin: 0.5rem;
      }
    }
  }
}

</style>
