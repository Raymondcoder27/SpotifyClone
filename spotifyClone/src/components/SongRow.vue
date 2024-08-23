<script setup>
    import {ref, toRefs, onMounted} from 'vue'
    import Heart from 'vue-material-design-icons/Heart.vue'
    import Play from 'vue-material-design-icons/Play.vue'
    import Pause from 'vue-material-design-icons/Pause.vue'

    let isHover = ref(false)
    let isTrackTime = ref(null)

    const props = defineProps({
        track: Object,
        artist: Object,
        index: Number
    })

    const {track, artist, index} = toRefs(props)
</script>

<template>
    <li class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false">
        <div class="flex items-center w-full py-1.5">
            <div class="cursor-pointer w-[40px] ml-[14px] mr-[6px]">

            </div>
        </div>
    </li>
</template>