<script lang="ts" setup>
import type { ValidationError } from 'yup'
import { type LoginUserRequest } from '~/app/contracts/auth/LoginUserRequest'
import { LoginFormValidation } from '~/app/validations/LoginFormValidation'

const authStore = useAuthStore()

const form = ref<LoginUserRequest>({
  username: '',
  password: '',
})
const errors = ref<Record<string, string>>({})

const login = async () => {
  try {
    errors.value = {}

    await LoginFormValidation.validate(form.value, {
      abortEarly: false,
    }).catch((err: ValidationError) => {
      errors.value = useExtractYupValidationErrors(err)
    })

    if (Object.keys(errors.value).length > 0) return

    await authStore.login(form.value)

    navigateTo('/')
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div>
    <div class="flex justify-center items-center h-screen">
      <Card class="w-[400px] p-4">
        <CardHeader>
          <CardTitle>
            <h1 class="text-2xl font-semibold text-center">Login</h1>
          </CardTitle>
        </CardHeader>
        <form
          class="mt-4"
          @submit.prevent="login"
        >
          <div class="mb-4">
            <label for="username">Username</label>
            <Input
              v-model="form.username"
              id="username"
              name="username"
              :class="{
                'ring-1 ring-destructive': errors.username,
              }"
            />
            <small class="text-destructive">{{ errors.username }}</small>
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <Input
              type="password"
              v-model="form.password"
              id="password"
              name="password"
              :class="{
                'ring-1 ring-destructive': errors.password,
              }"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <small class="text-destructive">{{ errors.password }}</small>
          </div>
          <div class="flex justify-between items-center">
            <nuxt-link to="/auth/register"
              >Don't have an account? Register here</nuxt-link
            >
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>
