import type { PokePagination, PokePaginationProps, PokeResult } from "~/app/types";

export const useFetchPokemons = async (pagination?: PokePaginationProps): Promise<PokePagination<PokeResult>> => {
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