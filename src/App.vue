<template>
  <div id="app">
    {{ message }}
    <comA></comA>
  </div>
</template>

<script>

let comA = {
  template: '<div>comA</div>'
}
let comB = {
  template: '<div>comB</div>'
}

let mixinA = {
  props: ['type'],
  data () {
    return {
      obj: {
        message: 'mixinA',
        array: [1, 2, 3]
      }
    }
  },
  watch: {
    message () {
      console.log('mixin-message-change')
    }
  },
  created () {
    console.log('mixin-created')
  },
  components: {
    comB
  }
}

export default {
  name: 'app',
  mixins: [mixinA],
  props: {
    'i-value': String,
    'number': Number
  },
  data () {
    return {
      message: 'hello world',
      obj: {
        val: 1,
        type: 'number'
      }
    }
  },
  watch: {
    message () {
      console.log('app-message-change')
    }
  },
  created () {
    console.log('app-created')
  },
  components: {
    comA
  }
}
</script>
