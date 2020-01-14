let http = 'Http'
let installed = false
export default {
    install(Vue) {
        if (installed) {
            return
        }
        installed = true
        Object.defineProperty(Vue.prototype, 'Http', {
            get() {
                return http
            }
        })
    }
}