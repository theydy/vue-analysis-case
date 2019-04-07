<template>
  <div id="app">
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <button @click="changeA">change</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  methods: {
    changeA () {
      this.a = Math.random()
    },
    changeB () {
      this.b = Math.random()
    }
  },
  mounted () {
    this.$watch('a', 'changeB')
    // this.$watch 使用函数名无效
  },
  watch: {
    // a: 'changeB'
    // 可以使用函数名
  }
}
</script>
