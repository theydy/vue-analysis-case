<template>
  <div id="app">
    <keep-alive>
      <component 
        :is="compName"
      />
    </keep-alive>
    <button @click="change">switch</button>
  </div>
</template>

<script>
import A from './components/A';
import B from './components/B';

export default {
  name: 'app',
  components: {
    A,
    B,
  },
  data () {
    return {
      compName: 'A'
    }
  },
  methods: {
    change() {
      this.compName = this.compName === 'A' ? 'B' : 'A';
    }
  }
}
</script>
