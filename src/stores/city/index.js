const state = {
  nm: localStorage.getItem('nowNm') || '北京',
  id: localStorage.getItem('nowId') || 1
}

const mutations = {
  CITY_INFO (state, payload) {
    state.nm = payload.nm
    state.id = payload.id
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
