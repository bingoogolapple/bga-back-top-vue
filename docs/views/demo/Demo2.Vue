<template>
  <div class="demo2-container">
    <div class="have-very-long-content bga-back-top">
      <h1>Demo2 - Have Footer</h1>
      <h2 v-for="n in 30">have footer and very long content 很长很长的内容{{ n }} </h2>
    </div>
    <div class="footer">
      <h1>Demo - Footer</h1>
      <span style="float: left; margin-left: 10px;" @click="backTop()">通过 JS 代码 this.$bgaBacktop() 主动触发滚动到顶部</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo2-container {
    height: calc(100% - 100px);
    text-align: center;

    .have-very-long-content {
      overflow: scroll;
      height: calc(100% - 200px);
      h2 {
        margin-bottom: 80px;
      }
    }

    .footer {
      border-top: 1px solid #eeeeee;
      height: 199px;
      line-height: 100px;
      span {
        font-size: 13px;
        height: 40px;
        line-height: 40px;
        padding: 0px 10px;
        color: #ffffff;
        background-color: #7b79e5;
        border-radius: 4px;
        &:hover {
          background-color: #ba6fda;
          cursor: pointer;
        }
      }
    }
  }
</style>
<script>
  export default {
    methods: {
      backTop () {
        this.$bgaBackTop()
      }
    }
  }
</script>
