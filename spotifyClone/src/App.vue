<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import MenuItem from "./components/MenuItem.vue";

import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

let openMenu = ref(false);
</script>

<template>
  <div>
    <div
      class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
    >
      <div class="flex items-center ml-6">
        <button
          type="button"
          class="rounded-full p-[-px] bg-black cursor-pointer"
        >
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button
          type="button"
          class="rounded-full ml-4 p-[-px] bg-black cursor-pointer"
        >
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>

      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black rounded-full cursor-pointer mr-8 p-0.5 mt-0.5 hover:bg-[#282828]"
      >
        <div class="flex items-center">
          <img
            src="./assets/profile.jpeg"
            class="rounded-full"
            width="27"
            alt=""
          />
          <div class="text-white font-semibold ml-1.5 text-[14px]">
            Raymond Mwebe
          </div>
          <ChevronDown
            v-if="!openMenu"
            @click="openMenu = true"
            :size="25"
            fillColor="#FFFFFF"
          />
          <ChevronUp
            v-else
            @click="openMenu = false"
            :size="25"
            fillColor="#FFFFFF"
          />
        </div>
      </button>

      <span
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">
            Profile
          </li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Logout </li>
        </ul>
      </span>
    </div>

    <div id="SideNav" class="p-6 z-50 bg-black w-[240px] h-[100%] fixed">
      <RouterLink to="/">
        <img src="../public/icons/spotify-logo.png" width="125" alt="" />
      </RouterLink>
      <div class="my-2"></div>

    <ul class="pt-8">
      <RouterLink to="/">
        <MenuItem
          class="ml-[1px]"
          :iconSize="23"
          name="Home"
          iconString="home"
          pageUrl="/"
        />
      </RouterLink>
      <RouterLink to="/search">
        <MenuItem
          class="ml-[1px]"
          :iconSize="23"
          name="Search"
          iconString="search"
          pageUrl="/search"
        />
      </RouterLink>
      <RouterLink to="/library">
        <MenuItem
          class="ml-[1px]"
          :iconSize="23"
          name="Library"
          iconString="library"
          pageUrl="/library"
        />
      </RouterLink>
      <div class="py-3.5"></div>
      <MenuItem
        :iconSize="24"
        name="Create Playlist"
        iconString="playlist"
        pageUrl="/playlist"
      />
      <MenuItem
        class="ml-[-1px]"
        :iconSize="27"
        name="Liked Songs"
        iconString="liked"
        pageUrl="/liked"
      />
    </ul>
    <div class="border-b border-b-gray-700"></div>

    <ul>
      <li class="font-semibold mt-3 hover:text-white text-gray-300 text-[13px] cursor-pointer">Playlist 1</li>
      <li class="font-semibold mt-3 hover:text-white text-gray-300 text-[13px] cursor-pointer">Not Like Us</li>
      <li class="font-semibold mt-3 hover:text-white text-gray-300 text-[13px] cursor-pointer">Family Matters</li>
      <li class="font-semibold mt-3 hover:text-white text-gray-300 text-[13px] cursor-pointer">Euphoria</li>
    </ul>
  </div>
  </div>

  <div class="fixed right-0 top-0 overflow-auto h-full w-[calc(100%-240px)] bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>
</template>
