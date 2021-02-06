<template>
  <div class="detail">
    <a-form-model ref="ruleForm" :model="form" :label-col="{span: 4 }" :wrapper-col="{span: 14}">
      <a-form-model-item ref="name" label="标题" prop="title" required>
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="商品描述" prop="desc" required>
        <a-input v-model="form.desc" />
      </a-form-model-item>
      <a-form-model-item label="商品类目" required prop="category">
        <a-select v-model="form.category" placeholder="选择商品类别" @change="changeCategory">
          <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">
            {{ c.name }}
          </a-select-option>
        </a-select>
        <a-select v-model="form.c_item" placeholder="选择商品子类别">
          <a-select-option v-for="c in categoryItems" :key="c" :value="c">
            {{ c }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="商品标签" prop="tags">
        <a-select mode="tags" v-model="form.tags" default-value="包邮,最晚次日达">
          <a-select-option value="包邮,最晚次日达">
            包邮,最晚次日达
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="handleClick">下一步</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import api from "@/api/category";
export default {
  data() {
    return {
      categoryList: [],
      categoryItems: []
    }
  },
  props:['form'],
  methods: {
    handleClick() {
      this.$refs.ruleForm.validate(valid => {//验证form表单数据是否符合规则
        if (valid) {
          this.$emit('next')
        } else {
         this.$message.error('信息填写完整')
          return false;
        }
      });
      
    },
    changeCategory(id) {
      console.log(this.categoryList)
      this.categoryItems = this.categoryList[id-1].c_items//给子类目赋值
    }
  },
  created() {
    api.categoryList().then(res => {
      this.categoryList = res.data
    })
  }
};
</script>
<style scoped>
</style>
