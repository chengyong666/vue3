<template>
  <div>{{ num }}</div>
  <button @click="blocks">弹窗</button>
  <son @clineCkicj="clineCkicj" @numZi="zivlue" :num="num" v-if="flge"></son>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import son from "@/views/son.vue";
export default defineComponent({
  name: "",
  components: {
    son,
  },
  setup() {
    const data = reactive({});
    let num = ref(0);
    let flge = ref(false);
    function zivlue(value: number) {
      console.log(Number(value));
      flge.value = false;
      num.value = Number(value);
    }
    function blocks() {
      flge.value = true;
    }
    function clineCkicj() {
      flge.value = false;
    }
    return {
      num,
      zivlue,
      blocks,
      flge,
      clineCkicj,
      ...toRefs(data),
    };
  },
});
</script>

<style scoped></style>
