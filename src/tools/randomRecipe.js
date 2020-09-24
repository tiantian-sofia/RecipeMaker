export  function getRandomRecipes(recipelist) {
    let randomlist = new Array
      for(let i = 0; i < recipelist.length; i++){
        randomlist.push(recipelist[i].id)
      }
      return randomlist.sort(function(){return 0.5 - Math.random();})
      
}

export function getThisWeekRecipes(randomlist){
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

export function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}