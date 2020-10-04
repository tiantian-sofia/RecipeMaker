<template>
  <div class="row items-start q-gutter-md">
      <div class="container" v-for="(item, index) in this.recommendRecipes" :key="index">
        <q-card class="my-card">
        <q-img
            :src="item.img"
            basic
        >
            <div class="absolute-bottom text-subtitle2 text-center">
            {{item.name}}
            </div>
        </q-img>
        <q-card-section align="right">
            <q-btn flat round class="favIcon" v-if="item.selected === true" icon="favorite" @click="unselect(item)"/>
            <q-btn flat round class="favIcon" v-if="item.selected === false" icon="favorite_border" @click="select(item)"/>
        </q-card-section>
        </q-card>
      </div>
  </div>
</template>

<script>
import { uid } from 'quasar'
export default {
  name: 'SearchRecipe',
  data () {
    return {
      recommendRecipes: this.$storeData.recommendRecipes
    }
  },
  methods: {
      select(item){
          this.$storeData.selectRecipe(item)
      },
      unselect(item){
          this.$storeData.unselectRecipe(item)
      }
  }
};
</script>
<style lang="scss">
.my-card {
    width: 300px;
    
}
.favIcon {
    color:  #ca81b6
}
@media screen and (max-width:$screen-xs) {
//   .my-card {
//     width: 100%;
// }
.container {
  width: 100%;
}
.my-card {
    width: 100%;
    height: 350px;
}
}
</style>
