import type { PaginationProps, PokePagination } from "~/app/contracts";
import type { PokemonsByType } from "~/app/contracts/PokemonsByType";

export const useFetchPokemonsByType = async (pokemonType: string, pagination?: PaginationProps): Promise<PokemonsByType> => {
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