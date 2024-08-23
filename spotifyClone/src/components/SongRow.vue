<script setup>
import { ref, toRefs, onMounted } from "vue";
import Heart from "vue-material-design-icons/Heart.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";

let isHover = ref(false);
let isTrackTime = ref(null);

const props = defineProps({
  track: Object,
  artist: Object,
  index: Number,
});

const { track, artist, index } = toRefs(props);
</script>

<template>
  <li
    class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="flex items-center w-full py-1.5">
      <div v-if="isHover" class="cursor-pointer w-[40px] ml-[14px] mr-[6px]">
        <Play v-if="true" :size="25" fillColor="#FFFFFF" />
        <Play v-else :size="25" fillColor="#FFFFFF" />
      </div>
      <div v-else class="text-white font-semibold ml-5 w-[40px]">
        <span>
          {{ index }}
        </span>
      </div>

      <div>
        <div class="text-white font-semibold">
          {{ track.name }}
        </div>
        <div class="text-sm font-semibold text-gray-400">{{ artist.name }}</div>
      </div>
    </div>

    <div class="flex items-center">
        <button type="button" v-if="isHover">
            <Heart fillColor="#1BD760" :size="22" />
        </button>
        <div
        v-if="isTrackTime"
        class="text-xs mx-5 text-gray-400">
            {{ isTrackTime }}
        </div>
    </div>
  </li>
</template>