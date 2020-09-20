import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    catalogList: []
  },
  mutations: {
    SET_CATALOGLIST_TO_STATE: (state, catalogList) => {
      state.catalogList = catalogList
    }
  },
  actions: {
    GET_CATALOGLIST_FROM_API({commit}) {
      return axios('http://localhost:3000/catalogList', {
        method: 'GET'
      })
          .then((catalogList) => {
            commit('SET_CATALOGLIST_TO_STATE', catalogList.data)
            return catalogList
          })
          .catch((error) => {
            console.log(error)
            return error
          })
    }
  },
  getters:  {
    CATALOGLIST(state) {
      return state.catalogList
    }
  }

});

export default store;