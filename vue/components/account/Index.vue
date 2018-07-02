<template lang='pug'>
div
  p displayName: {{ displayName }}
  file-uploader
  profile-form

</template>


<script>
import FileUploader from './FileUploader.vue'
import ProfileForm from './ProfileForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    FileUploader,
    ProfileForm
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      displayName: 'auth/getCurrentUserDisplayName'
    })
  }
}
</script>


<style lang='sass' scoped>


</style>
