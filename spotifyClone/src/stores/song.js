import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import artist from '@/artist.json'
export const useSongStore = defineStore('song', () => {
  const isPlaying = ref(false)
  const audio = ref(null)
  const currentArtist = ref(null)
  const currentTrack = ref(null)

  //actions
  const loadSong = (artist, track) => {
    currentArtist.value = artist
    currentTrack.value = track

    
    if (audio.value && audio.value.src){
      audio.value.pause()
      isPlaying.value = false
      audio.value.src = ''
    }

    audio.value = new Audio()
    audio.value.src = track.path

    setTimeout(() => {
      isPlaying.value = true
      audio.value.play()
    }, 200);
  };

  const playOrPauseSong=()=>{
    if (audio.value.paused){
      isPlaying.value = true
      audio.value.play()
    } else{
      isPlaying.value = false
      audio.value.pause()
    }
  }


  const playOrPauseThisSong=(artist, track)=>{
    if( !audio.value || !audio.value.src|| (currentTrack.value.id !== track.id)){
      loadSong(artist, track)
      return
    }

    playOrPauseSong()
  }

  const prevSong=(currentTrack)=>{
    let track = artist.tracks[currentTrack.id - 2]
    loadSong(artist, track)
  }

  const nextSong=()=>{

    const track = currentTrack.value


    if(!track ||  !track.id){
      console.error("Invalid current track:", track)
      return
    }
    if (track.id === artist.tracks.length){
      let nextTrack = artist.tracks[0]
      loadSong(artist,nextTrack)
    }else{
      let nextTrack = artist.tracks[track.id]
      loadSong(artist,nextTrack)
    }
  }

  const playFromFirst=()=>{
    resetState()
    let track = artist.tracks[0]
    loadSong(artist,track)
  }

  const resetState=()=>{
    isPlaying.value=false
    currentArtist.value=null
    currentTrack.value=null
    audio.value=null
  }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  persist:true

  return {isPlaying, audio,  currentArtist, currentTrack, resetState, loadSong, playOrPauseSong, playOrPauseThisSong, playFromFirst, prevSong, nextSong }
},{
  persist:true
})
