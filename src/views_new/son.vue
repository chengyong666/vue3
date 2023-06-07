<template>
  <div class="bg">
    <div class="bg_2">
      <div class="title" @click="clineCkicj">关闭</div>
      <input type="number" v-model="num" />
      双倍数量：{{ nums }}
      <div class="clone" @click="cloneClick">清空</div>
      <div class="querne" @click="queren">确认</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, inject, defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  props: ["num"],

  setup(props, context) {
    let num = ref<number>(0);
    let nums = ref(0);
    nums = computed(() => {
      return Number(num.value) * 2;
    });
    function clineCkicj() {
      context.emit("clineCkicj");
    }
    function cloneClick() {
      console.log(props);

      num.value = 0;
    }
    function queren() {
      context.emit("numZi", Number(props.num) + Number(num.value));
    }
    return {
      num,
      clineCkicj,
      nums,
      cloneClick,
      queren,
    };
  },
});
</script>

<style scoped>
.clone {
  cursor: pointer;
}
.querne {
  cursor: pointer;
}
.title {
  cursor: pointer;
  /* color: #fff; */
}
.bg_2 {
  width: 200px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
}
.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
