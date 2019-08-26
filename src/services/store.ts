import Vue from 'vue';
import Vuex from 'vuex';
import {FoodInfo} from '@/utils/utils.ts';

Vue.use(Vuex);

const store =  new Vuex.Store({
  state: {
    foodDatas: [],
    afterFoodDatas: [],
    isArchived: Boolean,
  },
  mutations: {
    SET_ORIGINAL_FOOD_DATAS: (state: any, payload: FoodInfo[]) => Vue.set(state, 'foodDatas', payload),
    SET_AFTER_FOOD_DATAS: (state: any, payload: FoodInfo[]) => Vue.set(state, 'afterFoodDatas', payload),
    SET_ISARCHIVED: (state: any, payload: boolean) => Vue.set(state, 'isArchived', payload),
  },
  actions: {

  },
});

export default store;
