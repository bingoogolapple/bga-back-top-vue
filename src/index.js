var BackTop = require('./components/BgaBackTop.vue')

const BgaBackTop = {
  install: function (Vue) {
    Vue.component('bga-back-top', BackTop)
    Vue.prototype.$bgaBackTop = function () {
      if (Vue.prototype.$bagBacktopInstance) {
        Vue.prototype.$bagBacktopInstance.startScrollToTop()
      }
    }
  }
}

export default BgaBackTop
