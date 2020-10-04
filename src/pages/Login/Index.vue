<template>
  <div class="">
    <q-card class="my-card">
        <q-card-section>
        <div><q-icon name="stars" class="Ic"/></div>
        <div >what you will eat this week</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
        <q-card-section>
        <div><q-icon name="add" class="Ic"/></div>
        <div >add a new recipe</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
        <q-card-section>
        <div><q-icon name="search" class="Ic"/></div>
        <div >search recipes online</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
        <q-card-section>
        <div><q-icon name="playlist_add_check" class="Ic"/></div>
        <div >saved recipes</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
        <q-card-section>
        <div><q-icon name="shopping_cart" class="Ic"/></div>
        <div >this week shopping list</div>
      </q-card-section>
    </q-card>   
     <q-form
        @submit="onSubmit"
        class="form"
        >
        <q-input
            filled
            v-model="username"
            label="user name *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            class="Inp"
        ></q-input>
        <q-input
            filled
            v-model="password"
            label="password"
            type="password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            class="Inp"
        ></q-input>
        <div>
            <q-btn label="Login" type="submit" class="Inp but"></q-btn>
        </div>
        </q-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
          username: '',
          password: '',
      }
  },
  methods: {
      onSubmit(){
        this.$storeData.login(this.username)
        this.$router.push('/thisWeek')
      }
  }
};
</script>
<style lang="scss">
.my-card {
    width: 100%;
    height: 110px;
    background-color: #fde2ef;
    color: #4a4848;
    text-align: center;
}
.Ic {
    font-size: 50px;
}
.Inp {
    background-color: #fde2ef;
    color: #4a4848;
}
.but {
    width: 100%;
    height: 100%;
}
</style>