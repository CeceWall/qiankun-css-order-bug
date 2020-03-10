<template>
  <div class="home" ref="page">
    <span>my height is {{height}}</span>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      height: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.height = window.getComputedStyle(this.$refs.page).height;
    });
  }
}
</script>

<style>
.home {
  font-size: 20px;
  height: 200px;
}
</style>