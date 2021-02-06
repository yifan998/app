<template>
  <div class="product-detail">
    <a-steps :current="current" class="product-steps">
      <a-step v-for="item in ['填写商品基本信息','填写商品销售信息']" :key="item" :title="item" />
    </a-steps>
    <div class="steps-content">
      <product-detail v-if="current===0" @next="next" :form="form" />
      <product-sale v-else-if="current===1" @prev="prev" @next="next" :form="form" />
    </div>
  </div>
</template>
<script>
import productDetail from "@/components/productDetail";
import productSale from "@/components/productSale";
import api from "@/api/product.js";
export default {
  components: {
    productDetail,
    productSale
  },
  data() {
    return {
      current: 0,
      form: {
        title: '',
        desc: '',
        category: '',
        c_item: [],
        tags: [],
        price: "",
        price_off: '',
        unit: "",
        inventory: "",
        images: []
      },
    };
  },
  methods: {
    next() {
      if (this.current === 1) {
        if (this.$route.params.id) {//修改
          api.edit(this.form).then(() => {
            this.$message.success('修改成功')
            this.$router.push({
              name: "ProductList"
            })
          })
        } else {
          // 新增 提交数据
          api.add(this.form).then(() => {
            this.$message.success('提交成功')
            this.$router.push({
              name: "ProductList"
            })
          })
        }

      } else {
        this.current++;
      }

    },
    prev() {
      this.current--;
    },
  },
  mounted() {
    if (this.$route.params.record) {
      this.form = this.$route.params.record
    }
  }
}
</script>
<style lang='less'>
.product-detail {
  .product-steps {
    width: 50%;
    margin: 20px auto;
  }
}

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>