<template>
  <Pageheader :propData="dataToPass" />

  <Form @submit="handleAdd" class="mb-3">
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
      <div class="col-xl-12">
        <label for="name" class="form-label text-default">Nama</label>
        <Field id="name" name="name" v-model="form.name" v-slot="{ meta, field }">
          <input
            v-bind="field"
            type="text"
            class="form-control"
            placeholder="Enter Name"
            :class="{
              'is-valid': meta.valid && meta.touched,
              'is-invalid': !meta.valid && meta.touched,
            }"
          />
        </Field>
        <ErrorMessage name="name" v-slot="{ message }">
          <div class="invalid-feedback">{{ message }}</div>
        </ErrorMessage>
      </div>
      <div class="col-xl-12">
        <label for="phone" class="form-label text-default">Phone</label>
        <Field id="phone" name="phone" v-model="form.phone" v-slot="{ meta, field }">
          <input
            v-bind="field"
            type="text"
            class="form-control"
            placeholder="Enter Phone"
            v-maska="'#############'"
            :class="{
              'is-valid': meta.valid && meta.touched,
              'is-invalid': !meta.valid && meta.touched,
            }"
          />
        </Field>
        <ErrorMessage name="phone" v-slot="{ message }">
          <div class="invalid-feedback">{{ message }}</div>
        </ErrorMessage>
      </div>
      <div class="col-xl-12">
        <label for="jenis_kelamin" class="form-label text-default">Jenis Kelamin</label>
        <Field
          id="jenis_kelamin"
          name="jenis_kelamin"
          v-model="form.jenis_kelamin"
          v-slot="{ meta, field }"
        >
          <!-- <textarea
            v-bind="field"
            rows="5"
            class="form-control"
            placeholder="Enter Alamat"
            :class="{
              'is-valid': meta.valid && meta.touched,
              'is-invalid': !meta.valid && meta.touched,
            }"
          /> -->
          <select
            v-bind="field"
            class="form-select"
            :class="{
              'is-valid': meta.valid && meta.touched,
              'is-invalid': !meta.valid && meta.touched,
            }"
            v-model="form.jenis_kelamin"
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </Field>
        <ErrorMessage name="alamat" v-slot="{ message }">
          <div class="invalid-feedback">{{ message }}</div>
        </ErrorMessage>
      </div>
      <div class="col-xl-12">
        <label for="alamat" class="form-label text-default">Alamat</label>
        <Field id="alamat" name="alamat" v-model="form.alamat" v-slot="{ meta, field }">
          <textarea
            v-bind="field"
            rows="5"
            class="form-control"
            placeholder="Enter Alamat"
            :class="{
              'is-valid': meta.valid && meta.touched,
              'is-invalid': !meta.valid && meta.touched,
            }"
          />
        </Field>
        <ErrorMessage name="alamat" v-slot="{ message }">
          <div class="invalid-feedback">{{ message }}</div>
        </ErrorMessage>
      </div>
    </div>

    <div class="d-flex gap-2 mt-3">
      <button :disabled="loading" type="button" class="btn btn-danger" @click="$router.back">
        Back
      </button>
      <button :disabled="loading" type="submit" class="btn btn-primary">
        {{ loading ? 'Submitting...' : 'Submit' }}
      </button>
    </div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import Pageheader from '@/components/shared/pageheader/pageheader.vue'

definePage({
  meta: {
    label: 'Add Karyawan',
    action: 'create',
    subject: 'Karyawan',
  },
})

const dataToPass = {
  title: 'Karyawan',
  currentpage: 'Add',
  activepage: 'Karyawan Form',
}

const $app = inject('app')
const $http = inject('http')

const router = useRouter()

const loading = ref(false)

const form = reactive({
  email: null,
  name: null,
  phone: null,
  jenis_kelamin: null,
  alamat: null,
})

const handleAdd = () => {
  $app
    .confirm({
      text: 'Apakah data sudah sesuai ?',

      preConfirm: () => {
        return $http.post(`${$app.api_url}karyawan/create`, form).then((response) => {
          if (response.status > 300) {
            let errors = response.data.message
            throw new Error(errors)
          } else {
            return true
          }
        })
      },
    })
    .then((result) => {
      if (result.isDismissed) return
      if (result.value) {
        $app.success('Data berhasil ditambahkan!').then((response) => {
          router.push({
            name: 'karyawan',
          })
        })
      }
    })
    .catch((err) => {
      $app.error(err)
    })
}
</script>

<style lang="scss" scoped>
//
</style>
