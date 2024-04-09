import type { UserPokemon } from "~/app/models/Pokemon"

export const useFetchUserPokemons = (): Promise<UserPokemon[]> => {
    return useApiFetch('/pokemon')
}