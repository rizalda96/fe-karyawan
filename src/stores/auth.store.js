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
        const { data } = await AuthService.login(credential)

        this.token = data.data.token
        this.permissions = [
          {
            action: 'manage',
            subject: 'all',
          },
          // {
          //   action: 'read',
          //   subject: 'Second Page',
          // },
          // // {
          // //   action: 'read',
          // //   subject: 'Third Page',
          // // },
          // {
          //   action: 'read',
          //   subject: 'Fourth Page',
          // }
        ]
        return data
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
    pick: ['token', 'permissions'],
  },
})

