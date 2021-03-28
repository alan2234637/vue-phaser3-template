<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <Game />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Game from '@/components/Game'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Game
  }
}
</script>
