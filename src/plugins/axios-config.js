import axios from 'axios'

/**
 * Axios config
 */
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.defaults.baseURL = import.meta.env.VITE_USER_API || '/api'

axios.interceptors.response.use(
  (response) => {
    catchSupportId(response)

    return response
  },
  (error) => {
    return Promise.reject(responseValidate(error))
  },
)

function responseValidate(error) {
  if (!error.response) {
    return 'server not responding'
  }
  if (error.response.status == 401) {
    return 'API Token Expire'
  }
  if (error.response.status == 403) {
    return 'Access Denied'
  }

  return error
}

function catchSupportId({ status, data }) {
  if (
    status == '200' &&
    JSON.stringify(data).toLowerCase().includes('the requested url was rejected')
  ) {
    const { title, text } = strippingSupportIdResponse(data)

    window.swal.fire(title, text, 'error')
  }
}

function strippingSupportIdResponse(html) {
  let title = 'Request Rejected',
    tail = '[Go Back]',
    temp = document.createElement('div')

  temp.innerHTML = html
  let cleanText = temp.textContent || temp.innerText

  return {
    title,
    text: cleanText
      .replace(title, '')
      .replace(tail, '')
      .split('.')
      .map((text, idx, row) =>
        idx == row.length - 1
          ? `<br><br><strong style="color: #0a6ebd">${text}</strong>`
          : `${text}. `,
      )
      .join(''),
  }
}

let auth = JSON.parse(sessionStorage.getItem('auth'))

if (auth) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`
}

export { axios }
