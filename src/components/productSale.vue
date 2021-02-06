<template>
  <div class="sale">
    <a-form-model ref="ruleForm" :model="form" :label-col="{span: 4 }" :wrapper-col="{span: 14}">
      <a-form-model-item ref="name" label="商品售价" prop="price" required>
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="价扣价格" prop="price_off" required>
        <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" required prop="inventory">
        <a-input v-model="form.inventory" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="unit">
        <a-input v-model="form.unit" />
      </a-form-model-item>
      <a-form-model-item label="商品图片" prop="images">
        <a-upload :action="'https://mallapi.duyiedu.com/upload/images?appkey='+$store.state.userInfo.appkey" list-type="picture-card" name="avatar" :file-list="fileList" @preview="handlePreview" @change="handleChange">
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </a-form-model-item>
      <a-form-model-item :wrapperCol="{span: 24}">
        <a-button type="primary" @click="handlePrev">上一步</a-button>
        <a-button type="primary" style="margin-left:20px" @click="handleSubmit">提 交</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  props: ['form'],
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
  },
  created() {
    if (this.form.images.length > 0) {
      this.fileList = this.form.images.map((item,index) => {
        return {
          uid: index,
          name: `image${index}.png`,
          status: 'done',
          url: item
        }
      })
    }
  },
  methods: {
    handlePrev() {
      this.$emit('prev')
    },
    handleCancel() {
      this.previewVisible = false;
    },
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {//验证form表单数据是否符合规则
        if (valid) {
          this.$emit('next')
        } else {
          this.$message.error('信息填写完整')
          return false;
        }
      });
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      if (file.status === "done") {
        this.form.images.push(file.response.data.url)
      } else if (file.status === "removed") {
        const url = file.response.data.url;
        console.log(url)
        this.form.images = this.form.images.filter(item => {
          console.log(item)
          return item !== url
        })
      }
      this.fileList = fileList
    }
  }
}
</script>