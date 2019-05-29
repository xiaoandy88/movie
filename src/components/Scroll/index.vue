<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    })
  },
  methods: {
    toScrollTop (y) {
      this.scroll.scrollTo(0, y)
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
