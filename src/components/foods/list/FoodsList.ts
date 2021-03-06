import { Component, Vue } from 'vue-property-decorator';
import { FoodInfo } from '@/utils/utils.ts'; // for interfacing type strict
import store from '@/services/store.ts';

@Component
export default class FoodList extends Vue {

  public dialogEdit: boolean = false;
  public dialogDelete: boolean = false;
  public dialogAddFood: boolean = false;
  public foodDetail: FoodInfo = {} as FoodInfo;

  get aDatas() { return store.state.afterFoodDatas; }
  get fDatas() { return store.state.foodDatas; }
  get isFArchived() { return store.state.isArchived; }

  public headers = [
    {
      text: 'Dessert (100g serving)',
      align: 'left',
      sortable: true,
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
  ];

  public desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 200,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 200,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 300,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7%',
    },
    {
      name: 'Cupcake',
      calories: 300,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8%',
    },
    {
      name: 'Gingerbread',
      calories: 400,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16%',
    },
    {
      name: 'Jelly bean',
      calories: 400,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0%',
    },
    {
      name: 'Lollipop',
      calories: 400,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2%',
    },
    {
      name: 'Honeycomb',
      calories: 400,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45%',
    },
    {
      name: 'Donut',
      calories: 500,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 500,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6%',
    },
  ];

  public updateDesserts: any;
  constructor() {
    super();
}

  public mounted() {
    store.commit('SET_ORIGINAL_FOOD_DATAS', this.desserts);
    store.commit('SET_AFTER_FOOD_DATAS', this.desserts);
    store.commit('SET_ISARCHIVED', false);
  }

  public editRecordDialog(info: FoodInfo, index: number) {
    this.dialogEdit = true;
    this.foodDetail = info;
  }

  public deleteRecordDialog(info: FoodInfo, index: number) {
    this.dialogDelete = true;
    this.foodDetail = info;
  }

  public deleteSelectedRecord(index: number) {
    this.dialogDelete = false;
    if (index > -1) {
      this.desserts.splice(index, 1);
    }
    store.commit('SET_ISARCHIVED', true);
  }

  public editSelectedRecord(info: FoodInfo, index: number) {
    this.dialogEdit = false;
  }
}
