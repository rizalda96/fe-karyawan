<template>
  <ParticlesJs />

  <div class="authentication-background">
    <div class="container">
      <div
        class="row justify-content-center align-items-center authentication authentication-basic h-100"
      >
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8 col-12">
          <div class="card custom-card border-0 my-4">
            <div class="card-body p-5">
              <div class="mb-4">
                <router-link to="/dashboards/sales">
                  <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="desktop-dark" />
                </router-link>
              </div>
              <div>
                <h4 class="mb-1 fw-semibold">Reset Password</h4>
                <p class="mb-4 text-muted fw-normal">Set your new password here.</p>
              </div>
              <Form @submit="handleResetPassword" :validation-schema="schemaForgotPassword()">
                <div class="row gy-3">
                  <div class="col-xl-12">
                    <label for="reset-newpassword" class="form-label text-default">
                      New Password
                    </label>
                    <div class="position-relative">
                      <Field
                        id="password"
                        name="password"
                        v-model="form.password"
                        v-slot="{ meta, field }"
                      >
                        <input
                          v-bind="field"
                          type="password"
                          class="form-control"
                          placeholder="Enter Password"
                          :class="{
                            'is-valid': meta.valid && meta.touched,
                            'is-invalid': !meta.valid && meta.touched,
                          }"
                        />
                      </Field>
                      <ErrorMessage name="password" v-slot="{ message }">
                        <div class="invalid-feedback">{{ message }}</div>
                      </ErrorMessage>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <label for="reset-confirmpassword" class="form-label text-default">
                      Confirm Password
                    </label>
                    <div class="position-relative">
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        v-model="form.confirmPassword"
                        v-slot="{ meta, field }"
                      >
                        <input
                          v-bind="field"
                          type="password"
                          class="form-control"
                          placeholder="Enter Confirm Password"
                          :class="{
                            'is-valid': meta.valid && meta.touched,
                            'is-invalid': !meta.valid && meta.touched,
                          }"
                        />
                      </Field>
                      <ErrorMessage name="confirmPassword" v-slot="{ message }">
                        <div class="invalid-feedback">{{ message }}</div>
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div class="d-grid mt-3">
                  <!-- <router-link to="/dashboards/sales" class="btn btn-primary"
                    >Reset Password</router-link
                  > -->
                  <button :disabled="loading" type="submit" class="btn btn-primary">
                    {{ loading ? 'Sending...' : 'Reset Password' }}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import ParticlesJs from '@/common/reuseble-plugin/particles-js.vue'
import { schemaForgotPassword } from '@/validations/auth'
import { useAuthStore } from '@/stores/auth.store'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePage({
  props: true,
  meta: {
    label: 'Reset Password',
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const props = defineProps({
  token: {
    type: String,
  },
})

const $app = inject('app')
const store = useAuthStore()

const loading = ref(false)
const form = reactive({
  password: null,
  confirmPassword: null,
})

const handleResetPassword = async () => {
  loading.value = true

  const response = await store.resetPassword(props.token, form)

  if (!response.status && !response.success) {
    loading.value = false
    return $app.warning(response.message || 'Reset password failed!')
  }

  toast.success('Reset password successful!', {
    theme: 'auto',
    icon: true,
    autoClose: true,
    position: 'top-right',
    hideProgressBar: true,
  })

  setTimeout(() => {
    loading.value = true
    window.location.href = `/`
  }, 1000)
}
</script>

<style scoped>
/* Add your styles here */
</style>
