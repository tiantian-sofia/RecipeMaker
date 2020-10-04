const routes = [
  {
    path: '/',
    component: () => import('pages/Layout/Index.vue'),
    children: [
      { path: '', component: () => import('pages/Login/Index.vue') },
      { path: '/addRecipe', component: () => import('pages/Recipe/Index.vue')},
      { path: '/thisWeek', component: () => import('pages/ThisWeek/Index.vue')},
      { path: '/allRecipes', component: () => import('pages/Recipes/Index.vue')},
      { path: '/shoppingCart', component: () => import('pages/ShoppingCart/Index.vue')},
      { path: '/searchRecipe', component: () => import('pages/Search/Index.vue')},
    ],
  },
  // {
  //   path: '/login',
  //   component: () => import('pages/Login/Index.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
