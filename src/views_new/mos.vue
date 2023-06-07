<template></template>

<script  lang="ts" setup>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
</style>
