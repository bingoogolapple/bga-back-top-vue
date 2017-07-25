<template>
  <div class="demo-container">
    <ul>
      <router-link class="mr30" tag="li" :to="{name:'Demo1'}">Demo1</router-link>
      <router-link class="mr30" tag="li" :to="{name:'Demo2'}">Demo2</router-link>
    </ul>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>
  .demo-container {
    width: calc(100% - 200px); // 兼容 IE 10
    display: flex;
    flex-direction: column;
    height: 100%;
    ul {
      flex: 0 0 99px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #eeeeee;
      li {
        font-size: 30px;
        color: #7b79e5;
        &:hover {
          color: #ba6fda;
          cursor: pointer;
        }
      }
    }
  }
</style>
<script>
  export default {}
</script>
