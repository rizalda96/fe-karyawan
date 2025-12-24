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
    async signUp(credential) {
      try {
        const response = await AuthService.register(credential)
        return {
          status: response.status >= 200 && response.status < 300,
          messages: response.data.message,
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async verifyEmail(token, code) {
      try {
        const response = await AuthService.verifyEmail(token, code);

        return {
          success: response.status >= 200 && response.status < 300,
          message: response.data.message,
        };

      } catch (error) {
        if (error.response) {
          return {
            success: false,
            status: error.response.status,
            message: error.response.data?.message || 'Terjadi kesalahan',
          };
        }

        return {
          success: false,
          message: error || 'Server tidak dapat dihubungi',
        };
      }
    },
    async forgetPassword(email) {
      try {
        const response = await AuthService.forgetPassword(email);

        return {
          success: response.status >= 200 && response.status < 300,
          message: response.data.message,
        };

      } catch (error) {
        if (error.response) {
          return {
            success: false,
            status: error.response.status,
            message: error.response.data?.message || 'Terjadi kesalahan',
          };
        }

        return {
          success: false,
          message: error || 'Server tidak dapat dihubungi',
        };
      }
    },
    async resetPassword(token, credential) {
      try {
        const response = await AuthService.resetPassword(token, credential);

        return {
          success: response.status >= 200 && response.status < 300,
          message: response.data.message,
        };

      } catch (error) {
        if (error.response) {
          return {
            success: false,
            status: error.response.status,
            message: error.response.data?.message || 'Terjadi kesalahan',
          };
        }

        return {
          success: false,
          message: error || 'Server tidak dapat dihubungi',
        };
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

