import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import artist from './artist.json'
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
  };

  const playOrPauseSong=()=>{
    if (audio.value.paused){
      isPlaying.value = true
      audio.value.play()
    }
  }


  const playOrPauseThisSong=(artist, track)=>{
    if( !audio.value || !audio.src.value || (currentTrack.id.value !== track.id)){
      loadSong.value(artist, track)
      return
    }

    playOrPauseSong.value()
  }

  const prevSong=(currentTrack)=>{
    let track = artist.tracks(currentTrack.id - 2)
    loadSong.value(artist, track)
  }

  const nextSong=(currentTrack)=>{
    if (currentTrack.id === artist.tracks.length){
      let track = artist.tracks[0]
      loading.value(artist,track)
    }else{
      let track = artist.tracks[currentTrack.id]
      loadSong.value(artist,track)
    }
  }

  const playFromFirst=()=>{
    resetState.value()
    let track = artist.tracks[0]
    loading.value(artist,track)
  }

  resetState=()=>{
    isPlaying.value=ref(false)
    currentArtist.value=ref(null)
    currentTrack.value=ref(null)
    audio.value=ref(null)
  }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return {isPlaying, audio,  currentArtist, currentTrack, resetState, loadSong, playOrPauseSong, playOrPauseThisSong, playFromFirst, prevSong, nextSong }
})
