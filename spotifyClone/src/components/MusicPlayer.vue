<script setup>
    import {ref, watch, onMounted} from 'vue';
    import Heart from 'vue-material-design-icons/Heart.vue';
    import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue'
    import Play from 'vue-material-design-icons/Play.vue'
    import Pause from 'vue-material-design-icons/Pause.vue'
    import SkipBackward from 'vue-material-design-icons/SkipBackward.vue'
    import SkipForward from 'vue-material-design-icons/SkipForward.vue'

    import { useSongStore } from '@/stores/song';
    import { storeToRefs } from 'pinia';
    const useSong = useSongStore()
    const {isPlaying, audio, currentTrack, currentArtist} = storeToRefs(useSong)

    let isHover = ref(false)
    let isTrackTimeCurrent = ref(null)
    let isTrackTimeTotal = ref(null)
    let seeker = ref(null)
    let seekerContainer = ref(null)
    let range = ref(0)

    onMounted(()=>{
        if(audio.value){
            setTimeout(() => {
                timeupdate()
                loadmetadata()
            }, 300);
        }
    })

    const timeupdate = () => {
        audio.value.addEventListener('timeupdate', function () {
            var minutes = Math.floor(audio.value.currentTime / 60);
            var seconds = Math.floor(audio.value.currentTime - minutes * 60);
            isTrackTimeCurrent.value = minutes+':'+seconds.toString().padStart(2, '0')
            const value = (100 / audio.value.duration) * audio.value.currentTime
            range.value = value
            seeker.value.value = value
        })
    }

    const loadmetadata = () => {
        
    }
</script>

<template>
    
</template>

