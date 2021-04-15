var formElement = document.querySelector("form");
var inputNum1Element = document.querySelector("#num-1");
var inputNum2Element = document.querySelector("#num-2");
var spanAnswerElement = document.querySelector("#answer");

var sum = function (val_1, val_2) {
    var answer;
    if (typeof val_1 === "number" && typeof val_1 === "number") {
        answer = val_1 + val_2;
    }
    else {
        answer = Number(val_1) + Number(val_2);
    }
    return answer;
};

var formOnSubmit = function () {
    event.preventDefault();
    var val_1 = inputNum1Element.value;
    var val_2 = inputNum2Element.value;
    spanAnswerElement.innerText = sum(inputNum1Element.value, inputNum2Element.value);
};

formElement.addEventListener("submit", formOnSubmit);
