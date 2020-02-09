import { instance } from './axiosInstance'
function send(config, handleError) {
  return new Promise(function(resolve, reject) {
    instance(config).then(
      res => resolve(res),
      err => {
        handleError ? handleError(err, resolve, reject) : console.log(err)
      }
    )
  })
}
export const http = {
  login({ data, handleError }) {
    return send(
      {
        method: 'get',
        url: '/login',
        params: data
      },
      handleError
    )
  },
  dashabord: {
    user({ data, handleError }) {
      return send(
        {
          method: 'post',
          url: '/user',
          data,
          headers: {
            token: '123456'
          }
        },
        handleError
      )
    }
  }
}
