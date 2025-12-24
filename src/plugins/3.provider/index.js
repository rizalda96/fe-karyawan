import { axios } from "../axios-config"
import '../json-settings'

export default function (app) {

  app.config.globalProperties.$http = axios
  app.config.globalProperties.$app = window.settings
  app.config.globalProperties.$app.toast = window.toast
  app.config.globalProperties.$app.success = window.successAlert
  app.config.globalProperties.$app.confirm = window.confirmAlert
  app.config.globalProperties.$app.error = window.errorAlert
  app.config.globalProperties.$app.warning = window.warningAlert

  app.provide('http', axios)
  app.provide('app', window.settings)
}
