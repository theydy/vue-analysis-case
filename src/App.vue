<template>
  <div id="app">
    <HelloWorld :flag="flag"></HelloWorld>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  data () {
    return {
      flag: true
    }
  },
  methods: {
    toggle () {
      this.flag = !this.flag
    }
  },
  components: {
    HelloWorld
  }
}
</script>
