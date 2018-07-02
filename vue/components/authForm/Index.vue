<template lang='pug'>
div(class='container')

  div(class='auth')
    form(
      @submit.prevent=''
    ).auth__form

      //- email
      input(
        v-model='form.email'
        type='email'
        name='email'
        v-validate='"required|email"'
        key='auth-email'
        placeholder='Email'
        required
      ).auth__input

      //- password
      input(
        v-model='form.password'
        type='password'
        placeholder='Password'
        required
      ).auth__input

      //- login
      input(
        type='submit'
        value='Login'
        @click='signInWithEmailAndPassword'
      ).auth__submit

      //- create user
      input(
        type='submit'
        value='+ create account'
        @click='createUserWithEmailAndPassword'
      ).auth__submit

</template>


<script>

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    current () {
      return this.$store.state
    }
  },
  methods: {
    signInWithEmailAndPassword () {
      try {
        this.$validator.validateAll()
        if (this.errors.any()) throw this.errors // $validator provided object
        this.$store.dispatch('auth/signInWithEmailAndPassword', this.form)
      }
      catch (e) { console.error(e) }
    },
    createUserWithEmailAndPassword () {
      try {
        this.$validator.validateAll()
        if (this.errors.any()) throw this.errors // $validator provided object
        this.$store.dispatch('auth/createUserWithEmailAndPassword', this.form)
      }
      catch (e) { console.error(e) }
    }
  }
}
</script>

<style lang='sass' scoped>
.container
  @extend %flex--column-center
  height: 100%

.auth
  background: $pri-cl
  display: flex
  justify-content: center
  align-items: center

  &__form
    @extend %flex--column
    justify-content: center
    max-width: 14rem
    min-width: 8rem
    width: 25vmax

  &__input
    padding: .1rem 0
    margin-bottom: 2rem
    border-bottom: 1px solid $dark
    background: $pri-cl

  &__submit
    padding: .15rem 1rem
    border-radius: 2rem
    border: 1px solid $black
    background: transparent

    &:last-child
      margin-top: 0.5rem
      border: none

</style>
