import { axios } from '@/plugins/axios-config'
import { jsonSettings } from '@/plugins/json-settings'

export default class BaseService {
  constructor() {
    this.$http = axios
    this.$app = jsonSettings
  }
}
