export const useLogout = async (): Promise<void> => {
    return await useApiFetch('/auth/logout', { method: 'POST' })
}