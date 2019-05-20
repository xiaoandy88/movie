<template>
  <div id="main">
    <Header title="我的喵喵" />
    <div id="content">
      <Login />
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/components/Login'
import TabBar from '@/components/TabBar'
export default {
  name: 'Mine',
  components: {
    Header,
    Login,
    TabBar
  }
}
</script>

<style scoped>

</style>
