import {merge} from "../../common/utils/utils";

const state = {
  user: {
    "code": "",
    "sourceType": "",
    "id": "",
    "agentName": "",
    "agentType": "",
    "phone": "",
    "isLeader": "",
    "verificationCode": "",
    "agree": true,
    "withdrawStatus": 0
  },
  wx: {
    "openid": "",
    "unionId": "",
  }
};
const getters = {
  user: state => state.user,
  wx: state => state.wx,
};
const mutations = {
  setUser(state, options) {
    merge(state.user, options)
  },
  setWx(state, options) {
    merge(state.wx, options)
  },
};
const actions = {
  async changeUser({state, commit}, val) {
    commit('setUser', val);
  },
  async setWx({state, commit}, val) {
    commit('setUser', val);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
