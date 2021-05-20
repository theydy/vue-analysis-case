<template>
  <div id="app">
    <!-- <A>
      {{ message }}
    </A> -->
    <!-- <B>
      <template #b-slot>{{ message }}</template>
    </B> -->
    <C>
      <template #msg="slotProps">
        {{ slotProps.obj.a }}
        {{ slotProps.obj.b }}
      </template>
    </C>
  </div>
</template>

<script>
/* eslint-disable */
import A from './components/A';
import B from './components/B';
import C from './components/C';

export default {
  name: 'app',
  components: {
    A,
    B,
    C,
  },
  data () {
    return {
      message: 'hello world'
    }
  }
}
</script>
