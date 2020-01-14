let ls = 'Ls'
let installed = false
export default {
    install(Vue) {
        if (installed) {
            return
        }
        installed = true
        Object.defineProperty(Vue.prototype, 'Ls', {
            get() {
                return ls
            }
        })
    }
}