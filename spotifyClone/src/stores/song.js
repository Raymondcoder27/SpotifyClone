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
  // const prevSong=()=>{
  //   if(!currentTrack.value || currentTrack.value.id){
  //     loadSong(artist.tracks[artist.tracks.length-1])
  //   }else{
  //     const prevTrackId = currentTrack.value.id - 1
  //     const prevTrack= artist.tracks[prevTrackId]
  //     if(prevTrack){
  //       loadSong(artist, prevTrack)
  //     }else{
  //       console.error("previous track not found")
  //     }
  //   }
  // }

  // const prevSong = () => {
  //   if (!currentTrack.value || currentTrack.value.id <= 0) {
  //     // If no current track or if current track is the first one, go to the last track
  //     loadSong(artist, artist.tracks[artist.tracks.length - 1]);
  //   } else {
  //     // Go to the previous track
  //     const prevTrackId = currentTrack.value.id - 1;
  //     if (prevTrackId >= 0) {
  //       const prevTrack = artist.tracks[prevTrackId];
  //       if (prevTrack) {
  //         loadSong(artist, prevTrack);
  //       } else {
  //         console.error("Previous track not found");
  //       }
  //     } else {
  //       // If no previous track exists, go to the last track
  //       loadSong(artist, artist.tracks[artist.tracks.length - 1]);
  //     }
  //   }
  // };
  
  

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
