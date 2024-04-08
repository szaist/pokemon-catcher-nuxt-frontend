import type { Result } from "."

export type PokemonsByType = {
    id: number
    name: string
    pokemon: {
        pokemon: Result
    }[]
}