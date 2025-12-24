# Tech stack

- Vue 3
- Echart Apache
- Vite
- Bootstrap
- pinia

## Penjelasan Arsitektur

### Project Architecture Overview

Project ini menggunakan Vue 3 dengan pendekatan modular & scalable, mengombinasikan:

1. File-based routing
2. Service layer (API abstraction)
3. Pinia state management
4. Layout-based UI architecture

### Assets

Berisi asset statis aplikasi:

1. CSS global
2. Images
3. Icons
4. Fonts

### components

Berisi reusable UI components:

1. Page Header

### layouts

Digunakan untuk konfigurasi navigasi & menu aplikasi.

### pages

Berisi halaman aplikasi berbasis route (file-based routing).

### plugins

Berisi plugin global Vue, seperti:

1. Axios
2. sweetalert
3. casl

### services

Berisi abstraction layer untuk API / HTTP request.

### stores

Menggunakan Pinia sebagai state management.

### validations

Berisi schema validasi yup (form validation).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
