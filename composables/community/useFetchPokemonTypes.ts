import type { PaginationProps, PokePagination, Result } from "~/app/contracts";

export type PokemonType = Result

export const useFetchPokemonTypes = async (): Promise<PokePagination<PokemonType>> => {

    return await useCommunityFetch('type', { method: "GET" });
}