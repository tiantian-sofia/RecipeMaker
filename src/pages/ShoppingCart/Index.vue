<template>
  <q-page class="flex-center">
    <q-markup-table>
      <thead>
        <tr>
        <th class="text-center">Toggle</th>
          <th class="text-center">Shopping List</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.shoppinglist" :key="index">
          <td class="text-center"> <q-toggle v-model="selection" :val="item" color="green"/></td>
          <td class="text-center">{{item}}</td> 
        </tr>
      </tbody>
    </q-markup-table>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Purchased List</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.selection" :key="index">
          <td class="text-center">{{item}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      selection: this.$storeData.purchasedlist,
      shoppinglist: this.$storeData.shoppinglist
    }
  },
  created() {

  },
  watch: {
      selection() {
          this.spliceItem()
      }
  },
  methods: {
      spliceItem(){
          this.$storeData.setPurchasedlist(this.selection)
      }
  }
};
</script>
