import Vue from 'vue'

export default {
  setUploadTask (state, payload) {
    console.log('ss: ', payload)
    Vue.set(state.uploadTask)
  },


  updateUploadProgress (state, payload) {
    Vue.set(state.uploadProgress, payload.key, payload.progress)
    console.log('update: ', state)
    console.log('update payload: ', payload)
  },


  deleteUploadProgress (state, payload) {
    Vue.delete(state.uploadProgress, payload.key)
    console.log('delete: ', state)
    console.log('delete payload: ', payload)
  }
}
