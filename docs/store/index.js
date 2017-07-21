/**
 * Created by bingoogolapple on 2017/5/31.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import demo from './modules/demo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
      demo
  },
  strict: debug
})
