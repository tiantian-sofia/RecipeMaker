<template>
  <q-page class="flex-center" style="margin-top: 30px">
    <div v-if="this.thisweek === null || this.thisweek.length === 0">
      <div v-if="typeof this.$storeData.recipelist === 'undefined'">
        {{this.$storeData.recipelist}}
      </div>
      <div v-else-if="this.$storeData.recipelist.length < 5">
        at least add 5 recipes ...
        <q-btn  class="theme text" label="Add Recipe" to="/addRecipe"/>
      </div>
      <div v-else class="text">
        Click the button to know what you will eat this week ...
        <q-btn class="theme text" label="Start" @click="random()"/>
      </div>
    </div>
    <div v-else>
      
      <q-markup-table >
        <thead>
          <tr >
              <th v-for='(week, index) in this.weeks' :key='index' class="text-left biaoti"> {{week}}</th>
          </tr>
        </thead>
      <tbody>
        <tr >
          <td v-for="(item, index) in this.thisweek.filter((el,i)=>i%2===0)" :key="index"  class="text-center">
            <div class="cell">
              <div class="attribute">Name:<br/></div><div>{{getRecipeById(item).name}}</div>
              <div class="attribute">Ingredients:<br/></div><div>{{getRecipeById(item).ingredients}}<br/></div>
            </div>
          </td>
        </tr>
        <tr >
          <td v-for="(item, index) in this.thisweek.filter((el,i)=>i%2===1)" :key="index"  class="text-center">
            <div class="cell">
              <div class="attribute">Name:<br/></div><div>{{getRecipeById(item).name}}<br/></div>
              <div class="attribute">Ingredients:<br/></div><div>{{getRecipeById(item).ingredients}}<br/></div>
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-btn class="theme text" label="Re Start" @click="random()"/>
    </div>
  </q-page>
</template>

<script>
import { getRandomRecipes, Random, getThisWeekRecipes } from '../../tools/randomRecipe.js';
const weeks =[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wensday',
  'Thursday',
  'Firday',
  'Saturday'
]
export default {

  name: 'ThisWeek',
  data() {
    return {
      weeks: weeks,
      thisweek: this.$storeData.thisweek
    }
  },
  created() {
  },
  methods: {
    random(){
      let randomlist = getRandomRecipes(this.$storeData.recipelist)
      this.thisweek = getThisWeekRecipes(randomlist)
      this.$storeData.thisweek = this.thisweek
     //this.$router.push("/thisWeek");
    },
    getRecipeById(id){
      return this.$storeData.recipelist.find(el=>el.id ===id)
    }
  }
  
};
</script>
<style lang="scss">
.q-table th {
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(219, 224, 233);
}
.cell {
  width:100%;
  white-space:normal;
  word-wrap:break-word;
  word-break:break-all;
  text-align:left;
  .attribute {
    font-weight: 450;
  }
}
</style>
