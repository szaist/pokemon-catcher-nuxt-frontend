import type { PokePaginationProps, PokeResult } from "~/app/types";

export type PokePokemonsByType = {
    id: number
    name: string
    pokemon: {
        pokemon: PokeResult
    }[]
}

export const useFetchPokemonsByType = async (pokemonType: string, pagination?: PokePaginationProps): Promise<PokePokemonsByType> => {
    const params = new URLSearchParams();

    if(pagination?.limit){
        params.append("limit", pagination.limit.toString());
    }

    if(pagination?.offset){
        params.append("offset", pagination.offset.toString());
    }

    const url = params.size > 0 ? `type/${pokemonType}?${params.toString()}` : `type/${pokemonType}`

    return await useCommunityFetch(url, { method: "GET" });
}