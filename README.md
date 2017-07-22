# bga-back-top-vue

[![npm](https://img.shields.io/npm/v/bga-back-top-vue.svg) ![npm](https://img.shields.io/npm/dm/bga-back-top-vue.svg)](https://www.npmjs.com/package/bga-back-top-vue)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/apertureless/vue-parallax/blob/master/LICENSE.txt)

基于 Vue 2.x 实现的「滚动可滚动组件到顶部」的组件，支持多种自定义属性配置，以及通过 slot 插桩的方式深度定制 BgaBackTop 的内容。整个项目只需要在根组件中添加一次即可

## 目录

* [效果图](#效果图)
* [基本使用](#基本使用)
* [属性说明](#属性说明)
* [高级用法](#高级用法)
* [关于我](#关于我)
* [打赏支持](#打赏支持)

## 效果图 [Demo](http://www.bingoogolapple.cn/bga-back-top-vue)

![demo](https://user-images.githubusercontent.com/8949716/28492106-4434d8cc-6f2f-11e7-860d-1bb11e5040ba.gif)

## 基本使用

> 1.安装依赖

```
npm install --save bga-back-top-vue
```
> 2.在入口 js 文件中导入。我这里是 main.js

```JavaScript
import BgaBackTop from 'bga-back-top-vue'
Vue.use(BgaBackTop)
```
> 3.在根组件中使用，整个项目只需要在根组件中添加一次即可。我这里是 App.vue

```html
<template>
  <div>
    <left-layout/>
    <router-view/>

    <!-- 在根组件中使用，整个项目只需要在这里添加一次即可 -->
    <bga-back-top :threshold="150" :right="160" :bottom="60" :width="40" :height="40" :svgMajorColor="'#7b79e5'"
                 :svgMinorColor="'#ba6fda'" :svgType="'rocket'"/>
  </div>
</template>
```
> 4.为需要被滚动的标签添加「bga-back-top」样式

```html
<template>
  <div class="demo1-container">
    <!-- 该标签里有很长很长的内容，为其添加滚动到顶部的功能，添加「bga-back-top」样式 -->
    <div class="have-very-long-content bga-back-top">
      <h2 v-for="n in 30">have very long content 很长很长的内容{{ n }} </h2>
    </div>
  </div>
</template>
```

## 属性说明

#### 图片模式相关属性说明

属性名 | 说明 | 默认值
:----------- | :----------- | :-----------
imgUrl | BgaBackTop 为图片模式时图片的 url，如果设置了该属性，则会忽略 svg 开头的相关属性 | null
imgCss | BgaBackTop 为图片模式时图片的样式，如果设置了该属性，则会忽略 svg 开头的相关属性 | null

#### SVG 模式相关属性说明

属性名 | 说明 | 默认值
:----------- | :----------- | :-----------
svgMajorColor | BgaBackTop 为 SVG 模式时的主要颜色 | #bfbfbf
svgMinorColor | BgaBackTop 为 SVG 模式时的次要颜色 | #bfbfbf
svgType | SVG 模式的样式类型，包括 circle_border_arrow、circle_fill_arrow、rocket_smoke、rocket | rocket

#### 公共属性说明

属性名 | 说明 | 默认值
:----------- | :----------- | :-----------
right | BgaBackTop 右边缘离浏览器右边缘的距离，单位为 px，但是开发者只需要写数字就行 | 30
bottom | BgaBackTop 下边缘离浏览器下边缘的距离，单位为 px，但是开发者只需要写数字就行 | 60
width | BgaBackTop 宽度，单位为 px，但是开发者只需要写数字就行 | 48
height | BgaBackTop 高度，单位为 px，但是开发者只需要写数字就行 | 48
threshold | 可滚动控件滚动偏移多少后才显示 BgaBackTop，必须大于 100 | 150
animationTime | 可滚动控件滚动到顶部的动画时间，单位为毫秒，100 到 200 之间 | 150

## 高级用法

#### 1.通过设置 imgCss 属性设置样式来支持鼠标 hover 状态时切换图片

```
<template>
  <div>
    <left-layout/>
    <router-view class="main-container"/>

    <!-- 在根组件中使用，整个项目只需要在这里添加一次即可 -->
    <bga-back-top :threshold="150" :right="560" :bottom="60" :width="40" :height="40" :imgCss="'bga-back-top-img'"/>
  </div>
</template>
<style lang="scss">
  // BgaBackTop 普通状态和鼠标悬停状态时的图片样式
  .bga-back-top-img {
    content: url("/assets/bga-back-top-normal.png");
    &:hover {
      content: url("/assets/bga-back-top-hover.png");
    }
  }
</style>
```
#### 2.通过 slot 插桩的方式定制 BgaBackTop 的内容，如果为其添加了子组件则不会显示默认样式。下面演示插入自定义 SVG 和 img。当然开发者也可以插入其他子组件

> 插入自定义 SVG。可以到 [阿里巴巴矢量图标库](http://www.iconfont.cn) 中下载 SVG

```
<template>
  <div>
    <left-layout/>
    <router-view class="main-container"/>

    <!-- 在根组件中使用，整个项目只需要在这里添加一次即可 -->
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
```
> 插入自定义图片

```
<template>
  <div>
    <left-layout/>
    <router-view class="main-container"/>

    <!-- 在根组件中使用，整个项目只需要在这里添加一次即可 -->
    <bga-back-top :threshold="150" :right="480" :bottom="60" :width="40" :height="40">
      <img class="bga-back-top-img" style="width: 100%; height: 100%;"/>
    </bga-back-top>
  </div>
</template>
<style lang="scss">
  // BgaBackTop 普通状态和鼠标悬停状态时的图片样式
  .bga-back-top-img {
    content: url("/assets/bga-back-top-normal.png");
    &:hover {
      content: url("/assets/bga-back-top-hover.png");
    }
  }
</style>
```

#### 3.可以在任意的 Vue 组件中通过 JavaScript 代码主动触发可滚动组件滚动到顶部。应用场景：滚动一定距离后重新加载了网络数据，加载完数据后将可滚动组件滚动到顶部

```JavaScript
// 在 BgaBackTop 内部已经为 Vue.prototype 添加了全局方法 $bgaBackTop，因此在 Vue 实例中可以直接通过 this.$bgaBackTop() 来调用该方法
this.$bgaBackTop()
```

## 关于我

| 新浪微博 | 个人主页 | 邮箱 | BGA系列开源库QQ群
| ------------ | ------------- | ------------ | ------------ |
| <a href="http://weibo.com/bingoogol" target="_blank">bingoogolapple</a> | <a  href="http://www.bingoogolapple.cn" target="_blank">bingoogolapple.cn</a>  | <a href="mailto:bingoogolapple@gmail.com" target="_blank">bingoogolapple@gmail.com</a> | ![BGA_CODE_CLUB](http://7xk9dj.com1.z0.glb.clouddn.com/BGA_CODE_CLUB.png?imageView2/2/w/200) |

## 打赏支持

如果您觉得 BGA 系列开源库帮你节省了大量的开发时间，请扫描下方的二维码随意打赏，要是能打赏个 10.24 :monkey_face:就太:thumbsup:了。您的支持将鼓励我继续创作:octocat:

如果您目前正打算购买通往墙外的梯子，可以使用我的邀请码「YFQ9Q3B」购买 [Lantern](https://github.com/getlantern/forum)，双方都赠送三个月的专业版使用时间:beers:

<p align="center">
  <img src="http://7xk9dj.com1.z0.glb.clouddn.com/bga_pay.png" width="450">
</p>

## License

[MIT](http://opensource.org/licenses/MIT)
