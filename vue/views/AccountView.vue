<template lang='pug'>
main.container
  div.services

    //- Dummy Form
    div.card
      h3.card__title Test Form
      div.auth
        form(
          @submit.prevent='testFormSubmit'
          class='auth__form'
        )
          //- from
          input(
            v-model='form.from'
            type='email'
            placeholder='From'
            required
          ).auth__input
          //- subject
          input(
            v-model='form.subject'
            placeholder='Subject'
            required
          ).auth__input
          //- text
          textarea(
            v-model='form.text'
            placeholder='Text'
            required
          ).auth__input
          //- submit
          input(
            type='submit'
            value='Submit'
          ).auth__submit


    //- SendGrid
    div.card
      h3.card__title SendGrid
      div.auth
        form(
          @submit.prevent='sendGridSubmit'
          class='auth__form'
        )
          //- api key
          input(
            v-model='formSendGrid.apiKey'
            placeholder='API Key'
            required
          ).auth__input
          //- submit
          input(
            type='submit'
            value='Submit'
          ).auth__submit

</template>


<script>
import Account from '~comp/account/Index.vue'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'


export default {
  components: {
    Account
  },
  data () {
    return {
      form: {
        from: '',
        subject: '',
        text: '',
        // html: ''
      },
      formSendGrid: {
        apiKey: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/getCurrentUser'
    })
  },
  methods: {
    sendGridSubmit () {
      console.log('sendGrid form: ', this.formSendGrid)
      if (!this.formSendGrid) return
      this.setSendGrid({ apiKey: this.formSendGrid.apiKey })
    },


    testFormSubmit () {
      const currentUser = this.currentUser
      if (!currentUser || !currentUser.uid) return
      console.log('uid: ', currentUser.uid)
      const uid = currentUser.uid

      const url = `https://us-central1-microservices-d3309.cloudfunctions.net/sendGrid/mail/${uid}/`


      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        data: this.form
      }

      axios.post(url, config)
        .then(response => {
          console.log('response: ', response)
        })
        .catch(error => {
          console.error(error)
        })

    },


    ...mapActions({
      setSendGrid: 'services/setSendGrid'
    })
  }
}
</script>


<style lang='sass' scoped>
.container
  background: $pri-cl
  display: grid
  grid-template-rows: auto 1fr

  & h1
    grid-row: 1 / 2
    color: black

.services
  @extend %flex--column
  align-items: center
  margin-top: $unit*8
  grid-row: 2 / 3


.card
  background: $white
  padding: $unit*4
  margin-bottom: $unit*8

  &__title
    color: $black
    margin-bottom: $unit*2

.auth

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
    background: transparent

  &__submit
    padding: .15rem 1rem
    border-radius: 2rem
    border: 1px solid $black
    background: transparent

    &:last-child
      margin-top: 0.5rem
      border: none




</style>
