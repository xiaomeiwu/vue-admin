import { http } from './http'
let installed = false
export default {
  install(Vue) {
    if (installed) {
      return
    }
    installed = true
    Object.defineProperty(Vue.prototype, '$http', {
      get() {
        return http
      }
    })
  }
}
