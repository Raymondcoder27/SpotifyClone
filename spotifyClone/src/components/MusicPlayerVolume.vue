<script>
    import {ref, onMounted} from 'vue'
    import VolumeMute from 'vue-material-design-icons/VolumeMute.vue'
    import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue'


    import { useSongStore } from '@/stores/song';
    import { storeToRefs } from 'pinia';
    const useSong = useSongStore()
    const {audio} = storeToRefs(useSong)

    let isHover = ref(false)
    let vol = ref(80)
    let volume = ref(null)
</script>


<template>
    
</template>