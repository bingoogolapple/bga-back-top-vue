<template>
  <div class="demo1-container">
    <div class="have-very-long-content bga-backtop">
      <h1>Demo1 - No Footer</h1>
      <h2 v-for="n in 30">have very long content 很长很长的内容{{ n }} </h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo1-container {
    height: calc(100% - 100px);
    text-align: center;

    .have-very-long-content {
      overflow: scroll;
      height: 100%;

      h2 {
        margin-bottom: 80px;
      }
    }
  }
</style>
<script>
  export default {}
</script>
