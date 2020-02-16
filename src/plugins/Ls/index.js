function set(key, value) {
  if (typeof key === 'string') {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      return false
    }
  } else {
    return false
  }
}
function get(key) {
  if (typeof key === 'string') {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
      return window.localStorage.getItem(key)
    }
  } else {
    return null
  }
}
function clear() {
  window.localStorage.clear()
}

const Ls = {
  set,
  get,
  clear
}

let installed = false
export default {
  install(Vue) {
    if (installed) {
      return
    }
    installed = true
    Object.defineProperty(Vue.prototype, '$ls', {
      get() {
        return Ls
      }
    })
  }
}
