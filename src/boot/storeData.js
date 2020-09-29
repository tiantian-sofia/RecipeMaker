// import something here
import Vue from 'vue'
class storeData {
    constructor(storeData) {
        this.storeData = storeData
    }
    get recipelist(){
        return this.storeData.recipelist
    }
    set recipelist(recipelist){
        this.storeData.recipelist = recipelist
    }
    get thisweek(){
        return this.storeData.thisweek
    }
    set thisweek(thisweek){
        this.storeData.thisweek = thisweek
    }
    get shoppinglist(){
        return this.storeData.shoppinglist
    }
    set shoppinglist(shoppinglist){
        this.storeData.shoppinglist = shoppinglist
    }
    get purchasedlist(){
        return this.storeData.purchasedlist
    }
    set purchasedlist(purchasedlist){
        this.storeData.purchasedlist = purchasedlist
    }
    setThisweek(thisweek){
        this.thisweek = thisweek
    }
    setShoppinglist(shoppinglist){
        this.shoppinglist = shoppinglist
    }
    setPurchasedlist(purchasedlist){
        this.purchasedlist = purchasedlist
    }
    getRec(id){
        return this.storeData.recipelist.find(el=>el.id ===id)
    }

}

Vue.prototype.$storeData = new storeData(window.storeData)
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }

