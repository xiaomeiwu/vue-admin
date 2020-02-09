import axios from 'axios'
import { baseURL, headers } from './config'

const instance = axios.create({
  baseURL,
  headers
})
export { instance }
