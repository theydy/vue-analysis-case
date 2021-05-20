<template>
  <div class="C">
    <slot name="msg" :obj="obj" />
  </div>
</template>

<script>
export default {
  name: "C",
  data () {
    return {
      obj: {
        a: 111,
        b: 222,
      }
    };
  }
}
</script>

<style lang="less" scoped>

</style>