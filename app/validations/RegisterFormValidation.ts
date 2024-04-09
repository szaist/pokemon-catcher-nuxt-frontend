import { object, string } from 'yup'

export const RegisterFormValidation = object().shape({
    username: string().required(),
    password: string().required(),
    email: string().email().required(),
    name: string(),
})