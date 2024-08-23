<script setup>
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import ClockTimeThreeOutline from "vue-material-design-icons/ClockTimeThreeOutline.vue";
import artist from "../artist.json";
</script>

<template>
  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      {{ artist.name }}
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-items relative w-full h-full">
      <img :src="artist.albumCover" width="140" alt="" />

      <div class="w-full ml-5">
        <div
          style="font-size: 33px"
          class="text-white hover:underline cursor-pointer top-0 font-semibold"
        >
          {{ artist.name }}
        </div>

        <div class="text-gray-300 text-[13px] flex">
          <div class="flex">Album</div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2" />
            <span class="-ml-0.5">{{ artist.releaseYear }}</span>
          </div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2" />
            <span class="-ml-0.5">{{ artist.tracks.length }} songs</span>
          </div>
        </div>

        <div
          class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5"
        >
          <button type="button" class="p-l rounded-full bg-white">
            <Play v-if="true" :size="25" fillColor="#181818" />
            <Play v-else :size="25" fillColor="#181818" />
          </button>
          <button type="button" class="p-l rounded-full">
            <Heart :size="30" fillColor="#1BD760" />
          </button>
          <button type="button" class="p-l rounded-full">
            <DotsHorizontal :size="25" fillColor="#FFFFFF" />
          </button>
        </div>
      </div>
    </div>

    <div class="mt-6"></div>
    <div class="flex items-center justify-between px-5 pt-2">
      <div class="flex items-center justify-between text-gray-400">
        <div class="mr-7">#</div>
        <div class="text-sm">Title</div>
      </div>

      <div class="ml-auto">
        <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" />
      </div>
    </div>

    <div class="border-b mt-2 border-b-[#2A2A2A]"></div>
    <div class="mb-4"></div>
    <ul class="w-full text-white" v-for="track, index in artist.tracks" :key="track">
        {{ track }}
    </ul>
  </div>
</template>


<style scoped>
.circle {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: rgb(189, 189, 189);
}
</style>