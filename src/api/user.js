import axios from "../axios.js";
export default {
  login(params) {
    return axios.post('/passport/login', params)
  },
  register(params) {
    return axios.post('/passport/logon', params)
  },
  getCode(email) {
    return axios.post('/passport/getCode', { email })
  },
  findBack(params){
    return axios.post('/passport/findBack', params)
  }
}