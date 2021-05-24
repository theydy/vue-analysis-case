<template>
  <div id="app">
    <A 
      :name="name"
      :info="info"
    />
    <button @click="changeName">change name</button>
    <button @click="changeInfo">change info</button>
  </div>
</template>

<script>
import A from './components/A';

export default {
  name: 'app',
  components: {
    A,
  },
  data () {
    return {
      name: 'test',
      info: {
        aa: 11,
        bb: 22,
      }
    }
  },
  methods: {
    changeName() {
      this.name = this.name === 'test' ? 'test2' : 'test';
    },
    changeInfo() {
      this.info = this.info.aa === 11 ? {
        aa: 111,
        bb: 222,
      } : {
        aa: 11,
        bb: 22,
      };
    }
  }
}
</script>
