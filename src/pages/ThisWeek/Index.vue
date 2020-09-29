<template>
  <q-page class="flex-center">
    <div v-if="this.thisweek === null || this.thisweek.length === 0" class="text-display">
      <div v-if="typeof this.$storeData.recipelist === 'undefined' 
      || this.$storeData.recipelist.length < 5" class="text">
        at least add 5 recipes ...
        <q-btn  class="theme-color text btn-display" label="Add Recipe" to="/addRecipe"/>
      </div>
      <div v-else class="text">
        Click the button to know what you will eat this week ...
        <q-btn class="theme-color text btn-display" label="Start" @click="random()"/>
      </div>
    </div>
    <div v-else>
      
      <q-markup-table class="normal-table">
        <thead>
          <tr>
              <th v-for='(week, index) in this.weeks' :key='index' class="text-left text"> {{week}}</th>
          </tr>
        </thead>
      <tbody>
        <tr >
          <td v-for="(item, index) in this.thisweek.filter((el,i)=>i%2===0)" :key="index"  class="text-center text">
            <div class="cell">
              <div class="attribute">Name:<br/></div><div>{{getRecipeById(item).name}}</div>
              <div class="attribute">Ingredients:<br/></div><div>{{getRecipeById(item).ingredients}}<br/></div>
            </div>
          </td>
        </tr>
        <tr >
          <td v-for="(item, index) in this.thisweek.filter((el,i)=>i%2===1)" :key="index"  class="text-center text">
            <div class="cell">
              <div class="attribute">Name:<br/></div><div>{{getRecipeById(item).name}}<br/></div>
              <div class="attribute">Ingredients:<br/></div><div>{{getRecipeById(item).ingredients}}<br/></div>
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-markup-table v-for="(item,index) in this.thisweek.filter((el,i)=>i%2===0)" :key='index' class="mobile-table">
      <thead>
          <tr >
              <th class="text-center text"> {{weeks[index]}}</th>
          </tr>
        </thead>
        <tbody>
         <tr >
          <td class="text-center text">
            <div class="cell">
              <div class="attribute">Name:<br/></div><div>{{getRecipeById(item).name}}<br/></div>
              <div class="attribute">Ingredients:<br/></div><div>{{getRecipeById(item).ingredients}}<br/></div>
            </div>
          </td>
        </tr>
        <tr >
          <td class="text-center">
            <div class="cell">
              <div class="attribute">Name:<br/></div><div>{{getRecipeById(thisweek[index*2+1]).name}}</div>
              <div class="attribute">Ingredients:<br/></div><div>{{getRecipeById(thisweek[index*2+1]).ingredients}}<br/></div>
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-btn class="theme-color text re-btn-display" label="Re Start" @click="random()"/>
    </div>
  </q-page>
</template>

<script>
import { getRandomRecipes, Random, getThisWeekRecipes, getShoppinglist } from '../../tools/randomRecipe.js';
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
     //let randomlist = getRandomRecipes(this.$storeData.recipelist)
      this.thisweek = getThisWeekRecipes(this.$storeData.recipelist)
      this.$storeData.setThisweek(this.thisweek)
      let shoppinglist = getShoppinglist(this.thisweek,this.$storeData.recipelist )
      this.$storeData.setShoppinglist(shoppinglist)
    },
    getRecipeById(id){
      return this.$storeData.recipelist.find(el=>el.id ===id)
    }
  }
  
};
</script>
<style lang="scss">
  .mobile-table{
    display: none;
  } 
  .q-table th {
    font-size: 16px;
    font-weight: 500;
    background-color: #eaebf3;
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
  .re-btn-display {
    margin-top: 10px;
    margin-left: 10px;
  }
@media screen and (max-width:$screen-xs) {
  .normal-table{
    display: none;
  } 
  .mobile-table {
    display: block;
  }
  .text-display {
    margin-top: 20px;
    margin-left: 10px;
  }
  .btn-display {
    margin-top: 10px;
    margin-left:10px;
  }
}
</style>
