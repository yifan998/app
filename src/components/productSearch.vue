<template>
  <a-form-model layout="inline" :model="searchForm"  @submit.native.prevent>
    <a-form-model-item label="搜索关键字">
      <a-input v-model="searchForm.searchWord" placeholder="搜索关键字">
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="商品类目">
      <a-select :allowClear='true' v-model="searchForm.category" show-search placeholder="选择商品类目" style="width: 200px">
        <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">
          {{c.name}}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit" @click="handleClick">
        搜索
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>

export default {
  props: {
    categoryList: Array
  },
  data() {
    return {
      searchForm: {
        searchWord:'',
        category:''
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('submit',this.searchForm)
    },
  },
};
</script>
<style>
.ant-form {
  padding: 0 20px;
}
</style>