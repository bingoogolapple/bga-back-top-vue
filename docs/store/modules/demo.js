/**
 * Created by bingoogolapple on 2017/5/31.
 */
import { makeAction } from '../util'

const SET_SDF = 'SET_SDF'

const state = {
  sdf: null
}

const mutations = {
  [SET_SDF] (state, sdf) {
    state.sdf = sdf
  }
}

const actions = {
  setSdf: makeAction(SET_SDF)
}

const getters = {
  sdf: (state) => {
    return state.sdf
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
