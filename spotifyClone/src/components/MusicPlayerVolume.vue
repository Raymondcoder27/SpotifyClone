<script setup>
import { ref, onMounted } from "vue";
import VolumeMute from "vue-material-design-icons/VolumeMute.vue";
import VolumeHigh from "vue-material-design-icons/VolumeHigh.vue";

import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { audio } = storeToRefs(useSong);

let isHover = ref(false);
let vol = ref(80);
let volume = ref(null);

onMounted(() => {
  console.log("Store audio:", audio.value);
});
</script>


<template>
  <!-- <div> -->
  <VolumeMute v-if="vol == 0" fillColor="#FFFFFF" :size="20" />
  <VolumeHigh v-else fillColor="#FFFFFF" :size="20" />

  <div
    class="flex items-center ml-2 w-[150px] relative mt-2 mb-[23px]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <input
      v-model="vol"
      ref="volume"
      type="range"
      class="mt-[24px] absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 accent-white focus:outline-none"
      :class="{ rangeDotHidden: !isHover }"
    />
    <div
      class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0"
      :style="`width: ${vol}%;`"
      :class="isHover ? 'bg-green-500' : 'bg-white'"
    />
    <div
      class="mt-[6px] absolute h-[4px] z-[-0] left-0 w-full inset-y-0 bg-gray-500"
    ></div>

    <div v-if="isTrackTimeTotal" class="text-white pr-2 pt-[11px] text-[12px]">
      {{ isTrackTimeTotal }}
    </div>
  </div>
  <!-- </div> -->
</template>




<style>
.rangeDotHidden[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
}
</style>