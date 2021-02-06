<template>
  <div class="product-list">
    <!-- 搜索列表 -->
    <product-search :categoryList='categoryList' @submit="searchSubmit" />
    <a-button class="product-add-btn">
      <router-link :to="{name:'ProductAdd'}">添加商品</router-link>
    </a-button>
    <!-- 商品列表 -->
    <product-table :productList="productList" :pagination="page" @pageChange="pageChange" @edit="productEdit" @remove="productRomve" />
  </div>
</template>
<script>
import productSearch from "@/components/productSearch.vue";
import productTable from "@/components/productTable.vue";
import Capi from '@/api/category.js'
import Papi from '@/api/product.js'
export default {
  data() {
    return {
      searchForm: {},
      categoryList: [],
      productList: [],
      page: { //分页信息
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1
      },
      categoryObj: {},//类名id与name映射
    }
  },
  components: {
    productSearch,
    productTable
  },
  async created() {
    await Capi.categoryList().then(res => {
      this.categoryList = res.data;
      res.data.forEach(item => {
        this.categoryObj[item.id] = item.name
      })
    });
    this.getTableData();
  },

  methods: {
    pageChange(page) {
      this.page = page;
      this.getTableData();
    },//页码改变事件
    searchSubmit(form) {//搜索按钮
      this.searchForm = form;
      this.getTableData()
    },
    getTableData() {
      Papi.productAll({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm
      }).then(res => {
        this.page.total = res.total
        this.productList = res.data.map(item => {
          return {
            ...item,
            categoryName: this.categoryObj[item.category]
          }
        })
      })
    },
    productEdit(record) {
      this.$router.push({
        name: "ProductEdit",
        params: {
          id: record.id,
          record,
        }
      })
      console.log(record)
    },
    productRomve(record) {
      this.$confirm({
        title: "确认删除",
        content: `确认删除商品标题为${record.title}吗？`,
        onOk:()=>{
          // console.log(this)
          Papi.remove({ id: record.id }).then(() => this.getTableData())
        },
        cancelText: '取消',
      });
    }
  }
}
</script>
<style lang='less'>
.product-list {
  position: relative;
  .product-add-btn {
    position: absolute;
    top: 4px;
    right: 10px;
  }
}
</style>