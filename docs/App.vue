<template>
  <div>
    <left-layout/>
    <router-view class="main-container"/>
    <!--<bga-backtop :right="30" :bottom="60" :svgColor="'#ff0000'" :imgIcon="'/assets/bga-backtop.png'"/>-->
    <bga-backtop :right="30" :bottom="60" :svgMajorColor="'#ff0000'" :svgMinorColor="'#00ff00'"
                 :svgType="'robot_smoke'"/>
  </div>
</template>
<style lang="scss" scoped>
  .main-container {
    position: fixed;
    left: 200px;
    right: 0px;
    bottom: 0px;
    top: 0px;
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
      this.$nextTick(function () {
        this.$gitHubApi.getGitHubUser(this).then(response => {
          this.setGitHubUser(response.data)
        })
      })
    }
  }
</script>
