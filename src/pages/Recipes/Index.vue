<template>
  <q-page class="flex-center">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Ingredients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.$storeData.recipelist" :key="index">
          <td class="text-left">{{item.name}}</td>
          <td class="text-left">{{item.ingredients}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  name: 'Recipes',
};
</script>
