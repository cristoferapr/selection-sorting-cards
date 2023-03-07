/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandom(n) {
  return Math.floor(Math.random() * n) + 1;
}

function getSymbol(symbol) {
  if (symbol == 1) {
    return "♦";
  } else if (symbol == 2) {
    return "♥";
  } else if (symbol == 3) {
    return "♣";
  } else {
    return "♠";
  }
}

const cardgenerator = () => {
  const val = document.querySelector("input").value;
  if (val == "") {
    alert("please enter a valid number");
  }
  for (let i = 0; i < val; i++) {
    let symbol = getRandom(4);
    let number = getRandom(13);
    var div = document.getElementById("cards"),
      clone = div.cloneNode(true); // true means clone all childNodes and all event handlers

    var symbolUp = clone.getElementsByClassName("symbol-up");
    var cardNumber = clone.getElementsByClassName("number");
    var symbolDown = clone.getElementsByClassName("symbol-down");
    if (symbol < 3) {
      symbolUp[0].innerHTML = getSymbol(symbol);
      symbolUp[0].style.color = "red";
      symbolDown[0].innerHTML = getSymbol(symbol);
      symbolDown[0].style.color = "red";
    } else {
      symbolUp[0].innerHTML = getSymbol(symbol);
      symbolDown[0].innerHTML = getSymbol(symbol);
    }
    if (number == 1) {
      cardNumber[0].innerHTML = "A";
    } else if (number == 11) {
      cardNumber[0].innerHTML = "J";
    } else if (number == 12) {
      cardNumber[0].innerHTML = "Q";
    } else if (number == 13) {
      cardNumber[0].innerHTML = "K";
    } else {
      cardNumber[0].innerHTML = number;
    }
    document.getElementById("mayorcontainer").appendChild(clone);
  }
};

function bubbleSort() {
  var element = document.getElementById("mayorcontainer");
  var children = element.children;
  let size = children.length;
  while (size > 1) {
    for (var i = 1; i < size - 1; i++) {
      var child = children[i];
      var aux = children[i + 1];
      var childnum = child.getElementsByClassName("number");
      var auxnum = aux.getElementsByClassName("number");
      var childint = childnum[0].innerText;
      var auxint = auxnum[0].innerText;

      if (childint == "A") {
        childint = 1;
      } else if (childint == "J") {
        childint = 11;
      } else if (childint == "Q") {
        childint = 12;
      } else if (childint == "K") {
        childint = 13;
      }
      if (auxint == "A") {
        auxint = 1;
      } else if (auxint == "J") {
        auxint = 11;
      } else if (auxint == "Q") {
        auxint = 12;
      } else if (auxint == "K") {
        auxint = 13;
      }
      if (parseInt(auxint) < parseInt(childint)) {
        console.log(
          "changing" + childnum[0].innerText + "for" + auxnum[0].innerText
        );
        element.insertBefore(aux, child);
      }
    }
    size--;
  }
}

window.onload = function() {
  //write your code here

  document.getElementById("generate").addEventListener("click", cardgenerator);

  document.getElementById("bubble").addEventListener("click", bubbleSort);
};
