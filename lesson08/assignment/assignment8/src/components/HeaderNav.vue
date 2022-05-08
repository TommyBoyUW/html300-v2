<template>
<div>

<nav>
<b-navbar class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center" style="background-color: #cde8e3">
<b-navbar-nav class="bars" >
  <b-nav-item class="bar" href="/">Home</b-nav-item>
  <b-nav-item class="bar" href="/page2">Page 2</b-nav-item>
  <b-nav-item class="bar" href="/page3">Page 3</b-nav-item>
  <b-nav-item class="bar" href="/page4">Page 4</b-nav-item>
  </b-navbar-nav>
  </b-navbar>
<img src="../assets/1.png" class="img-fluid mx-auto d-block" width="100%">
</nav>
</div>
</template>

<script>
</script>


<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar.navbar-expand-lg.navbar-light.bg-light{
background-color: #cde8e3!important;
}

.bars {
padding-left:auto;
  padding-right:auto;
}


nav {
padding:0 0 2.5% 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
