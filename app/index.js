var pig1 = new Audio('audio/Pig1.mp3');
var pig2 = new Audio('audio/Pig2.mp3');
var pig3 = new Audio('audio/Pig3.mp3');
var pig4 = new Audio('audio/Pig4.mp3');
var pigloop = new Audio('audio/PigLoop.mp3');
var pigtrip = new Audio('audio/PigTrip.mp3');
const cp = " ";

let pigprice = 50
let foodprice = 10
let bank = 200
let pigs = 0
let food = 0
let bankEl = document.getElementById("bank-el")
let pigsEl = document.getElementById("pigs-el")
let foodEl = document.getElementById("food-el")
let statusEl = document.getElementById("status-el")
let playerEl = document.getElementById("player-el")
let bPigEl = document.getElementById("bPig-el")
let bFoodEl = document.getElementById("bFood-el")
let wButt = document.getElementById("win-butt")
let fPigEl = document.getElementById("fPig-el")
let dispEl = document.getElementById("disp-el")
let mistyEl = document.getElementById("misty-el")

bankEl.textContent = "Bank:" + "\u00a0" + "$" + bank
pigsEl.textContent = "Pigs:" + "\u00a0" + pigs
foodEl.textContent = "Food:" + "\u00a0" + food
statusEl.textContent = "Rules: Reach $1000 to win incredible prize"
bPigEl.textContent = "BUY PIG ($50)"
bFoodEl.textContent = "BUY FOOD ($10)"
wButt.style.display = 'none';

function buyPig() {
  pigs = pigs + 1
  bank = bank - pigprice
  bankEl.textContent = "Bank:" + "\u00a0" + "$" + bank
  pigsEl.textContent = "Pigs:" + "\u00a0" + pigs
  statusEl.textContent = "You bought a pig"
  checkBal()
  pig1.play();
}

function buyFood() {
  food = food + 1
  bank = bank - foodprice
  bankEl.textContent = "Bank:" + "\u00a0" + "$" + bank
  foodEl.textContent = "Food:" + "\u00a0" + food
  statusEl.textContent = "You bought some pig food"
  checkBal()
  pig2.play();
}

function feedPig() {

  if (pigs > 0 && food > 2) {
    food = food - 3
    pigs = pigs - 1
    bank = bank + 100
    bankEl.textContent = "Bank:" + "\u00a0" + "$" + bank
    pigsEl.textContent = "Pigs:" + "\u00a0" + pigs
    foodEl.textContent = "Food:" + "\u00a0" + food
    statusEl.textContent = "You sold fat pig to butcher and got $100 !!"
    pigloop.play();
  }
  else if (pigs === 0 && food > 0) {
    statusEl.textContent = "You got no pigs!"
    pig3.play();
  }
  else if (pigs > 0 && food < 3) {
    statusEl.textContent = "Not enough food!"
    pig4.play();
  }
  else {
    statusEl.textContent = "You got no pigs and no food. You shit farmer innit !!"
    pig1.play();
  }
  checkBal()
}

function checkBal() {
  if (bank < -200) {
    pigprice = 40
    bPigEl.textContent = "BUY PIG ($40)"
  }
  else if (bank > 299) {
    pigprice = 60
    bPigEl.textContent = "BUY PIG ($60)"
  }
  else {
    pigprice = 50
    bPigEl.textContent = "BUY PIG ($50)"
  }


  if (bank < -400) {
    foodprice = 5
    bFoodEl.textContent = "BUY FOOD ($5)"
  }
  else if (bank > 1000) {
    wButt.style.display = "block"
    fPigEl.style.display = "none"
    bFoodEl.style.display = "none"
    bPigEl.style.display = "none"
    dispEl.style.display = "none"
    statusEl.style.display = "none"
    mistyEl.style.paddingBottom = "450px"
    pigtrip.play();
  }
  else if (bank > 500) {
    foodprice = 15
    bFoodEl.textContent = "BUY FOOD ($15)"
  }
  else {
    foodprice = 10
    bFoodEl.textContent = "BUY FOOD ($10)"
  }

  if (bank < 0) { bankEl.style.color = 'red'; }
  else if (bank < 500) { bankEl.style.color = "var(--yellow)"; }
  else { bankEl.style.color = "var(--pink)"; }
}

function gooPen() {
  window.open("https://opensea.io/collection/pigfarm");
  location.reload();
}

function reSet() { 
  location.reload();
}
