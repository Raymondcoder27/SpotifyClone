<script setup>
import { toRefs, ref } from "vue";
import { RouterLink } from "vue-router";
import uniqolor from "uniqolor";
let randColor = ref("");
randColor.value = uniqolor.random()

const props = defineProps({ category: String, image: String });
const { category } = toRefs(props);
</script>

<template>
  <RouterLink to="library">
    <div
      :style="`background-color:${randColor.color}`"
      class="contrast-[2] brightness-[0.87] rounded-xl aspect-square relative overflow-hidden"
    >   
    <div class="text-white pt-3 pl-4 font-semibold text-[23px]">
        {{category}}
    </div>
    <img :src="image || ''" alt="" 
    class="absolute bottom-0 -right-3.5 max-w-[100px] contrast-[0.55] rotate-[20deg]">
</div>
  </RouterLink>
</template>