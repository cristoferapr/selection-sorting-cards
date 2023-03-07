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
  var div = document.getElementById("cards");
  var clear = document.getElementById("mayorcontainer");
  while (clear.childNodes.length > 2) {
    clear.removeChild(clear.lastChild);
  }
  for (let i = 0; i < val; i++) {
    let symbol = getRandom(4);
    let number = getRandom(13);

    var clone = div.cloneNode(true); // true means clone all childNodes and all event handlers

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
  var clone = element.cloneNode(true); // true means clone all childNodes and all event handlers
  var children = clone.children;
  var log = document.getElementById("logcontainer");
  let siaux = children.length;
  let size = children.length;
  console.log(size);

  var clear = document.getElementById("logcontainer");
  while (clear.childNodes.length > 0) {
    clear.removeChild(clear.lastChild);
  }
  var base = 1;

  while (base < size - 1) {
    var flag = 0;
    var value = 0;
    var min_idx;
    for (var i = base + 1; i < size; i++) {
      var child = children[i];
      var aux = children[base];
      var childnum = child.getElementsByClassName("number");
      var auxnum = aux.getElementsByClassName("number");
      var childint = childnum[0].innerText;
      console.log(childint);

      var auxint = auxnum[0].innerText;
      console.log(auxint);

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

      if (value == 0) {
        value = parseInt(auxint);
      }

      if (value > parseInt(childint)) {
        min_idx = i;
        value = parseInt(childint);

        flag = 1;
      }
    }

    if (flag == 1) {
      console.log("menor" + value + "posicion" + min_idx);
      var k = children[base];
      var l = children[min_idx];
      clone.insertBefore(l, k);
      if (min_idx - base > 1) {
        var z = children[min_idx + 1];
        clone.insertBefore(k, z);
      }

      for (let j = 1; j < siaux; j++) {
        var son = children[j];
        var clonecd = son.cloneNode(true);
        log.appendChild(clonecd, log);
      }
    }

    log.appendChild(document.createElement("div"));
    let div = document.createElement("div");

    base++;
    console.log(size);
  }
}

window.onload = function() {
  //write your code here

  document.getElementById("generate").addEventListener("click", cardgenerator);

  document.getElementById("bubble").addEventListener("click", bubbleSort);
};
