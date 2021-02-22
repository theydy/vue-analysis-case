<template>
  <div id="app">
    <div>
      {{ obj.a }}
    </div>
    <div>
      {{ obj.b }}
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      obj: {
        a: 1,
        b: 2,
      }
    }
  },
  watch: {
    'obj': {
      handler() {
        // eslint-disable-next-line
        console.log(this.obj);
      },
      deep: true,
    }
  },
  methods: {
    add () {
      this.$set(this.obj, 'key', 'hello');
    }
  }
}
</script>
