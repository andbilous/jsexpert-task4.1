"use strict";

var total = 0;
var result = "";

function getRndNumber() {
  return Math.floor((Math.random() * 6) + 1);
}

function setResult(input) {
  result += input;
  return result;
}

function isNumbersEqual(firstNum, secondNum) {
  if (firstNum === secondNum) {
    setResult("Выпал дубль. Число " + firstNum + "<br>")
  }
}

function isBigDifference(firstNum, secondNum) {
  var difference = Math.abs(firstNum - secondNum);
  if ( difference> 2) {
    setResult("Большой разброс между костями. Разница составляет : " + difference + "<br>")
  }
}

function calculateResult(firstNum, secondNum) {
  total += firstNum + secondNum;
}

function printResult() {

  document.getElementById("result").innerHTML = result;
}

function addResult() {
  if(total>100){
    setResult("Победа, вы набрали " + total + " очков")
  }
  else setResult("Вы проиграли, у Вас " + total + " очков")
  
}


(function run() {
  for (var i = 0; i < 15; i++) {
    if (i === 8 || i === 13) {
      continue;
    }

    var first = getRndNumber();
    var second = getRndNumber();

    isNumbersEqual(first, second);
    isBigDifference(first, second);
    calculateResult(first, second);
    setResult(" Первая кость: " + first + "<br>" + " Вторая кость: " + second + "<br>")


  }
  addResult()
  printResult()

})()