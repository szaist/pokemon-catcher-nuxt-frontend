<script lang="ts" setup>
import type { PokePokemon } from '~/app/types'
import PokemonCardSkeleton from '~/components/skeletons/PokemonCardSkeleton.vue';
import { ArrowLeftIcon } from '@radix-icons/vue'

const {id} = useRoute().params
const pokemonStore = usePokemonsStore()

const { data, pending, error } = useFetch<PokePokemon>(`pokemon/${id}`, { baseURL: useRuntimeConfig().public.POKEMON_API_URL})

const visibleAbilities = computed(() => {
    if (!data) return []
    return data.value?.abilities.filter(a => !a.is_hidden)
})

const ownedPokemon = computed(() => {
    return pokemonStore.userPokemons.find(p => p.name === data.value?.name)
})

const catchPokemon = async () => {
    await pokemonStore.catchPokemon(id.toString())
}

const releasePokemon = async () => {
    if(!ownedPokemon.value) return
    await pokemonStore.releasePokemon(ownedPokemon.value?.id.toString())
}

</script>
<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <nuxt-link to="/" class="flex items-center gap-2 font-bold py-2"><ArrowLeftIcon /> Back to pokemons</nuxt-link>
        <div v-if="error" class="border-destructive border w-[600px] flex items-center justify-center rounded-md p-5 mb-5">
            <p>{{ error }}</p>
        </div>
        <PokemonCardSkeleton v-else-if="pending || !data"/>
        <Card v-else class="max-w-[600px] w-full">
            <CardHeader class="border-b mb-4 rounded-t-md" :class="{'bg-green-300': ownedPokemon}">
                <CardTitle class="flex justify-between items-center">
                    <h1 class="font-bold text-3xl">{{ data.name }}</h1>
                    <Button v-if="!ownedPokemon" size="lg" @click="catchPokemon" :disabled="pokemonStore.isLoading">Catch</Button>
                    <Button v-else variant="outline" size="lg" @click="releasePokemon" :disabled="pokemonStore.isLoading">Release</Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div class="flex flex-col items-center">
                    <img :src="data.sprites.front_default" alt="pokemon" class="w-[300px] h-[300px] border"/>
                    <div class="grid grid-cols-2 justify-items-center w-full mt-10">
                        <div>
                            <div class="flex gap-2">
                                <p class="font-bold">Weight: </p><span>{{ data.weight }} hectograms</span>
                            </div>
                            <div class="flex gap-2">
                                <p class="font-bold">Height: </p><span>{{ data.height }} dm</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p class="font-bold">Abilities:</p>
                                <ul>
                                    <li v-for="ability in visibleAbilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>