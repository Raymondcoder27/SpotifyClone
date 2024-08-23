<script setup>
    import {toRefs, watchEffect, ref} from 'vue';
    import {useRoute} from 'vue-router';
    const route = useRoute()

    const props = defineProps({
        iconString: String,
        iconSize: Number,
        pageUrl: String,
        name: String
    })

    const {iconString, iconSize, pageUrl, name} = toRefs(props)

    let icon = ref(null)
    let textIsHover = ref(false)

    watchEffect(()=> {
        if (route.path == pageUrl.value) {
            icon.value = iconString.value + '-active'
            textIsHover.value = true
        } else {
            icon.value = iconString.value + '-inactive'
            textIsHover.value = false
        }
    })

    const isHover = () => {
        if (icon.value === iconString.value + '-active') return
        
        if (icon.value === iconString.value + '-inactive') {
            icon.value = iconString.value + '-inactive-hover'
            textIsHover.value = true
        } else {
            icon.value = iconString.value + '-inactive'
            textIsHover.value = false
        }
    }
</script>

<template>
   <li
   @mouseenter="isHover()"
   @mouseleave="isHover()"
   class="flex items-center justify-start pb-4 cursor-pointer ">
        <!-- <img src="public/images/icons/${icon}.png" width="iconSize" alt=""> -->
        <img :src="`/public/icons/${icon}.png`" class="z-50" :width="iconSize" alt="">
        <div
        :class="textIsHover ? 'text-white' : 'text-gray-400' " class="font-semibold ml-4 mt-0.5 text-[14px] z-50">

        <span
        class="z-50"
        :class="route.path == pageUrl ? 'text-white' : ''">
            {{ name }}
        </span>
        </div>
   </li>
</template>
