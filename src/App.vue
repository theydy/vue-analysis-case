<template>
  <div id="app">
    <div v-if="flag">
      {{ msg }}
    </div>
    <div v-else>
      {{ msg1 }}
    </div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      flag: true,
      msg: 'Hello world',
      msg1: 'Hello Vue'
    }
  },
  methods: {
    change () {
      this.msg = Math.random()
    },
    toggle () {
      this.flag = !this.flag
    }
  }
}
</script>
