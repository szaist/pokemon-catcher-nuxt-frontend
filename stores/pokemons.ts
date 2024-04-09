import { defineStore } from "pinia";
import type { UserPokemon } from "~/app/models/Pokemon";
import type { PokeResult } from "~/app/types";

export const usePokemonsStore = defineStore('pokemons', () => {
    const pokemonTypes = ref<Array<PokeResult>>([])
    const pokemons = ref<Array<PokeResult>>([])
    const userPokemons = ref<Array<UserPokemon>>([])
    
    const pagination = ref<{limit: number, offset: number}>({ limit: 25, offset: 0 })

    const selectedType = ref<string>('all')
    const isLoading = ref<boolean>(false)
    const search = ref<string>('')
    const ownedOnly = ref<boolean>(false)

    const ownedPokemonNames = computed(() => userPokemons.value.map(pokemon => pokemon.name))
    const pokemonList = computed(() => ownedOnly.value ? pokemons.value.filter(p => ownedPokemonNames.value.includes(p.name)) : pokemons.value)
    const filteredPokemons = computed(() => search.value === '' ? pokemonList.value : pokemonList.value.filter(pokemon => pokemon.name.includes(search.value)))
    const visiblePokemons = computed(() => filteredPokemons?.value ? filteredPokemons.value.slice(pagination.value.offset, pagination.value.offset + pagination.value.limit) : [] )

    const totalPages = computed(() => Math.ceil(filteredPokemons.value.length / pagination.value.limit))
    const currentPage = computed(() => Math.ceil(pagination.value.offset / pagination.value.limit) + 1)

    const firstPage = () => {
        pagination.value.offset = 0
    }
    const lastPage = () => {
        pagination.value.offset = (totalPages.value - 1) * pagination.value.limit
    }
    const nextPage = () => {
        if(pagination.value.offset + pagination.value.limit < filteredPokemons.value.length){
            pagination.value.offset += pagination.value.limit
        }
    }
    const previousPage = () => {
        if(pagination.value.offset - pagination.value.limit >= 0){
            pagination.value.offset -= pagination.value.limit
        }
    }

    const fetchAllPokemonTypes = async () => {
        const response = await useFetchPokemonTypes()

        pokemonTypes.value = response.results
    }

    const fetchPokemonsByType = async (type: string) => {
        const { pokemon } = await useFetchPokemonsByType(type)

        pokemons.value = pokemon.map(pokemon => ({name: pokemon.pokemon.name, url: pokemon.pokemon.url }))
    }
    const fetchAllPokemons = async () => {
        const response = await useFetchPokemons({limit: 2000})

        pokemons.value = response.results
    }

    const fetchUserPokemons = async () => {
        const response = await useFetchUserPokemons()

        userPokemons.value = response
    }

    watch(selectedType, async (type) => {
        if(type){
            isLoading.value = true
            
            if(type === 'all') await fetchAllPokemons()
            else await fetchPokemonsByType(getIdFromPokeApiUrl(type))

            isLoading.value = false
        }
    })

    watch(ownedOnly, () => {
        pagination.value.offset = 0
    })

    fetchAllPokemonTypes()
    fetchAllPokemons()
    fetchUserPokemons()

    const catchPokemon = async (pokemonId: string) => {
        try {
            isLoading.value = true
            const response = await useCatchPokemon(pokemonId)
    
            userPokemons.value.push(response)
        } catch (error) {
            console.error(error)
        }
        isLoading.value = false
    }

    const releasePokemon = async (pokemonId: string) => {
        try {
            isLoading.value = true
            const response = await useReleasePokemon(pokemonId)
    
            userPokemons.value = userPokemons.value.filter(pokemon => pokemon.id !== pokemonId)
        } catch (error) {
            console.error(error)
        }
        isLoading.value = false
    }
    return {
        userPokemons,
        pokemonTypes,
        search,
        selectedType,
        visiblePokemons,
        filteredPokemons,
        fetchPokemonsByType,
        isLoading,
        totalPages,
        currentPage,
        nextPage,
        previousPage,
        firstPage,
        lastPage,
        pagination,
        catchPokemon,
        releasePokemon,
        ownedOnly
    }
})