<template>
    
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md" style="max-width: 400px;margin:auto;"
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
            hint="List of ingredients"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        ></q-input>

        <!-- <q-input
            filled
            type="number"
            v-model="age"
            label="Your age *"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
            ]"
        ></q-input> -->

        <div>
            <q-btn label="Submit" type="submit" color="primary"></q-btn>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
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
        this.$storeData.recipelist.push({'id': uid(),'name': this.name, 'ingredients': this.ingredients})
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
