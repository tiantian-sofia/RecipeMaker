<template>
    
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md form"
        >
        <q-input
            filled
            v-model="name"
            label="Recipe name *"
            hint="give a name to your recipe"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        ></q-input>
        <q-input
            filled
            v-model="ingredients"
            label="Ingredients *"
            hint="List of ingredients (Use a space to separate ingredients one by one)"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        ></q-input>
        <div>
            <q-btn label="Submit" type="submit" class="theme-color text"></q-btn>
            <q-btn label="Reset" type="reset"  flat class="q-ml-sm theme-color text"></q-btn>
        </div>
        </q-form>
   
</template>

<script>
import { uid } from 'quasar'
export default {
  name: 'AddRecipe',
  data() {
      return {
          name: '',
          ingredients: '',
      }
  },
  methods: {
      
      onSubmit(){
        this.$storeData.setRecipe({'id': uid(),'name': this.name, 'ingredients': this.ingredients})
        this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
        })
      },
      onReset(){
          this.name = null
          this.ingredients = null
      }
  }
};
</script>
<style lang="scss">
@media screen and (max-width:$screen-xs) {
}
</style>