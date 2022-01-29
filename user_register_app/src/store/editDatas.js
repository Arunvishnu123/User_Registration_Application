

export default {
  namespaced: true,
  state: {
    Data: [],
  },
  mutations: {
    DELETE_VIDEO(state, videoId){
      let videos = state.videos.filter(v => v.id != videoId)
      state.videos = videos;
    },
    EDIT_VIDEO(state, video) {
      let v = state.videos.find(v => v.id == video.id)
      v = video;
    },
  },
  
}