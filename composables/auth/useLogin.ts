import type { LoginUserRequest } from "~/app/contracts/auth/LoginUserRequest";
import type { TokenResponse } from "~/app/contracts/auth/TokenResponse";

export const useLogin = async (request: LoginUserRequest): Promise<TokenResponse> => {
    return await usePublicApiFetch('/auth/login', {method: 'POST', body: request})
}