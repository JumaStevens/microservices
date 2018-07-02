<template lang='pug'>
div(class='vue-app')

  Header.vue-header

  //- transition(name='fade')
  error-404-view(
    v-if='error.isError && error.type == "404"'
    class='vue-app__error'
  )
  router-view(
    else
    class='vue-app__view'
  )
</template>


<script>
import Header from '~comp/header/Index.vue'
import Error404View from './views/Error404View.vue'

export default {
  components: {
    Header,
    Error404View
  },
  data () {
    return {}
  },
  computed: {
    error () {
      return this.$store.state.error
    }
  },
  beforeCreate () {
    this.$store.dispatch('auth/watchAuthState')
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  width: 100vw
  height: 100vh
  background: $pri-cl
  display: grid
  grid-template-rows: repeat(1, auto)

  &__error,
  &__view
    grid-row: 1 / 2
    margin-top: $unit*8

.fade-enter-active, .fade-leave-active
  transition: opacity 150ms, transform 150ms

.fade-enter, .fade-leave-to
  transform: translateY(5vmin)
  opacity: 0



</style>
