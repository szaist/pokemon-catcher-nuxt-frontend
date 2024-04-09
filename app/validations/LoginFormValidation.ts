import { object, string} from 'yup';

export const LoginFormValidation = object().shape({
    username: string().required(),
    password: string().required()
})