//Hoisting and Functions below
name = "Billy";
var name;

console.log(name);

setName();
function setName() {
  setName();
  function setName() {
    var name = "Covalence";
    console.log(name);
  }

  //Average
}

let avrge = findAvg(8, 20);
console.log(avrge);
function findAvg(a, b) {
  var avrge = (a + b) / 2;
  return avrge;
}

//Now that we have exercised hoisting, let's practice scoping.

let fruits = ["pear", "apple", "grape"];

function printFruit() {
  let favFruit = fruits[2];

  console.log(fruits[0]);
  printFavfruit();

  function printFavfruit() {
    console.log(favFruit);
    
  }
  console.log(leastFav);
  
}
let leastFav = fruits[1];
itslit();
function itslit() {
    console.log("Hello,Billy")
}
alertpopup();
function alertpopup()
{
    alert("ITS LITT");
}


printFruit();
printFavFruit();
