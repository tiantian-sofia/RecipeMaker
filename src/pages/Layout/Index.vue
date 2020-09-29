<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="theme-color text">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/small logo.png">
          </q-avatar>
          Recipe Generator
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
    </q-drawer>

    <q-page-container class="container">
      <router-view />
    </q-page-container>

    <q-footer elevated class="theme-color text" >
      <q-toolbar class="toolbar" >
        <q-toolbar-title class="toolbar-title">
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          Author Tian Tian
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
const linksData = [
  {
    title: 'This week',
    caption: 'what you will eat this week',
    icon: 'stars',
    link: '/thisWeek',
  },
  {
    title: 'Add Recipe',
    caption: 'add a new recipe',
    icon: 'add',
    link: '/addRecipe',
  },
  {
    title: 'Current Recipes',
    caption: 'all recipes',
    icon: 'playlist_add_check',
    link: '/allRecipes',
  },
  {
    title: 'Shopping',
    caption: 'this week shopping list',
    icon: 'shopping_cart',
    link: '/shoppingCart',
  }
];
export default {
  name: 'Layout',
  components: { EssentialLink },
  data () {
    return {
      left: false,
      essentialLinks: linksData,
    }
  }
}
</script>
<style lang="scss">
.theme-color {
  background-color:#fde2ef;
}
.text {
  color: #4a4848;
}
.toolbar {
  min-height: 30px;
  .toolbar-title {
    font-size:14px; 
    text-align: right;
  }
}
.q-item.q-router-link--active {
  color: #ca81b6;
}
.container {
  margin-top: 20px;
}
@media screen and (max-width:$screen-xs) {
  .container {
    margin-top: 0px;
    margin-bottom: 10px;
  }
}
</style>