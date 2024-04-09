<script lang="ts" setup>
import ResultSkeletonItem from '../skeletons/ResultSkeletonItem.vue'

const pokemonStore = usePokemonsStore()

const navigateToProfile = (name: string) => {
  navigateTo(`/pokemon/${name}`)
}

const ownedPokemon = (name: string) => {
  return pokemonStore.userPokemons.find(p => p.name === name)
}
</script>

<template>
  <div class="max-w-[800px] mx-auto">
    <p
      class="text-2xl font-bold"
      v-if="!pokemonStore.typeFilter"
    >
      Select a pokemon type...
    </p>
    <div v-else-if="!pokemonStore.isLoading">
      <div
        v-for="pokemon in pokemonStore.paginatedPokemons"
        class="flex gap-4 items-center justify-between border px-4 py-1 rounded my-1"
        :class="{ 'bg-green-100': ownedPokemon(pokemon.name) }"
      >
        <div class="text-2xl">{{ pokemon.name }}</div>
        <Button
          variant="outline"
          @click="navigateToProfile(pokemon.name)"
          >Visit profile</Button
        >
      </div>
      <div
        v-if="!pokemonStore.paginatedPokemons.length"
        class="flex justify-center my-10"
      >
        <p class="text-3xl font-semibold">No pokemons found...</p>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col gap-1 w-full"
    >
      <ResultSkeletonItem
        v-for="index in 10"
        :key="index"
      />
    </div>
  </div>
</template>
