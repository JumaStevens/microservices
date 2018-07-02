<template lang='pug'>
section.container
  form(
    @submit.prevent='formSubmit'
  )
    label Update displayName
    input(
      v-model.trim='displayName'
      v-validate='"required|alpha_spaces"'
    )
    input(
      type='submit'
    )

  //- logout
  a(
    @click='signOut()'
  ) sign out


</template>


<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      displayName: ''
    }
  },
  methods: {
    async formSubmit () {
      try {
        const valid = await this.$validator.validateAll()

        if (!this.displayName || !valid) throw this.errors

        this.updateProfile({ displayName: this.displayName })
      }
      catch (e) { console.error(e) }
    },


    ...mapActions({
      updateProfile: 'auth/updateProfile',
      signOut: 'auth/signOut'
    })
  }
}
</script>


<style lang='sass' scoped>


</style>
