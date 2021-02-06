import axios from "../axios";

export default {
  productAll(params){
    return axios.get('/products/all',params)
  },
  remove(params){
    return axios.delete('/products/'+params.id)
  },
  add(params){
    return axios.post('/products/add',params)
  },
  edit(params){
    return axios.put('/products/edit',params)
  }
}