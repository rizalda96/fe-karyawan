import sweetalert2 from 'sweetalert2'

window.swal = sweetalert2

window.toast = window.swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  theme: 'dark'
})

window.successAlert = function successAlert(text, icon = "success", title = "Success") {
  return window.swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light text-white',
      denyButton: 'btn btn-danger me-2 waves-effect waves-light text-white',
      cancelButton: 'btn btn-secondary me-2 waves-effect waves-light text-white',
    },
  })
}

window.warningAlert = function warningAlert(text, icon = "warning", title = "Warning") {
  return window.swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light text-white',
      denyButton: 'btn btn-danger me-2 waves-effect waves-light text-white',
      cancelButton: 'btn btn-secondary me-2 waves-effect waves-light text-white',
    },
  })
}

window.errorAlert = function errorAlert(text, icon = "error", title = "Ooppss!") {
  return window.swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light text-white',
      denyButton: 'btn btn-danger me-2 waves-effect waves-light text-white',
      cancelButton: 'btn btn-secondary me-2 waves-effect waves-light text-white',
    },
  })
}

window.confirmAlert = function confirmAlert(options) {
  const defaults = {
    icon: "info",
    title: "Confirm",
    text: "Are you sure?",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    confirmButtonText: "Confirm",
    showLoaderOnConfirm: true,
    preConfirm: null,
    customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light text-white',
      denyButton: 'btn btn-danger me-2 waves-effect waves-light text-white',
      cancelButton: 'btn btn-secondary me-2 waves-effect waves-light text-white',
    },
  }

  let settings = Object.assign(defaults, options)

  return window.swal.fire({
    icon: settings.icon,
    title: settings.title,
    text: settings.text,
    showCancelButton: settings.showCancelButton,
    cancelButtonText: settings.cancelButtonText,
    confirmButtonText: settings.confirmButtonText,
    customClass: settings.customClass,
    showLoaderOnConfirm: settings.showLoaderOnConfirm,
    preConfirm: settings.preConfirm,
    allowOutsideClick: () => !window.swal.isLoading(),
  })
}
