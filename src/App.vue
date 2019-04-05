<template>
  <div id="app">
    {{ obj.value.a[0] }}
    <button @click="click">
      click 
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      obj: {
        value: {
          a: [1, [2,3]]
        }
      }
    }
  },
  methods: {
    click () {
      this.$set(this.obj.value.a, 1, 5);
      /**
       * 修改数组中一个 template 里没有用到的兄弟属性也会触发视图的重新渲染，
       * 但是对象的不会。
       * 因为 Array 的收集依赖不同于 Object。
       * 在 template 中使用了数组的话，除非这个数组是一个 Object 的直接的属性，才会正常收集依赖。
       * 而 array[0] 这样操作只触发了 array 的 getter，而没有触发 array[0] 这一层的 getter
       * 这会造成当修改 array[0] 触发更新时，并没有对应的 watcher 更新。
       * 所以遍历 Array + 递归调用 dependArray 手动收集依赖，
       * 这就会造成假如 template 中没有用到 array[1]，但是修改了 array[1] 后会重新渲染视图，
       * 因为 dependArray 使得 array 下的所有属性都收集了当前的 watcher 。
       */
      console.log(this.obj.value.a);
    }
  },
  mounted () {
    // debugger
  }
}
</script>
