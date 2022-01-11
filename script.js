"use strict";

do {
  var price = prompt("Įveskite prekės kainą: ");
  var tikrinimas = Number(price);
  var delivery = confirm("Ar reikalingas pristatymas į namus?\n(taip/ne)");
  var deliceryPrice = 0.1;
  var miestas = prompt("Į kokį miestą pristatyti");
  var noAkmene = alert("Į Akmenę nepristatom :(");
  // var suma = tikrinimas + deliceryPrice;

//1 variantas
var answer = alert("Be pristatymo: " + "Prekės kaina: " + price + "€" + ", " + "Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
// 2 variantas
var answer = alert("Su pristatymu: " + "Prekės kaina: " + price + "€" + ", " + "pristatymo kaina: " + deliceryPrice + "€" + ", " + "Iš viso: " + price + deliceryPrice + "€" + ", " + "Prekę pristatysime į: " + miestas + " " + "per 1-3 dienas.");
}
while (isNaN(tikrinimas) || tikrinimas == 0);
