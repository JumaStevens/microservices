<template lang='pug'>
div(class='container')
  header(class='header')
    router-link(
      to='/'
      class='logo'
    )
      span.logo__icon
        IconLogo.logo__svg
      span.logo__text Monumental
      span.logo__subtext &nbsp; Services


    router-link(
      to='/account'
      class='link'
    ) Account


    router-link(
      to='/auth'
      class='link'
    ) Sign In

</template>


<script>
import IconLogo from '~/assets/svg/icon-logo.svg'

export default {
  components: {
    IconLogo
  },
  data () {
    return {}
  },
  computed: {
  }
}
</script>


<style lang='sass' scoped>
.container
  position: fixed
  width: 100%
  z-index: 100
  height: $unit*8

.header
  @extend %flex
  align-items: center
  height: 100%
  background: $white
  box-shadow: 0px 8px 8px rgba(34, 34, 34, .1)

.logo
  color: gold
  margin: 0  auto 0 $unit*4
  text-transform: uppercase
  padding: $unit/2
  display: flex
  align-items: center

  &__icon
    @extend %flex--row-center
    width: $unit*5
    margin-right: $unit

  &__svg
    width: 100%
    fill: #ffd700


  &__subtext
    color: $black
    font-size: $fs

  &__text
    color: gold

.link
  position: relative
  overflow: hidden
  color: $black
  text-transform: uppercase
  padding: $unit/2


  &:last-child
    margin: 0 $unit*4

  &::before
    content: ''
    position: absolute
    top: 100%
    left: 0
    background: $black
    width: 100%
    height: $unit/4

  &:hover.link::before
    transform: translateY(-100%)
    transition: transform 250ms


</style>
