<script setup>
import { RouterLink, RouterView } from 'vue-router';
import {ref} from 'vue';

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

let openMenu = ref(false)
</script>

<template>
  <div>
    <div
  class="
  w-[calc(100%-240px)]
  h-[60px]
  fixed
  right-0
  z-20
  bg-[#101010]
  bg-opacity-80
  flex
  items-center
  justify-between">

  <div class="flex items-center ml-6">
    <button type="button" class="rounded-full p-[-px] bg-black cursor-pointer">
      <ChevronLeft fillColor="#FFFFFF" :size="30" />
    </button>
    <button type="button" class="rounded-full ml-4 p-[-px] bg-black cursor-pointer">
      <ChevronRight fillColor="#FFFFFF" :size="30" />
    </button>
  </div>

  <button
  @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]': 'bg-black'"
  class="bg-black rounded-full cursor-pointer mr-8 p-0.5 mt-0.5 hover:bg-[#282828]">
    <div class="flex items-center">
      <img src="./assets/profile.jpeg" 
      class="rounded-full"
      width="27" alt="">
      <div class="text-white font-semibold ml-1.5 text-[14px]">Raymond Mwebe</div>
      <ChevronDown v-if="!openMenu" @click="openMenu = true" size="25" fillColor="#FFFFFF"/>
      <ChevronUp v-else @click="openMenu = false" size="25" fillColor="#FFFFFF"/> 
    </div>
  </button>

  <span
  v-if="openMenu"
  class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
    <ul class="text-gray-200 font-semibold text-[14px]">
      <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600  ">
        Profile
      </li>
      <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">
        Logout
      </li>
    </ul>
  </span>
  </div>

  <div 
  id="SideNav"
  class="p-6 z-50 bg-black w-[240px] h-[100%] fixed"
  >

  </div>
  </div>
</template>
