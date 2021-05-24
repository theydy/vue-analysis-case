<template>
  <div>
    <p>{{ name }}</p>
    <p>info:</p>
    <ul>
      <li>{{ info.aa }}</li>
      <li>{{ info.bb }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "A",
  props: {
    name: String,
    info: Object,
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>

</style>