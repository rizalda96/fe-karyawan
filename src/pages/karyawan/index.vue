<template>
  <Pageheader :propData="dataToPass" />
  <div class="row">
    <div class="col-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Karyawan List</div>
          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary-gradient rounded-pill btn-wave"
              @click="handleAdd"
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-secondary-gradient rounded-pill btn-wave"
              @click="handleRefresh"
            >
              Refresh
            </button>
            <div>
              <input
                class="form-control"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
                v-model="searchText"
                @input="onSearch"
              />
            </div>
          </div>
        </div>
        <div class="card-body px-3">
          <vue3-datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :totalRows="total_rows"
            isServerMode
            :pageSize="params.pagesize"
            sortable
            :sortColumn="params.sort_column"
            :sortDirection="params.sort_direction"
            @change="changeServer"
          >
            <template #rowaction="{ value }">
              <div class="d-flex gap-2">
                <button
                  type="button"
                  class="btn btn-warning-gradient rounded-pill btn-wave"
                  @click="handleEdit(value.id)"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger-gradient rounded-pill btn-wave"
                  @click="handleDelete(value.id)"
                >
                  Delete
                </button>
              </div>
            </template>
          </vue3-datatable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'
import Pageheader from '@/components/shared/pageheader/pageheader.vue'

definePage({
  meta: {
    label: 'Karyawan',
    action: 'read',
    subject: 'Karyawan',
  },
})

const $app = inject('app')
const $http = inject('http')

const router = useRouter()

const dataToPass = {
  title: 'Karyawan',
  currentpage: 'List',
  activepage: 'Karyawan List',
}

const searchText = ref(null)
const loading = ref(false)
const total_rows = ref(0)
const params = reactive({
  page: 1,
  limit: 10,
  sort_by: 'created_at',
  sort_direction: 'desc',
})
const rows = ref(null)
const cols =
  ref([
    { field: 'email', title: 'Email' },
    { field: 'name', title: 'Nama' },
    { field: 'tanggal_lahir', title: 'Tanggal Lahir' },
    { field: 'jenis_kelamin', title: 'Jenis Kelamin' },
    { field: 'phone', title: 'Telp' },
    { field: 'kota', title: 'Kota' },
    { field: 'alamat', title: 'Alamat' },
    { field: 'rowaction', title: 'Action' },
  ]) || []

onMounted(() => {
  getKaryawan()
})

const handleRefresh = () => {
  getKaryawan()
}

const getKaryawan = async () => {
  try {
    loading.value = true

    const { data } = await $http.get(`${$app.api_url}karyawan`, {
      params: params,
    })

    rows.value = data?.rows
    total_rows.value = data?.meta?.totalItems
  } catch {}

  loading.value = false
}
const changeServer = (data) => {
  params.page = data.current_page
  params.limit = data.pagesize
  params.sort_by = data.sort_column
  params.sort_direction = data.sort_direction
  params.search = data.search !== '' ? data.search : null

  setTimeout(() => {
    getKaryawan()
  }, 500)
}

const onSearch = (e) => {
  changeServer({
    current_page: 1,
    sort_column: params.sort_by,
    pagesize: params.limit,
    sort_direction: params.sort_direction,
    search: searchText.value,
  })
  // setTimeout(() => {
  // }, 550)
}

const handleAdd = () => {
  router.push({
    name: 'karyawan-add',
  })
}

const handleEdit = (id) => {
  router.push({
    name: 'karyawan-id-edit',
    params: {
      id: id,
    },
  })
}

const handleDelete = (id) => {
  $app
    .confirm({
      text: 'Apakah anda yakin akan menghapus data ?',
      preConfirm: () => {
        return $http.delete(`${$app.api_url}karyawan/${id}/delete`).then((response) => {
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
        $app.success('Data berhasil dihapus!').then((response) => {
          changeServer({
            current_page: 1,
            sort_column: params.sort_by,
            pagesize: params.limit,
            sort_direction: params.sort_direction,
            search: searchText.value,
          })
        })
      }
    })
    .catch((err) => {
      $app.error(err)
    })
}
</script>

<style lang="scss">
[data-theme-mode='dark'] {
  .bh-datatable {
    thead {
      tr {
        background-color: rgba(255, 255, 255, 0.05);
        color: white;
      }
    }

    .bh-table-responsive table.bh-table-striped tbody tr {
      background-color: rgba(255, 255, 255, 0.05);
      color: white;
    }

    .bh-pagination-info {
      span {
        color: #fff !important;
      }
    }
  }
}
</style>
