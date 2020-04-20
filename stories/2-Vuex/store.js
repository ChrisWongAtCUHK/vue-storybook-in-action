import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the store share the same state
export default new Vuex.Store({
  state: {
    task: {
      id: 1,
      title: 'The is a same task',
      counter: 0
    }
  },
  mutations: {
    TASK_COUNTER_INCREMENT(state) {
      state.task.counter = state.task.counter + 1
    }
  },
  actions: {
    taskCounterIncrement({ commit }) {
      commit('TASK_COUNTER_INCREMENT')
    }
  }
})
