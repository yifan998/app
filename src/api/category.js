import axios from '@/axios'
export default {
  categoryList(params){
    return axios.get('category/all',params)
  },
  addCategory(params) {
    return axios.post('/category/add', params);
  },
  editCategory(params) {
    return axios.put('/category/edit', params);
  },
  deleteCategory(params) {
    const { id } = params;
    return axios.delete(`/category/${id}`);
  },
}