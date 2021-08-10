<template>
  <div class="q-gutter-lg">
    <f-btn label="主按钮" />
    <f-btn label="主按钮" disable />
    <f-btn label="线性按钮" liner />
    <f-btn label="线性按钮" liner disable />
    <f-btn label="常显操作" func />
    <f-btn label="常显操作" func disable />
    <f-btn label="虚线按钮" dash />
    <f-btn label="虚线按钮" dash disable />
    <f-btn label="文字按钮" font />
    <f-btn label="文字按钮" font disable />
    <f-btn label="文字按钮" fontDark />
    <f-btn label="文字按钮" fontDark disable />
    <f-btn label="主按钮" small />
    <f-btn label="主按钮" small disable />
    <f-btn label="线性按钮" small liner />
    <f-btn label="线性按钮" small liner disable />
    <f-btn label="圆形" round />
    <f-btn label="圆形" round disable />
  </div>
</template>

<script>
import { FBtn } from './index.js';
export default {
  name: 'FBtnDemo',
  components: { FBtn }
};
</script>

<style></style>
