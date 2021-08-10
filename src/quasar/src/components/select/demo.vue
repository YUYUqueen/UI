<template>
  <div>
    <f-select v-model="model" :options="options" label="Standard" />
  </div>
</template>

<script>
import { FSelect } from './index';
export default {
  name: 'FSelectDemo',
  components: {
    FSelect
  },
  data() {
    return {
      model: null,
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
    };
  }
};
</script>

<style></style>
