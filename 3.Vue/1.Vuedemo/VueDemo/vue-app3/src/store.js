import Vue from 'vue'
import Vuex from 'vuex'

import student from '@/modules/student'
import course from '@/modules/course'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // 公共数据池
    name: 'shanshan',
    age: 18,
    look: 'beautiful'
  },

  modules: {
    course,
    student
  }
  
})
