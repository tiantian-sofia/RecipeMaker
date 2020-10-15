<template>
  <q-page class="flex-center">
    <q-markup-table class="normal-table">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Ingredients</th>
          <th class="text-left">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.recipelist" :key="index">
          <td class="text-left">{{item.name}}</td>
          <td class="text-left">{{item.ingredients}}</td>
          <td>
               <q-btn :key="item.id" round class="bacbtn" @click="del(item.id)" size="mid" icon="delete"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-markup-table class="mobile-table">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.recipelist" :key="index">
          <td class="text-left">{{item.name}}</td>
          <td>
               <q-btn :key="item.id" round class="bacbtn" @click="del(item.id)" size="mid" icon="delete"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  name: 'Recipes',
  data() {
    return {
      recipelist: this.$storeData.recipelist
    }
  },
  methods: {
    del(id){
      const i = this.$storeData.getRecipeById(id)
      if(i >-1){
        alert("You cannot delete the recipe due to it is in this week recipes")
      }else{
        this.$storeData.deleteRecipe(id)
      }
    }
  }
};
</script>
<style lang="scss">
.mobile-table{
    display: none;
  } 
.bacbtn {
  background-color: #fde2ef;
  color: #726f6f;
}
@media screen and (max-width:$screen-xs) {
  .normal-table{
    display: none;
  } 
  .mobile-table {
    display: block;
  }
}
</style>
