import Vue from 'vue';
import Vuex from 'vuex';
import {FoodInfo} from '@/utils/utils.ts';

Vue.use(Vuex);

const store =  new Vuex.Store({
  state: {
    foodDatas: new Array(),
    afterFoodDatas: new Array(),
  },
  mutations: {
    SET_ORIGINAL_FOOD_DATAS: (state: any, payload: FoodInfo) => Vue.set(state, 'foodDatas', payload),
    SET_AFTER_FOOD_DATAS: (state: any, payload: FoodInfo) => Vue.set(state, 'afterFoodDatas', payload),
  },
  actions: {

  },
});

export default store;
