import { defineStore } from 'pinia'
import type { LoginUserRequest } from '~/app/contracts/LoginUserRequest'
import type { RegisterUserRequest } from '~/app/contracts/RegisterUserRequest'

export const useAuthStore = defineStore('auth', () => {
    const token = useCookie('authorization_token', {
        maxAge: 3600,
    })

    const authToken = computed(() => token.value ?? '')

    const setToken = (newToken: string) => {
        token.value = newToken
      }
    
    const login = async (request: LoginUserRequest) => {
        try {
            const response = await useLogin(request)

            setToken(response.token)
        } catch (error) {
            console.log(error);
        }
    }

    const register = async (request: RegisterUserRequest) => {
        try {
            const response = await useRegister(request)

            navigateTo('/auth/login')
        }
        catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        try {
            setToken('')
            await useLogout()
        }
        catch (error) {
            console.log(error);
        }
        navigateTo('/auth/login')

    }

    return {
        authToken,
        setToken,
        login,
        register,
        logout
    }
})