// Arrays
var fruit = [
  "&#127813;",
  "&#127814;",
  "&#127815;",
  "&#127816;",
  "&#127817;",
  "&#127818;",
  "&#127819;",
  "&#127820;",
  "&#127821;",
  "&#127822;",
  "&#127823;",
  "&#127824;",
  "&#127825;",
  "&#127826;",
  "&#127827;"
];
let teller = 5;

var rand1 = fruit[Math.floor(Math.random() * fruit.length)];
var rand2 = fruit[Math.floor(Math.random() * fruit.length)];
var rand3 = fruit[Math.floor(Math.random() * fruit.length)];

document.getElementById('fruit1').innerHTML = rand1;
document.getElementById('fruit2').innerHTML = rand2;
document.getElementById('fruit3').innerHTML = rand3;

document.getElementById('teller').innerHTML = "Aantal pogingen: " + teller;

// Functie voor random fruit
function myFunction() {
  var rand1 = fruit[Math.floor(Math.random() * fruit.length)];
  var rand2 = fruit[Math.floor(Math.random() * fruit.length)];
  var rand3 = fruit[Math.floor(Math.random() * fruit.length)];

  document.getElementById('fruit1').innerHTML = rand1;
  document.getElementById('fruit2').innerHTML = rand2;
  document.getElementById('fruit3').innerHTML = rand3;
  
  // Aftellen
  if (teller == 0) {
    document.getElementById('teller').innerHTML = "Maximum aantal pogingen bereikt!";
    teller = 5;
    document.getElementById('myButton').innerHTML = "Probeer opnieuw"
  } else {
    document.getElementById('myButton').innerHTML = "Draaien"
    document.getElementById('teller').innerHTML = "Aantal pogingen: " + teller;
    --teller;
  }


}
