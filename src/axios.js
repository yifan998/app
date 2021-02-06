import axios from "axios"
import store from './store/index'
const instance = axios.create({
  baseURL:" https://mallapi.duyiedu.com/"
});
instance.interceptors.request.use(config=>{
  if(config.url.includes('/passport')){
    return config
  }else{
    return {
      ...config,
      params:{
        ...config.params,
        appkey:store.state.userInfo.appkey
      }
    }
  }
});
instance.interceptors.response.use(response=>{
  if(response.data.status==="fail"){
    return Promise.reject(response.data.msg)
  }else{
    return response.data.data
  }
})
export default instance