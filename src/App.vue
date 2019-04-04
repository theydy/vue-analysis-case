<template>
  <div id="app">
    {{ message }}
    <comB></comB>
  </div>
</template>

<script>

let comB = {
  template: '<div>comB</div>'
}

export default {
  name: 'app',
  data () {
    return {
      message: 'hello world'
    }
  },
  components: {
    comB
  }
}
</script>
