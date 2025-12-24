<template>
  <ParticlesJs />

  <div class="authentication-background">
    <div class="container">
      <div
        class="row justify-content-center align-items-center authentication authentication-basic h-100"
      >
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-9 col-12">
          <div class="card custom-card border-0 my-4">
            <div class="card-body p-5">
              <Form @submit="handleRegister" :validation-schema="schemaLogin()">
                <div class="mb-4">
                  <router-link to="/">
                    <img
                      src="/images/brand-logos/toggle-logo.png"
                      alt="logo"
                      class="desktop-dark"
                    />
                  </router-link>
                </div>
                <div>
                  <h4 class="mb-1 fw-semibold">Sign Up</h4>
                  <p class="mb-4 text-muted fw-normal">Join us by creating a free account !</p>
                </div>
                <div class="row gy-3">
                  <div class="col-xl-12">
                    <label for="email" class="form-label text-default">Email</label>
                    <Field id="email" name="email" v-model="form.email" v-slot="{ meta, field }">
                      <input
                        v-bind="field"
                        type="text"
                        class="form-control"
                        placeholder="Enter Email"
                        :class="{
                          'is-valid': meta.valid && meta.touched,
                          'is-invalid': !meta.valid && meta.touched,
                        }"
                      />
                    </Field>
                    <ErrorMessage name="email" v-slot="{ message }">
                      <div class="invalid-feedback">{{ message }}</div>
                    </ErrorMessage>
                  </div>
                  <div class="col-xl-12 mb-2">
                    <label for="signin-password" class="form-label text-default d-block">
                      Password
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
                </div>
                <div class="d-grid mt-3">
                  <button :disabled="loading" type="submit" class="btn btn-primary">
                    {{ loading ? 'Registering...' : 'Register' }}
                  </button>
                </div>
                <div class="text-center my-3 authentication-barrier">
                  <span class="op-4 fs-13">OR</span>
                </div>
                <div class="text-center mt-3 fw-medium">
                  Already have a account?
                  <router-link to="/login" class="text-primary"> Sign In </router-link>
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
import { useAuthStore } from '@/stores/auth.store'
import schemaLogin from '@/validations/auth'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePage({
  meta: {
    label: 'Register',
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const $app = inject('app')
const store = useAuthStore()

const loading = ref(false)
const form = reactive({
  email: null,
  password: null,
})

const handleRegister = async () => {
  try {
    loading.value = true

    const { status, messages } = await store.signUp(form)
    if (!status) {
      $app.warning(messages || 'Register failed!')
      loading.value = false
      return
    }

    toast.success(messages || 'Register successful! Please check your email', {
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
  } catch (err) {
    loading.value = false
    console.error(err)
    $app.error(err.messages || 'An error occurred during register.')
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
