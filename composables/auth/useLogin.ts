import type { LoginUserRequest } from "~/app/contracts/LoginUserRequest";
import type { TokenResponse } from "~/app/contracts/TokenResponse";

export const useLogin = async (request: LoginUserRequest): Promise<TokenResponse> => {
    return await usePublicApiFetch('/auth/login', {method: 'POST', body: request})
}