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
    
</template>