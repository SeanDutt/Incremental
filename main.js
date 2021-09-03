let clicker = document.getElementById("clicker")
let total = document.getElementById("total")
let shopList = document.getElementById("shop")
let incomeTracker = document.getElementById("income")

/* Saves gamedata */

money = total.innerText,
income = 1.0


/* Runs tick each second to add income to total */
window.setInterval(function(){
  total.innerText = tick()
}, 1000)

/* Runs tick to add income to total each click */
clicker.addEventListener('click', function(){
  total.innerText = tick()  
})

/* Returns the total plus income */
function tick(){
  incomeTracker.innerText = income
  return parseInt(total.innerText) + income
}

/* Create the shop item object */
function createShopItem(name, price){
  this.name = name;
  this.price = price * 10;
  this.value = price;
  return this
}

/* Create an HTML element for the shop item */
function createShopDiv(object){
  let shopItem = document.createElement("div")
  shopItem.className = "shop-item"
  shopItem.id = object.name
  shopItem.innerText = `Buy: ${object.name}\nProvides: $${object.value}/sec.\n Costs: $${object.price}.`
  shopItem.addEventListener('click', function(){
    purchaseItem(shopItem)
  })
  return shopItem
}

/* Purchases an item, deducting price from total, increasing price of next purchase, and increasing income by value */
function purchaseItem(item){
  if(total.innerText>=this.price){
    console.log(this.price)
    total.innerText = total.innerText - this.price
    income = income + this.value
    this.price = this.price * 1.1
    return true
  }
  else{
    console.log("Not enough money")
  }
}

/* Creates a default shop item when game starts */
window.onload = function(){
  shopList.appendChild(createShopDiv(createShopItem('House',1)))
}