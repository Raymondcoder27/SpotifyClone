<script setup>
import { ref, watch, onMounted } from "vue";
import Heart from "vue-material-design-icons/Heart.vue";
import PictureInPictureBottomRight from "vue-material-design-icons/PictureInPictureBottomRight.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import SkipBackward from "vue-material-design-icons/SkipBackward.vue";
import SkipForward from "vue-material-design-icons/SkipForward.vue";

import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong);

let isHover = ref(false);
let isTrackTimeCurrent = ref(null);
let isTrackTimeTotal = ref(null);
let seeker = ref(null);
let seekerContainer = ref(null);
let range = ref(0);

onMounted(() => {
  console.log("Seeker onMounted:", seeker.value);
  if (audio.value) {
    setTimeout(() => {
      timeupdate();
      loadmetadata();
    }, 300);
  }

  if (currentTrack.value) {
    seeker.value.addEventListener("change", function () {
      const time = audio.value.duration * (seeker.value.value / 100);
      audio.value.currentTime = time;
    });

    if (seeker.value && seekerContainer.value && audio.value) {
      seeker.value.addEventListener("mousedown", function () {
        audio.value.pause();
        isPlaying.value = false;
      });

      seeker.value.addEventListener("mouseup", function () {
        audio.value.play();
        isPlaying.value = true;
      });

      seekerContainer.value.addEventListener("click", function (e) {
        const clickPosition =
          (e.pageX - seekerContainer.value.offsetLeft) /
          seekerContainer.value.offsetWidth;
        const time = audio.value.duration * clickPosition;
        audio.value.currentTime = time;
        seeker.value.value =
          (100 / audio.value.duration) * audio.value.currentTime;
      });
    }
  }
});

const timeupdate = () => {
  audio.value.addEventListener("timeupdate", function () {
    var minutes = Math.floor(audio.value.currentTime / 60);
    var seconds = Math.floor(audio.value.currentTime - minutes * 60);
    isTrackTimeCurrent.value =
      minutes + ":" + seconds.toString().padStart(2, "0");
    const value = (100 / audio.value.duration) * audio.value.currentTime;
    range.value = value;

    // console.log("Seeker:", seeker.value);
    // if (seeker.value) {
    //   seeker.value.value = value;
    // }
    seeker.value.value = value
  });
};

const loadmetadata = () => {
  audio.value.addEventListener("loadmetadata", function () {
    const duration = audio.value.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    isTrackTimeTotal.value =
      minutes + ":" + seconds.toString().padStart(2, "0");
  });
};

watch(
  () => audio.value,
  () => {
    timeupdate();
    loadmetadata();
  }
);

watch(
  () => isTrackTimeCurrent.value,
  (time) => {
    if (time && time === isTrackTimeTotal.value) {
      useSong.nextSong(currentTrack.value);
    }
  }
);
</script>

<template>
  <div
    id="MusicPlayer"
    class="fixed flex items-center justify-between w-full bottom-0 z-50 h-[90px] border-t bg-[#181818] border-t-[#272727]"
  >
  
    <div class="flex items-center w-1/4">
        <div class="flex items-center ml-4">
            <img class="rounded-sm shadow-2xl" width="55" :src="currentArtist.albumCover">
            <div class="ml-4">
                <div class="text-white cursor-pointer text-[14px] hover:underline hover:text-white">
                    {{ currentTrack.name }}
                </div>
                <div class="text-gray-400 cursor-pointer text-[11px] hover:underline">
                    {{ currentTrack.name }}
                </div>
            </div>
        </div>

        <div class="flex items-center ml-8">
            <Heart :size="20" fillColor="#1BD760"/>
            <PictureInPictureBottomRight class="ml-4" fillColor="#FFFFFF" size="18" />
        </div>
    </div>

    <div class="mx-auto mb-3 max-w-[35%] w-2/4">
        <div class="flex-col items-center justify-center">
            <div class="flex items-center justify-center h-[30px]">
                <button class="mx-2">
                    <SkipBackward fillColor="#FFFFFF" :size="25" @click="useSong.prevSong(currentTrack)"/>
                </button>
                <button class="p-1 rounded-full mx-3 bg-white" @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)">
                    <Play v-if="!isPlaying" fillColor="#181818" :size="25"/>
                    <Pause v-else fillColor="#181818" :size="25" />
                </button>
                <button class="mx-2">
                    <SkipForward fillColor="#FFFFFF" :size="25" @click="useSong.nextSong(currentTrack)"/>
                </button>
            </div>
        </div>
    </div>
  
  </div>
</template>

