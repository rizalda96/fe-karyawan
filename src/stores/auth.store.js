import { defineStore } from "pinia";
import AuthService from '@/services/auth.service.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    refreshToken: null,
    permissions: [],
  }),
  actions: {
    async signIn(credential) {
      try {
        const response = await AuthService.login(credential)

        const { token, user } = response.data

        this.token = token
        this.permissions = [
          {
            action: 'manage',
            subject: 'all',
          },
        ]
        this.user = user

        return {
          status: !!token,
          messages: 'Login successful!',
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  },
  // getters: {
  // },
  persist: {
    storage: sessionStorage,
    pick: ['token', 'permissions', 'user'],
  },
})

