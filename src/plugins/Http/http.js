import { send } from './axiosInstance'
import * as api from './api'
function installHttp(api, http) {
  for (const key in api) {
    if (api[key].url) {
      installApi({ ...api[key] }, key, http)
    } else {
      http[key] = installHttp(api[key], {})
    }
  }
  return http
  function installApi(config, key, api) {
    config.method ? null : (config.method = 'get')
    api[key] = function({ data, handleError }) {
      if (config.method === 'get') {
        config.params = data
      } else if (config.method === 'post') {
        config.data = data
      }
      return send(config, handleError)
    }
  }
}

export const http = installHttp(api, {})

http.dashboard['hhh'][1][2]({
  data: {},
  handleError({ error }) {
    console.log(222, error)
  }
})
