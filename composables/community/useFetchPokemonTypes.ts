import type { PokePagination, PokeResult } from "~/app/types";

export const useFetchPokemonTypes = async (): Promise<PokePagination<PokeResult>> => {
    return await useCommunityFetch('type', { method: "GET" });
}