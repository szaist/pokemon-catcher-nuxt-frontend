<script lang="ts" setup>
import ResultSkeletonItem from '../skeletons/ResultSkeletonItem.vue';

const pokemonStore = usePokemonsStore()

const navigateToProfile = (name: string) => {
    navigateTo(`/pokemon/${name}`)
}
</script>

<template>
    <div class="max-w-[800px] mx-auto">
        <p class="text-2xl font-bold" v-if="!pokemonStore.selectedType">Select a pokemon type...</p>
        <template v-else-if="!pokemonStore.isLoading">
            <div v-for="pokemon in pokemonStore.filteredPokemons" :key="pokemon.name" class="flex gap-4 items-center justify-between border p-1 rounded my-1">
                <div class="text-3xl">{{ pokemon.name }}</div>
                <Button variant="outline" @click="navigateToProfile(pokemon.name)">Visit profile</Button>
            </div>
        </template>
        <div v-else class="flex flex-col gap-1 w-full">
            <ResultSkeletonItem v-for="index in 10" :key="index" />
        </div>
    </div>
</template>