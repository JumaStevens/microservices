<template lang='pug'>
div.container
  p Upload profile image
  img(
    :src='downloadURL'
    class='image'
  )
  input(
    @change='detectFiles($event.target.files)'
    type='file'
    multiple
    accept='image/*'
  )
  div(
    :style='{ transform: "translateX(" + uploadProgress + "%)" }'
    class='progress-bar'
  )

</template>


<script>
import { database, storage } from '~/firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    configData: {
      type: Object,
      default () {
        return {
          url: 'users'
        }
      }
    }
  },
  data  () {
    return {
      uploadProgress: -100,
      uploadTask: '',
      downloadURL: ''
    }
  },
  computed: {
    ...mapGetters({
      getCurrentUser: 'auth/getCurrentUser'
    })
  },
  methods: {
    detectFiles (fileList) {
      Array.from(Array(fileList.length).keys()).forEach(x => this.upload(fileList[x]))
    },


    upload (file) {
      const key = database.ref().push().key
      const url = `${this.configData.url}/${this.getCurrentUser.uid}/${key}`

      this.uploadTask = storage.ref(url).put(file);
      console.log('key: ', file)

      const success = (snapshot) => {
        this.downloadURL = this.uploadTask.snapshot.downloadURL
        console.log('this: ', this.downloadURL)
        this.updateProfile({ photoURL: this.downloadURL })
        this.$emit('url', this.downloadURL)
      }

      const error = (err) => console.error(err)

      this.uploadTask.then(snapshot => success(snapshot), err => error(err))
    },


    ...mapActions({
      updateProfile: 'auth/updateProfile'
    })
  },
  watch: {
    uploadTask: function() {
      const success = (snapshot) => this.uploadProgress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100 - 100)

      const error = (err) => console.error(err)

      this.uploadTask.on('state_changed', snapshot => success(snapshot), err => error(err))
    }
  }
}
</script>


<style lang='sass' scoped>

.container
  overflow: hidden

.progress-bar
  margin: 10px 0
  transition: transform 150ms
  background: $black
  width: 100%
  height: $unit / 4
  transform: translateX(-100%)

.image
  width: 500px
  height: auto

</style>
