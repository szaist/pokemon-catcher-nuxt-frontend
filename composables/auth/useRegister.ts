import type { RegisterUserRequest } from "~/app/contracts/auth/RegisterUserRequest"
import type { TokenResponse } from "~/app/contracts/auth/TokenResponse"

export const useRegister = async (request: RegisterUserRequest): Promise<TokenResponse> => {
    return await usePublicApiFetch('/auth/register', {method: 'POST', body: request})
}