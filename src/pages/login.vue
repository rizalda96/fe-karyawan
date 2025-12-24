<template>
  <ParticlesJs />

  <div class="container">
    <div
      class="row justify-content-center align-items-center authentication authentication-basic h-100"
    >
      <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8 col-12">
        <div class="card custom-card border-0 my-4">
          <div class="card-body p-5">
            <Form @submit="handleLogin" :validation-schema="schemaLogin()">
              <div class="mb-4">
                <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="desktop-dark" />
              </div>
              <div>
                <h4 class="mb-1 fw-semibold">Hi,Welcome back!</h4>
                <p class="mb-4 text-muted fw-normal">Please enter your credentials</p>
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
                  <div class="mt-3">
                    <div class="form-check custom-login">
                      <router-link
                        to="/forget-password"
                        class="float-end link-danger fw-medium fs-12"
                      >
                        Forget password ?
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-grid mt-2">
                <button :disabled="loading" type="submit" class="btn btn-primary">
                  {{ loading ? 'Logging in...' : 'Sign In' }}
                </button>
              </div>

              <div class="text-center my-3 authentication-barrier">
                <span class="op-4 fs-13">OR</span>
              </div>

              <div class="text-center mt-3 fw-medium">
                Dont have an account?
                <router-link to="/register" class="text-primary"> Register Here </router-link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useAuthStore } from '@/stores/auth.store'
import schemaLogin from '@/validations/auth'
import ParticlesJs from '@common/reuseble-plugin/particles-js.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePage({
  meta: {
    label: 'Login',
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const store = useAuthStore()
const router = useRouter()

const $app = inject('app')

const loading = ref(false)
const form = reactive({
  email: null,
  password: null,
})

onMounted(() => {
  if (localStorage.getItem('visited') === 'true') {
    setBodyClass('add')
  } else {
    setBodyClass('add')
    localStorage.setItem('visited', 'true')
  }

  router.beforeEach(() => {
    setBodyClass('remove')
  })

  const handleBeforeUnload = () => {
    setBodyClass('remove')
    localStorage.removeItem('visited')
  }

  window.addEventListener('beforeunload', handleBeforeUnload, {
    passive: true,
  })

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
    setBodyClass('remove')
  }
})

const handleLogin = async () => {
  try {
    loading.value = true

    const { status, messages } = await store.signIn(form)
    if (!status) return $app.warning(messages || 'Login failed!')

    toast.success(messages || 'Login successful!', {
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
    $app.error(err.messages || 'An error occurred during login.')
  }
}

const setBodyClass = (action) => {
  if (action === 'add') {
    document.body.classList.add('authentication-background')
  } else {
    document.body.classList.remove('authentication-background')
  }
}
</script>

<style lang="scss" scoped></style>
