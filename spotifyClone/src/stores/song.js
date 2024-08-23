import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', () => {
  const isPlaying = ref(false)
  const audio = ref(null)
  const currentArtist = ref(null)
  const currentTrack = ref(null)

  //actions
  const loadSong = (artist, track) => {
    currentArtist.value = artist
    currentTrack.value = track

    
    if (audio.value && audio.src.value){
      audio.value.pause()
      isPlaying.value = false
      audio.src.value = ''
    }

    audio.value = new Audio()
    audio.src.value = track.path

    setTimeout(() => {
      isPlaying.value = false
      audio.value.play()
    }, 200);
  }

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
