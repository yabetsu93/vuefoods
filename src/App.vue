<template>
  <v-app>
    <v-content>
      <Foods/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Foods from '@/components/foods/list/FoodsList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Foods,
  },
  data: () => ({
    //
  }),
});
</script>
