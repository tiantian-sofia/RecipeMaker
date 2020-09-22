<template>
    <div style="width: 400px">
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        >
        <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        ></q-input>

        <q-input
            filled
            type="number"
            v-model="age"
            label="Your age *"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
            ]"
        ></q-input>

        <div>
            <q-btn label="Submit" type="submit" color="primary"></q-btn>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
        </div>
        </q-form>
    </div>
</template>

<script>
export default {
  name: 'Recipe',
  data() {
      return {
          name: 'sss',
          age:22,
      }
  },
  created() {
   console.log("sss-----------", this.$storeData)
  },
  methods: {
      onSubmit(){

      },
      onReset(){

      }
  }
};
</script>
