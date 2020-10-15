// import something here
import Vue from 'vue'
import { uid } from 'quasar'
class storeData {
    constructor(storeData) {
        this.storeData = storeData
    }
    get userName(){
        return this.storeData.userName
    }
    set userName(userName){
        this.storeData.userName = userName
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
    get recommendRecipes(){
        return this.storeData.recommendRecipes
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
    setRecipe(recipe){
        this.storeData.recipelist.push(recipe)
    }
    selectRecipe(item){
        this.setRecipe({'id': uid(),'name': item.name, 'ingredients': item.ingredients})
        this.storeData.recommendRecipes.find(el => el.name === item.name).selected = true
    }
    unselectRecipe(item) {
        let i =this.storeData.recipelist?.findIndex(el => el.name === item.name)
        if(i >-1){
            this.storeData.recipelist.splice(i, 1)
            this.storeData.recommendRecipes.find(el => el.name === item.name).selected = false
        }
    }
    deleteRecipe(id){
        let i =this.storeData.recipelist?.findIndex(el => el.id === id)
        if(i >-1){
            const name = this.storeData.recipelist.find(el => el.id === id).name
            this.storeData.recipelist.splice(i, 1)
            if(this.storeData.recommendRecipes.find(el => el.name === name)){
                this.storeData.recommendRecipes.find(el => el.name === name).selected = false
            }
        }
    }
    getRecipeById(id){
        let i =this.storeData.thisweek?.findIndex(el => el === id)
        return i
    }
    login(userName){
        this.storeData.userName = userName
    }

}

Vue.prototype.$storeData = new storeData(window.storeData)
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }

