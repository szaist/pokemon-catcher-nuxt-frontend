import type { RegisterUserRequest } from "~/app/contracts/RegisterUserRequest"

export const useRegister = async (request: RegisterUserRequest): Promise<void> => {
    return await usePublicApiFetch('/auth/register', {method: 'POST', body: request})
}