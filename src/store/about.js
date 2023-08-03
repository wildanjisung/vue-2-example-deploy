const state = () => ({
  angka: 15,
  info: '',
});

const mutations = {
  setAngka(state, param) {
    state.angka = param
  },
  setInfo(state, param) {
    state.info = param
  }
};

const actions = {
  changeAngkaValue(store, param) {
    if (param < 100) {
      store.commit("setAngka", param)
      store.commit("setInfo", '')
    } else {
      store.commit("setInfo", 'input tidak boleh lebih dari 100')
    }
  }
};

export default {
  state,
  mutations,
  actions,
}