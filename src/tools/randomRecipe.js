export function getThisWeekRecipes(recipelist){
  let randomlist = getRandomRecipes(recipelist)
  let thisWeek = new Array
  let removedlist = new Array
  for(let i = 0; i<14; i++){
      if(randomlist.length === 0){
          randomlist = removedlist
      }
      let r = Random(0, randomlist.length-1)
      thisWeek.push(randomlist[r])
      removedlist.push(randomlist.splice(r, 1)[0])
      
  }
  return thisWeek

}
export function getRandomRecipes(recipelist) {
    let randomlist = new Array
      for(let i = 0; i < recipelist.length; i++){
        randomlist.push(recipelist[i].id)
      }
      return randomlist.sort(function(){return 0.5 - Math.random();})
      
}



export function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

export function getShoppinglist(thisweek, recipelist){
    let shoppinglist = new Set
    thisweek.forEach((el) => {
        const ingredients = recipelist.find(re => re.id === el).ingredients
        ingredients.split(",").forEach(i => {
          shoppinglist.add(i.trim())
        })
      })
    return shoppinglist
}
