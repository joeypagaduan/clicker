let score = 0;
let clicker = document.getElementById("coffee_cup");
let scoreDisplay = document.getElementById("scored");
let eachClick = 1;
scoreDisplay.innerHTML = score;

//click function
clicker.addEventListener("click", function() {
    score += eachClick;
    scoreDisplay.innerHTML = score;
    showPro1 ();
    showPro2 ();
    showPro3 ();
});
//A Function to refresh my count...Why is it when I use this function it doesn't auto-update?
// let refreshCount = function () {
//     scoreDisplay.innerHTML = score;
// }
// coffees per second
let pro1 = 0;
let pro2 = 0;
let pro3 = 0;
let speed = 0;
let coffeePerSecond = document.getElementById("cps");
// coffeePerSecond.innerHTML = cps;

function speedUpdate () {
    coffeePerSecond = pro1 + pro2 + pro3;
    document.getElementById("cps").innerHTML = coffeePerSecond;
}

///Show/Hide Producers
const chemex = document.querySelector('.producer1');
function showPro1 () {
    if (score < 10) {
        chemex.style.display = 'none';
    } else {
        chemex.style.display = 'flex';
        }
}

const french = document.querySelector('.producer2');
function showPro2 () {
    if (score < 50) {
        french.style.display = 'none';
    } else {
        french.style.display = 'flex';
        }
}

const keurig = document.querySelector('.producer3');
function showPro3 () {
    if (score < 100) {
        keurig.style.display = 'none';
    } else {
        keurig.style.display = 'flex';
        }
}
// function showChemex() {
//     if (score >= 10) {
//         document.getElementById("producer1").style.display = "block";
//     }
// }

//Buying Producers
function qtyUpdate() { //update quantities purchased//
    document.getElementById("chemex_qty").innerHTML = chemexCount;
    document.getElementById("french_qty").innerHTML = frenchCount;
    document.getElementById("keurig_qty").innerHTML = keurigCount;
}
// Buy Producer 1 (Chemex)
let chemexCount = 0;
let buyChemex = document.getElementById("buy_chemex");
let chemexQty = document.getElementById("chemex_qty");
chemexQty.innerHTML = chemexCount;
let chemexPower = document.getElementById("chemex_power");
// let chemexPrice = document.getElementById("chemex_price");

//Enough $$
buyChemex.addEventListener("click", function() {
    if (score >= 10) { //chemexPrice??
        alert("Congratulations on you purchase!");
            score -= 10;
            pro1 += 1;
            eachClick += pro1;
            scoreDisplay.innerHTML = score;
            chemexCount += 1;
            speedUpdate ();
            qtyUpdate();
        } else {
            alert("You don't have enough coffee!")
            }
    })

// Buy Producer 2 (French)
let frenchCount = 0;
let buyFrench = document.getElementById("buy_french");
let frenchQty = document.getElementById("french_qty");
frenchQty.innerHTML = frenchCount;
let frenchPower = document.getElementById("french_power");
// let frenchPrice = document.getElementById("french_price");

//Enough $$
buyFrench.addEventListener("click", function() {
    if (score >= 50) { //frenchPrice??
        alert("Congratulations on you purchase!");
            score -= 50;
            pro2 += 2;
            eachClick += pro2;
            scoreDisplay.innerHTML = score;
            frenchCount += 1;
            speedUpdate ()
            qtyUpdate()
        } else {
            alert("You don't have enough coffee!")
            }
    })


// Buy Producer 3 (Keurig)
let keurigCount = 0;
let buyKeurig = document.getElementById("buy_keurig");
let keurigQty = document.getElementById("keurig_qty");
// keurigQty.innerHTML = pro3;
let keurigPower = document.getElementById("keurig_power");
// let keurigPrice = document.getElementById("keurig_price");

//Enough $$
buyKeurig.addEventListener("click", function() {
    if (score >= 100) { //keurigPrice??
        alert("Congratulations on you purchase!");
            score -= 100;
            pro3 += 5;
            eachClick += pro3;
            scoreDisplay.innerHTML = score;
            keurigCount += 1;
            speedUpdate ();
            qtyUpdate();
        } else {
            alert("You don't have enough coffee!")
            }
    })

setInterval (function() {
    score += pro1;
    score += pro2;
    score += pro3;
    document.getElementById("scored").innerHTML = score;
}, 1000);






showPro1 ();
showPro2 ();
showPro3 ();
