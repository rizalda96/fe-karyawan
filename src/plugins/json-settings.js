let env = import.meta.env
let jsonSettings = {
  app_name: env.VITE_USER_APP_NAME,
  is_local: env.VITE_USER_APP_NAME != 'production' ? true : false,
  api_url: env.VITE_USER_API,
  user: null,
}

window.settings = jsonSettings ? jsonSettings : {}
export { jsonSettings }
