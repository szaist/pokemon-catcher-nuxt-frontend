export const useCommunityFetch = <T>(request: string, opts?: any): Promise<T> => {
    const config = useRuntimeConfig()
  
    return $fetch(request, { baseURL: config.public.POKEMON_API_URL, ...opts })
}

export const usePublicApiFetch = <T>(
    request: string,
    opts?: any,
  ): Promise<T> => {
    const config = useRuntimeConfig()
  
    return $fetch(request, { baseURL: config.public.API_URL, ...opts })
  }
  
  export const useApiFetch = <T>(
    request: string,
    opts?: any,
  ): Promise<T> => {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()
  
    return $fetch(request, {
      baseURL: config.public.API_URL,
      ...opts,
      headers: {
        ...opts?.headers,
        Authorization: `Bearer ${authStore.authToken}`,
      },
    })
  }