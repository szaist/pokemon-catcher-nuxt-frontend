<script lang="ts" setup>
import type { ValidationError } from 'yup'
import type { RegisterUserRequest } from '~/app/contracts/auth/RegisterUserRequest'
import { RegisterFormValidation } from '~/app/validations/RegisterFormValidation'

const authStore = useAuthStore()

const form = ref<RegisterUserRequest>({
  username: '',
  password: '',
  email: '',
  name: '',
})

const errors = ref<Record<string, string>>({})

const register = async () => {
  try {
    errors.value = {}

    await RegisterFormValidation.validate(form.value, {
      abortEarly: false,
    }).catch((err: ValidationError) => {
      errors.value = useExtractYupValidationErrors(err)
    })

    if (Object.keys(errors.value).length > 0) return

    await authStore.register(form.value)

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
            <h1 class="text-2xl font-semibold text-center">Register</h1>
          </CardTitle>
        </CardHeader>
        <form
          class="mt-4"
          @submit.prevent="register"
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
          <div class="mb-4">
            <label for="email">Email</label>
            <Input
              v-model="form.email"
              id="email"
              name="email"
              :class="{
                'ring-1 ring-destructive': errors.email,
              }"
            />
            <small class="text-destructive">{{ errors.email }}</small>
          </div>
          <div class="mb-4">
            <label for="name">Name</label>
            <Input
              v-model="form.name"
              id="name"
              name="name"
              :class="{
                'ring-1 ring-destructive': errors.name,
              }"
            />
            <small class="text-destructive">{{ errors.name }}</small>
          </div>
          <div class="flex justify-between items-center">
            <nuxt-link to="/auth/login"
              >Already have an account? Login here</nuxt-link
            >
            <Button type="submit">Register</Button>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>
