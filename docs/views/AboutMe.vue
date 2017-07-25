<template>
  <div class="about-me bga-back-top">
    <article class="markdown-body" v-html="renderedMarkdown"/>
  </div>
</template>
<style lang="scss" scoped>
  .about-me {
    width: calc(100% - 260px); // 兼容 IE 10
    padding: 30px;
    overflow-y: auto;
  }
</style>
<script>
  export default {
    data () {
      return {
        renderedMarkdown: ''
      }
    },
    methods: {
      getReadme () {
        this.$gitHubApi.getReadme(this).then(response => {
          if (response.data) {
            this.renderedMarkdown = this.$marked(response.data)
          }
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getReadme()
      })
    }
  }
</script>
