<template>
  <div>
    <h1>This is an Pokemon page</h1>
    <h2>List Pokemon</h2>
    <ul>
      <li v-for="pokemon in listPokemon" v-bind:key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>

    <button @click="fetchMorePokemon">
      fetch more
    </button>
  </div>
</template>

<script>
export default {
  name: "PokemonView",
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list
    }
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    },
    fetchMorePokemon() {
      this.$store.dispatch("pokemon/fetchMore");
    }
  },
  mounted() {
    this.fetchPokemon()
  }
}
</script>
