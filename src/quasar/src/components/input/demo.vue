<template>
  <div class="q-gutter-y-md">
    <f-input v-model="model" placeholder="placeholder" />
    <f-input v-model="model" :rules="[val => !!val || 'Field is required']" />
    <f-input v-model="model" readonly />
    <f-input v-model="model" disable />
    <f-input type="textarea" v-model="model" />
  </div>
</template>

<script>
import { FInput } from './index';
export default {
  name: 'FInputDemo',
  components: {
    FInput
  },
  data() {
    return {
      model: ''
    };
  }
};
</script>

<style></style>
