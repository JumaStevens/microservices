

export default {
  isCurrentUser (state) {
    return state.currentUser !== null
  },


  getCurrentUser (state, getters) {
    const currentUser = {
      uid: '',
      displayName: '',
      photoURL: ''
    }
    console.log('getter --> ', state.currentUser)
    return getters.isCurrentUser ? state.currentUser : currentUser
  }
}
