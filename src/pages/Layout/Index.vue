<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Recipe Maker
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

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-6 text-white" >
      <q-toolbar style="min-height: 30px" >
        <q-toolbar-title style="font-size:14px; text-align: right;">
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
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
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