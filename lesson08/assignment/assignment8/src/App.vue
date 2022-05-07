<template>
  <div id="app">
  <header-nav/>
  <router-view/>
  </div>
</template>


  <script>
import ImageList from './components/ImageList.vue'
import HeaderNav from './components/HeaderNav.vue'

  export default {
  name: 'App',
components: {
  ImageList,
  HeaderNav,
  },
     data() {
       return {
      myToggle: false
       }
     },
   }

  </script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
