export const getIdFromPokeApiUrl = (url: string): string => {
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 2]
}