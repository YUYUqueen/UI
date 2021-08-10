<template>
  <div class="q-gutter-y-lg column">
    <f-btn-toggle v-model="model" :options="opts" />
    <f-btn-toggle v-model="model" :options="opts" apart />
    <f-btn-toggle v-model="model" disable :options="opts" :width="94" />
    <f-btn-toggle v-model="model" disable :options="opts" apart :width="120" />
  </div>
</template>

<script>
import { FBtnToggle } from './index';
export default {
  name: 'FBtnToggleDemo',
  components: {
    FBtnToggle
  },
  data() {
    return {
      model: null,
      opts: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' }
      ]
    };
  }
};
</script>

<style></style>
