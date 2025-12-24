import * as Svgicons from '@/navigation/menusvg-icons.js'

export default [
  {
    path: '/',
    title: 'Dashboard',
    icon: Svgicons.Dashboardicon,
    type: 'link',
    active: false,
    dirchange: false,
    action: 'read',
    subject: 'Dashboard',
  },
  {
    path: '/karyawan',
    title: 'Karyawan',
    icon: Svgicons.Applicationicon,
    type: 'link',
    active: false,
    dirchange: false,
    action: 'read',
    subject: 'Karyawan',
  },
]
