<template>
  <q-page class="flex-center">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Items</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.$storeData.shoppinglist" :key="index">
          <td class="text-center">{{item}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  name: 'ShoppingCart',
};
</script>
