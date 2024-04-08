import type { PokePagination, Result, PaginationProps } from "~/app/contracts";



export type PokePokemon = Result

export const useFetchPokemons = async (pagination?: PaginationProps): Promise<PokePagination<PokePokemon>> => {
    const params = new URLSearchParams();

    if(pagination?.limit){
        params.append("limit", pagination.limit.toString());
    }

    if(pagination?.offset){
        params.append("offset", pagination.offset.toString());
    }

    const url = params.size > 0 ? `pokemon?${params.toString()}` : 'pokemon'

    return await useCommunityFetch(url, { method: "GET" });
}
