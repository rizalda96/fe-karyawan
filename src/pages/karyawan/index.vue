<template>
  <Pageheader :propData="dataToPass" />
  <div class="row">
    <div class="col-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Recent Invoices</div>
          <div class="d-flex flex-wrap gap-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Filters<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
            <div>
              <input
                class="form-control"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
          </div>
        </div>
        <div class="card-body p-0"></div>
        <div class="card-footer">
          <div class="d-flex align-items-center flex-wrap">
            <div>Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots"></i>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Pageheader from '@/components/shared/pageheader/pageheader.vue'
import TableComponent from '@/components/shared/table-component.vue'

definePage({
  meta: {
    label: 'Karyawan',
    action: 'read',
    subject: 'Karyawan',
  },
})

const dataToPass = {
  title: 'Karyawan',
  currentpage: 'List',
  activepage: 'Karyawan List',
}
</script>

<style lang="scss" scoped></style>
