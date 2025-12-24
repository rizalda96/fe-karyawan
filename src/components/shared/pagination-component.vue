<template>
  <nav aria-label="Page navigation" class="pagination-style-2">
    <ul class="pagination mb-0 flex-wrap justify-content-end">
      <!-- Prev -->
      <li class="page-item" :class="{ disabled: page_number === 1 }">
        <a class="page-link" href="javascript:void(0);" @click="goToPage(page_number - 1)">
          Prev
        </a>
      </li>

      <!-- Page numbers -->
      <li
        v-for="(p, index) in pages"
        :key="index"
        class="page-item"
        :class="{ active: p === page_number, disabled: p === '...' }"
      >
        <a class="page-link" href="javascript:void(0);" @click="goToPage(p)">
          <span v-if="p === '...'">
            <i class="bi bi-three-dots"></i>
          </span>
          <span v-else>{{ p }}</span>
        </a>
      </li>

      <!-- Next -->
      <li class="page-item" :class="{ disabled: page_number === totalPages }">
        <a
          class="page-link text-primary"
          href="javascript:void(0);"
          @click="goToPage(page_number + 1)"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalData: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  page_number: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:page_number'])

/* total halaman */
const totalPages = computed(() => {
  return Math.ceil(props.totalData / props.pageSize)
})

const pages = computed(() => {
  const total = totalPages.value
  const current = props.page_number
  const result = []

  if (total <= 1) return result

  // always show first page
  result.push(1)

  let start = Math.max(2, current - 1)
  let end = Math.min(total - 1, current + 1)

  // if there's gap after first page
  if (start > 2) {
    result.push('...')
  }

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  // if there's gap before last page
  if (end < total - 1) {
    result.push('...')
  }

  // always show last page if > 1
  if (total > 1) {
    result.push(total)
  }

  return result
})

const goToPage = (page) => {
  if (page === '...') return
  emit('update:page_number', page)
}
</script>
