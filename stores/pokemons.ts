import { defineStore } from "pinia";
import type { PaginationProps } from "~/app/contracts";
import type { UserPokemon } from "~/app/models/Pokemon";
import type { PokemonType } from "~/composables/community/useFetchPokemonTypes";
import { type PokePokemon } from "~/composables/community/useFetchPokemons";

export const usePokemonsStore = defineStore('pokemons', () => {
    const pokemonTypes = ref<Array<PokemonType>>([])

    const selectedType = ref<string>('')
    const isLoading = ref<boolean>(false)

    const pokemonList = ref<Array<PokePokemon>>([])
    const userPokemons = ref<Array<UserPokemon>>([])
    const pagination = ref<PaginationProps>({ offset: 0, limit: 20 })

    const search = ref<string>('')

    const filteredPokemons = computed(() => search.value === '' ? pokemonList.value :  pokemonList.value.filter(pokemon => pokemon.name.includes(search.value)))

    const fetchAllPokemonTypes = async () => {
        const response = await useFetchPokemonTypes()

        pokemonTypes.value = response.results
    }

    const fetchPokemonsByType = async (type: string) => {
        const response = await useFetchPokemonsByType(type)

        pokemonList.value = response.pokemon.map(pokemon => ({name: pokemon.pokemon.name, url: pokemon.pokemon.url }))
    }

    watch(selectedType, async (type) => {
        if(type){
            isLoading.value = true
            await fetchPokemonsByType(getIdFromPokeApiUrl(type))
            isLoading.value = false
        }
    })

    fetchAllPokemonTypes()
    return {userPokemons, pokemonTypes, pagination, search, selectedType, filteredPokemons, fetchPokemonsByType, isLoading}
})