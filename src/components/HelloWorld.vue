<template>
  <div v-if="flag" class="hello">
    Hello world
  </div>
  <p v-else class="xx">
    xxxxxxxx
  </p>
</template>

<script>
export default {
  props: {
    flag: {
      type: Boolean,
      default: true
    }
  }
}
</script>

