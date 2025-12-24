<template>
  <header class="app-header sticky" id="header">
    <!-- Start::main-header-container -->
    <div class="main-header-container container-fluid">
      <!-- Start::header-content-left -->
      <div class="header-content-left">
        <!-- Start::header-element -->
        <div class="header-element">
          <div class="horizontal-logo">
            <router-link to="/" class="header-logo">
              <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
              <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo" />
              <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />
              <img src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark" />
            </router-link>
          </div>
        </div>
        <!-- End::header-element -->

        <!-- Start::header-element -->
        <div class="header-element mx-lg-0 mx-2">
          <a
            aria-label="Hide Sidebar"
            @click="ToggleMenu"
            class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
            data-bs-toggle="sidebar"
            href="javascript:void(0);"
            ><span></span
          ></a>
        </div>
        <!-- End::header-element -->

        <div class="header-element header-search d-md-block d-none">
          <div class="autoComplete_wrapper">
            <!-- Start::header-link -->
            <input
              type="text"
              class="header-search-bar form-control bg-white"
              id="header-search"
              :value="search"
              @input="handleToChange"
              placeholder="Search"
              spellcheck="false"
              autocomplete="off"
              autocapitalize="off"
            />
            <template v-if="showSuggestions">
              <div
                className="custom-card card w-100 search-result position-absolute z-index-9 search-fix border mt-1"
              >
                <div className="card-header">
                  <div className="card-title mb-0 text-break">Search result of {{ search }}</div>
                </div>
                <div className="card-body overflow-auto">
                  <div class="list-group custom-header" Id="autoComplete_list_1">
                    <template v-if="uniqueSuggestions.length > 0">
                      <li
                        id="autoComplete_result_0"
                        class="list-group-item li-Class"
                        v-for="(e, index) in uniqueSuggestions.slice(0, 7)"
                        :key="index"
                      >
                        <router-link
                          :to="`${e.path}/`"
                          class="search-result-item"
                          @click="handleSuggestionClick(e.title)"
                        >
                          {{ e.title }}
                        </router-link>
                      </li>
                    </template>
                    <template v-else>
                      <b class="text-danger">There is no component with this name</b>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <a href="javascript:void(0);" class="header-search-icon border-0">
              <i class="bi bi-search fs-12 mb-1"></i>
            </a>
            <!-- End::header-link -->
          </div>
        </div>
      </div>
      <!-- End::header-content-left -->

      <!-- Start::header-content-right -->
      <ul class="header-content-right">
        <!-- Start::header-element -->
        <li class="header-element d-md-none d-block">
          <a
            href="javascript:void(0);"
            class="header-link"
            data-bs-toggle="modal"
            data-bs-target="#header-responsive-search"
          >
            <!-- Start::header-link-icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <circle cx="112" cy="112" r="80" opacity="0.2" />
              <circle
                cx="112"
                cy="112"
                r="80"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <line
                x1="168.57"
                y1="168.57"
                x2="224"
                y2="224"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
            <!-- End::header-link-icon -->
          </a>
        </li>
        <!-- End::header-element -->

        <!-- Start::header-element -->
        <li class="header-element header-theme-mode">
          <!-- Start::header-link|layout-setting -->
          <a href="javascript:void(0);" class="header-link layout-setting">
            <span class="light-layout" @click="colorthemeFn('dark')">
              <!-- Start::header-link-icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="header-link-icon"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
                  opacity="0.2"
                />
                <path
                  d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
              </svg>
              <!-- End::header-link-icon -->
            </span>
            <span class="dark-layout" @click="colorthemeFn('light')">
              <!-- Start::header-link-icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="header-link-icon"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <circle cx="128" cy="128" r="56" opacity="0.2" />
                <line
                  x1="128"
                  y1="40"
                  x2="128"
                  y2="32"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="64"
                  y1="64"
                  x2="56"
                  y2="56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="64"
                  y1="192"
                  x2="56"
                  y2="200"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="192"
                  y1="64"
                  x2="200"
                  y2="56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="192"
                  y1="192"
                  x2="200"
                  y2="200"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="40"
                  y1="128"
                  x2="32"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="128"
                  y1="216"
                  x2="128"
                  y2="224"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="216"
                  y1="128"
                  x2="224"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
              </svg>
              <!-- End::header-link-icon -->
            </span>
          </a>
          <!-- End::header-link|layout-setting -->
        </li>
        <!-- End::header-element -->

        <!-- Start::header-element -->
        <li class="header-element header-fullscreen">
          <a @click="toggleFullScreen()" href="javascript:void(0);" class="header-link">
            <svg
              v-if="!isFullScreen"
              xmlns="http://www.w3.org/2000/svg"
              class="full-screen-open header-link-icon d-block"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <rect x="48" y="48" width="160" height="160" opacity="0.2"></rect>
              <polyline
                points="168 48 208 48 208 88"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <polyline
                points="88 208 48 208 48 168"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <polyline
                points="208 168 208 208 168 208"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <polyline
                points="48 88 48 48 88 48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
            </svg>
            <svg
              v-if="isFullScreen"
              xmlns="http://www.w3.org/2000/svg"
              class="full-screen-close header-link-icon"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2"></rect>
              <polyline
                points="160 48 208 48 208 96"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <line
                x1="144"
                y1="112"
                x2="208"
                y2="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <polyline
                points="96 208 48 208 48 160"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <line
                x1="112"
                y1="144"
                x2="48"
                y2="208"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
          </a>
          <!-- End::header-link -->
        </li>
        <!-- End::header-element -->

        <!-- Start::header-element -->
        <li class="header-element dropdown">
          <!-- Start::header-link|dropdown-toggle -->
          <a
            href="javascript:void(0);"
            class="header-link dropdown-toggle"
            id="mainHeaderProfile"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <div>
              <img src="/images/faces/12.jpg" alt="img" class="header-link-icon" />
            </div>
          </a>
          <!-- End::header-link|dropdown-toggle -->
          <div
            class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
            aria-labelledby="mainHeaderProfile"
          >
            <div class="p-3 bg-primary text-fixed-white">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 fs-16">Profile</p>
                <a href="javascript:void(0);" class="text-fixed-white"
                  ><i class="ti ti-settings-cog"></i
                ></a>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="p-3">
              <div class="d-flex align-items-start gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-sm bg-primary-transparent avatar-rounded">
                    <img src="/images/faces/12.jpg" alt="" />
                  </span>
                </div>
                <div>
                  <span class="d-block fw-semibold lh-1">{{
                    store.user?.email.split('@')[0] ?? 'User'
                  }}</span>
                  <span class="text-muted fs-12">{{
                    store.user?.email ?? 'User@example.com'
                  }}</span>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <ul class="list-unstyled mb-0">
              <li>
                <button @click.prevent="logout" class="dropdown-item d-flex align-items-center">
                  <i class="ti ti-logout me-2 fs-18"></i> Log Out
                </button>
              </li>
            </ul>
          </div>
        </li>
        <!-- End::header-element -->

        <!-- Start::header-element -->
        <li class="header-element">
          <!-- Start::header-link|switcher-icon -->
          <a
            href="javascript:void(0);"
            class="header-link switcher-icon"
            data-bs-toggle="offcanvas"
            data-bs-target="#switcher-canvas"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <path
                d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                opacity="0.2"
              />
              <circle
                cx="128"
                cy="128"
                r="40"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <path
                d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
          </a>
          <!-- End::header-link|switcher-icon -->
        </li>
        <!-- End::header-element -->
      </ul>
      <!-- End::header-content-right -->
    </div>
    <!-- End::main-header-container -->
  </header>

  <div
    class="modal fade"
    id="header-responsive-search"
    tabindex="-1"
    aria-labelledby="header-responsive-search"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-end-0"
              placeholder="Search Anything ..."
              :value="search"
              @input="handleToChange"
              aria-label="Search Anything ..."
              aria-describedby="button-addon2"
            />
            <template v-if="showSuggestions">
              <div
                className="custom-card card w-100 search-result position-absolute z-index-9 search-fix border mt-15"
              >
                <div className="card-header">
                  <div className="card-title mb-0 text-break">
                    Search result of
                    <b
                      ><u>{{ search }}</u></b
                    >
                  </div>
                </div>
                <div className="card-body overflow-auto">
                  <div class="m-2 list-group" Id="autoComplete_list_1">
                    <template v-if="uniqueSuggestions.length > 0">
                      <li
                        id="autoComplete_result_0"
                        class="list-group-item"
                        v-for="(e, index) in uniqueSuggestions.slice(0, 7)"
                        :key="index"
                      >
                        <router-link
                          :to="`${e.path}/`"
                          class="search-result-item"
                          @click="handleSuggestionClick(suggestion.title)"
                        >
                          {{ e.title }}
                        </router-link>
                      </li>
                    </template>
                    <template v-else>
                      <b class="text-danger">There is no component with this name</b>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <button class="btn btn-primary" type="button" id="button-addon2">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { Tooltip } from 'bootstrap'
import 'vue3-perfect-scrollbar/style.css'
import { switcherStore } from '@/stores/switcher.js'
import MENUITEMS from '@/navigation/index.js'
import { useAuthStore } from '@/stores/auth.store.js'
// import Quantity from '../../UI/quantity.vue'

// Stores
const switcher = switcherStore()
const router = useRouter()

// Refs
const isFullScreen = ref(false)
const search = ref('')
const showSuggestions = ref(false)

// Functions
const colorthemeFn = (value) => {
  localStorage.setItem('vyzorcolortheme', value)
  localStorage.removeItem('vyzorbodyBgRGB') // ❌ Fix: removeItem takes only one argument
  switcher.colorthemeFn(value)
}

const ToggleMenu = () => {
  const html = document.documentElement

  if (window.innerWidth <= 992) {
    const dataToggled = html.getAttribute('data-toggled')
    html.setAttribute('data-toggled', dataToggled === 'open' ? 'close' : 'open')
  } else {
    const menuNavLayoutType = html.getAttribute('data-nav-style')
    const verticalStyleType = html.getAttribute('data-vertical-style')
    const dataToggled = html.getAttribute('data-toggled')

    if (menuNavLayoutType) {
      if (dataToggled) {
        html.removeAttribute('data-toggled')
      } else {
        html.setAttribute('data-toggled', `${menuNavLayoutType}-closed`)
      }
    } else if (verticalStyleType) {
      if (verticalStyleType === 'doublemenu') {
        if (dataToggled === 'double-menu-open' && document.querySelector('.double-menu-active')) {
          html.setAttribute('data-toggled', 'double-menu-close')
        } else if (document.querySelector('.double-menu-active')) {
          html.setAttribute('data-toggled', 'double-menu-open')
        }
      } else {
        if (dataToggled) {
          html.removeAttribute('data-toggled')
        } else {
          const map = {
            closed: 'close-menu-close',
            icontext: 'icon-text-close',
            overlay: 'icon-overlay-close',
            detached: 'detached-close',
          }
          html.setAttribute('data-toggled', map[verticalStyleType] || '')
        }
      }
    }
  }
}

const toggleFullScreen = () => {
  const element = document.documentElement
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    element.requestFullscreen()
  }
}

const fullscreenChanged = () => {
  isFullScreen.value = !!document.fullscreenElement
}

const handleClickOutside = () => {
  showSuggestions.value = false
}

const handleToChange = (event) => {
  const target = event.target
  search.value = target.value
  showSuggestions.value = search.value.length > 0
}

const handleSuggestionClick = (suggestionTitle) => {
  search.value = ''
  showSuggestions.value = false
}

// Computed
const filterSuggestions = computed(() => {
  const getTitlesWithPaths = (menuItems) => {
    const titles = []
    menuItems.forEach((item) => {
      if (item?.path) {
        titles.push({ title: item.title, path: item.path })
      }
      if (Array.isArray(item?.children)) {
        titles.push(...getTitlesWithPaths(item.children))
      }
    })
    return titles
  }
  return getTitlesWithPaths(MENUITEMS)
})

const uniqueSuggestions = computed(() => {
  const searchLower = search.value.toLowerCase()
  const suggestions = filterSuggestions.value.filter((item) =>
    item.title.toLowerCase().includes(searchLower),
  )
  const uniqueTitles = Array.from(new Set(suggestions.map((item) => item.title.toLowerCase())))
  return uniqueTitles.map((title) => suggestions.find((item) => item.title.toLowerCase() === title))
})

// Tooltip lifecycle
let pop = null

onMounted(() => {
  document.addEventListener('fullscreenchange', fullscreenChanged, { passive: true })
  document.body.addEventListener('click', handleClickOutside, { passive: true })
  pop = new Tooltip(document.body, {
    selector: '[data-bs-toggle="tooltip"]',
  })
})

onUnmounted(() => {
  document.body.removeEventListener('click', handleClickOutside)
  document.removeEventListener('fullscreenchange', fullscreenChanged)
  if (pop) pop.dispose()

  const popovers = document.getElementsByClassName('tooltip')
  Array.from(popovers).forEach((el) => el.remove())
})

const loading = ref(false)
const store = useAuthStore()
const logout = () => {
  Promise.resolve().then(() => {
    loading.value = true
    toast.success('Log Out successful!', {
      theme: 'auto',
      icon: true,
      autoClose: true,
      position: 'top-right',
      hideProgressBar: true,
    })

    store.$reset()
    sessionStorage.clear()

    setTimeout(() => {
      loading.value = false
      window.location.href = `/`
    }, 1000)
  })
}
</script>
