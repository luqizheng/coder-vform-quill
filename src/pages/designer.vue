<template>
    <div>
      <v-form-designer ref="vFormRef" />
  
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from "vue";
  import { ElMessage,ElButton } from "element-plus";
  import formDemo from "./demo.json";
  
  /* 注意：formJson是指表单设计器导出的json，此处演示的formJson只是一个空白表单json！！ */
  console.log(formDemo);
  const formJson = reactive(formDemo);
  const optionData = reactive({});
  const vFormRef = ref(null);
  const formData = ref(null);
  const submitForm = () => {
    vFormRef.value
      .getFormData()
      .then((formData) => {
        // Form Validation OK
        alert(JSON.stringify(formData));
      })
      .catch((error) => {
        // Form Validation failed
        ElMessage.error(error);
      });
  };
  
  onMounted(() => {
    vFormRef.value.setFormJson(formJson);
  });
  </script>
  