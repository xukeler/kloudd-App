import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:{
      age:1
    }
  },
  mutations: {
    show(state){
      console.log(state)
    }
  },
  actions: {}
});
