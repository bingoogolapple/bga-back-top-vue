<template>
  <div class="demo2-container">
    <div class="have-very-long-content bga-backtop">
      <h1>Demo2 - Have Footer</h1>
      <h2 v-for="n in 30">have footer and very long content 很长很长的内容{{ n }} </h2>
    </div>
    <div class="footer">
      <h1>Demo - Footer</h1>
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
    }
  }

  .sweet-code {
    tab-size: 4;
    -webkit-font-smoothing: auto;
    &.inline {
      display: inline-block;
      padding: 0;
      margin: 0;
    }
    .hljs-name,
    .hljs-keyword {
      color: #F92672;
    }
    .hljs-attr {
      color: #A6E22E;
    }
    .hljs-string {
      color: #E6DB74;
    }
    .hljs-comment {
      color: #5C6273;
    }
    .hljs-selector-class {
      color: #66D9EF;
    }
    &.theme-light {
      .hljs-string {
        color: #F49B0F;
      }
      .hljs-attr {
        color: #88B42C;
      }
      .hljs-selector-class {
        color: #4CA7DD;
      }
    }
  }
</style>
<script>
  export default {
    data () {
      return {}
    },
    components: {},
    methods: {},
    mounted () {
      this.$nextTick(() => {
      })
    }
  }
</script>
