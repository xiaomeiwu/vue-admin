import axios from 'axios'
import { baseURL, headers } from './config'

const instance = axios.create({
  baseURL,
  headers
})

instance.interceptors.request.use(config => {
  console.log(config)
  config.headers.token = '123456'
  return config
})

instance.interceptors.response.use(response => {
  console.log(response)
  return response
})

function send(config, handleError) {
  return new Promise(function(resolve, reject) {
    instance(config).then(
      res => resolve(res),
      error => {
        handleError
          ? handleError({ resolve, reject, error })
          : catchError(error)
        function catchError(error) {
          resolve()
          console.log(error)
        }
      }
    )
  })
}
export { instance, send }
