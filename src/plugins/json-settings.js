let env = import.meta.env
let jsonSettings = {
  app_name: env.VITE_USER_APP_NAME,
  is_local: env.VITE_USER_APP_NAME != 'production' ? true : false,
  api_url: env.VITE_USER_API,
  api_url_dotnet: env.VITE_USER_API_DOTNET,
}

window.settings = jsonSettings ? jsonSettings : {}
export { jsonSettings }
