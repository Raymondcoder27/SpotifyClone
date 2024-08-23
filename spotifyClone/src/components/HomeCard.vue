<script setup>
    import {toRefs} from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        image: String,
        title: String,
        subTitle: String
    })
    const {image, title, subTitle} = toRefs(props)
</script>


<template>
    <RouterLink to="library">
        <div class="rounded-md m-2 cursor-pointer p-4 hover:bg-[#252525] bg-[#111111]">
            <img class="rounded-md" :src="image">
            <div class="text-white pt-4 font-semibold text-[17px]">{{ title }}</div>
            <div class="text-gray-400 pt-1 pb-3 font-semibold text-[14px]">{{ subTitle }}</div>
        </div>  
    </RouterLink>
</template>