import type { UserPokemon } from "~/app/models/Pokemon"

export const useCatchPokemon = (pokemonId: string): Promise<UserPokemon> => {
    return useApiFetch('/pokemon/catch', {method: 'POST', body: { id: pokemonId }})
}