<template>
  <div class="app">
    <left-layout class="left-container"/>
    <router-view/>

    <bga-back-top :threshold="150" :right="640" :bottom="60" :width="40" :height="40"
                 :imgUrl="'assets/bga-back-top-normal.png'"/>

    <bga-back-top :threshold="150" :right="560" :bottom="60" :width="40" :height="40" :imgCss="'bga-back-top-img'"/>

    <bga-back-top :threshold="150" :right="480" :bottom="60" :width="40" :height="40">
      <img class="bga-back-top-img" style="width: 100%; height: 100%;"/>
    </bga-back-top>

    <bga-back-top :threshold="150" :right="400" :bottom="60" :width="40" :height="40" :svgMajorColor="'#7b79e5'"
                 :svgType="'circle_border_arrow'"/>

    <bga-back-top :threshold="150" :right="320" :bottom="60" :width="40" :height="40" :svgMajorColor="'#7b79e5'"
                 :svgType="'circle_fill_arrow'"/>

    <bga-back-top :threshold="150" :right="240" :bottom="60" :width="40" :height="40" :svgMajorColor="'#7b79e5'"
                 :svgMinorColor="'#ba6fda'" :svgType="'rocket_smoke'"/>

    <bga-back-top :threshold="150" :right="160" :bottom="60" :width="40" :height="40" :svgMajorColor="'#7b79e5'"
                 :svgMinorColor="'#ba6fda'" :svgType="'rocket'"/>

    <bga-back-top :threshold="150" :right="80" :bottom="60" :width="40" :height="40">
      <svg width="40" height="40" viewBox="0 0 1024 1024">
        <!-- 火箭外形 -->
        <path fill="#7b79e5"
              d="M960 768l-128-73.12c0-64.432 0-128.752 0-182.88 0-192-128-384-320-512C320 128 192 320 192 512c0 54.128 0 118.432 0 182.88L64 768c-38.816 20.32-64 47.632-64 83.008L0 960c0 35.376 28.624 64 64 64l896 0c35.376 0 64-28.624 64-64l0-108.992C1024 815.632 994 790 960 768zM896 896 128 896l0-17.12 192-109.68L320 512c0-119.936 71.872-249.376 192-351.872C632.128 262.624 704 392.064 704 512l0 257.184 189.184 108.064c0.992 0.624 1.936 1.248 2.816 1.872L896 896z"
              p-id="5019"/>
        <!-- 中间圆点 -->
        <path fill="#ba6fda" d="M512 448m-64 0a4 4 0 1 0 128 0 4 4 0 1 0-128 0Z" p-id="5020"/>
      </svg>
    </bga-back-top>
  </div>
</template>
<style lang="scss">
  .app {
    display: flex;
    height: 100%;
    overflow: hidden;
  }

  .left-container {
    flex: 0 0 199px;
    border-right: 1px solid #eeeeee;
  }

  // 滚动到顶部组件普通状态和鼠标悬停状态时的图片样式
  .bga-back-top-img {
    content: url("assets/bga-back-top-normal.png");
    &:hover {
      content: url("assets/bga-back-top-hover.png");
    }
  }
</style>
<script>
  import LeftLayout from './components/LeftLayout.vue'
  import { mapActions } from 'vuex'

  export default {
    components: {
      LeftLayout
    },
    methods: {
      ...mapActions([
        'setLabels',
        'setGitHubUser'
      ])
    },
    mounted () {
      this.$nextTick(() => {
        this.$gitHubApi.getGitHubUser(this).then(response => {
          this.setGitHubUser(response.data)
        })
      })
    }
  }
</script>
