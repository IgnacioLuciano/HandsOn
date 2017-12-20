function totalPrice(sqEdge, pricePerSqFt) {

  return (sqEdge * pricePerSqFt);
};
console.log(totalPrice(10, 100));



let month = "June";
let day = "11";
let year = "1980";
let myBirthday = month + " " + day + "," + year;
console.log(myBirthday);



let age = 15;
if (age < 10) {
  console.log("Not Permitted");
}
else if (age = 15) {
  console.log("Permitted with Parents or anyone over 18")
}
else if (age > 18) {
  console.log("Permitted alone");
}


let param1 = 20;
let param2 = 10;
const Sum1 = (param1, param2) => 20 + 10;
console.log(20 + 10);

const Sum2 = (param1, param2) => (20 + 10) / 2;
console.log(30 / 2);

const Sum3 = (param1, param2) => 20 / 10;
console.log(20 / 10);



let newProduct =
  function (instrument, color, price) {
    this.instrument = instrument;
    this.color = color;
  this.price = price;
};
console.log(newProduct("piano" + "black" + "1000"));


let wishlist =
function (car, bike, boat) {
  this.car = car;
  this.bike = bike;
this.boat = boat;
};
console.log(wishlist("Renault" + "Red" + "20,000"));



function phoneNumberFormat(phoneNumber) {
  phoneNumber = document.getElementById("phNumber").value;
  let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
  if (phoneNumber.match(phoneRegex)) {
    alert("Valid number entered");
  } else {
    alert("Phone number entered is invalid");
  }
}


// FlexBox





