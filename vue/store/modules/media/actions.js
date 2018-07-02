import { storage } from '~/firebase'

const currentUser = (rootGetters) => rootGetters['auth/getCurrentUser']

export default {
  uploadProfilePicture ({ commit, dispatch, rootGetters }, file) {
    const uid = currentUser(rootGetters).uid

    const success = (snapshot) => {
      // commit('deleteUploadProgress', { key: file.name })
      dispatch('auth/updateProfile', { photoURL: snapshot.downloadURL }, { root: true })
    }

    const error = (err) => console.error(err)

    const uploadTask = storage.ref(`users/${uid}/${file.name}`).put(file)
    commit('setUploadTask', { key: file.name, uploadTask })
    //dispatch('watchUploadProgress', { uploadTask, key: file.name })

    uploadTask.then(snapshot => success(snapshot), err => error(err))
  },


  watchUploadProgress ({ commit }, data) {
    const progress = (snapshot) => snapshot.bytesTransferred / snapshot.totalBytes * 100

    const success = (snapshot) => commit('updateUploadProgress', { progress: progress(snapshot), key: data.key })

    const error = (err) => console.error(err)

    data.uploadTask.on('state_changed', snapshot => success(snapshot), err => error(err))
  }

}
