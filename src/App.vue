<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.val }}</li>
      </ul>
    </div>
    <button @click="change">change</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        items: [
          {id: 0, val: 'A'},
          {id: 1, val: 'B'},
          {id: 2, val: 'C'},
          {id: 3, val: 'D'}
        ]
      }
    },
    methods: {
      change() {
        // 1
        // this.items.reverse().push({id: 4, val: 'E'})
        // 2
        // this.items.splice(2, 0, {id: 4, val: 'E'})
        // 3
        this.items.splice(2, 0, {id: 4, val: 'E'})
        this.items.splice(4, 0, {id: 5, val: 'F'})

      }
    }
  }
</script>
