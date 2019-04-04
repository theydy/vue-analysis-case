<template>
  <div id="app">
    {{ message }}
    <comA></comA>
  </div>
</template>

<script>
// 普通函数异步组件
let asyncComA = function (resolve, reject) {
  require(['./components/comA'], resolve)
}

// Promise 异步组件
// let asyncComA = () => import('./components/comA')

// 高级异步组件
// let asyncComA = () => ({
//   component: import('./components/comA'),
//   loading: { template: '<div>loading</div>' },
//   error: { template: '<div>error</div>' },
//   delay: 0,
//   timeout: 3000
// })

export default {
  name: 'app',
  data () {
    return {
      message: 'hello world'
    }
  },
  components: {
    comA: asyncComA
  }
}
</script>
