const firstEl = document.querySelector("#first-number");
const secondEl = document.querySelector("#second-number");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const resultEl = document.querySelector("#result");

multiplyBtn.addEventListener("click", function () {
    const firstValue = getElementValue(firstEl);
    const secondValue = getElementValue(secondEl);
    console.log(firstValue, secondValue);
    const resultValue = multiply(firstValue, secondValue);
    resultEl.innerText = resultValue;
});

divideBtn.addEventListener("click", function () {
    const firstValue = getElementValue(firstEl);
    const secondValue = getElementValue(secondEl);
    console.log(firstValue, secondValue);
    const resultValue = divide(firstValue, secondValue);
    resultEl.innerText = resultValue;
});

function getElementValue(element) {
    const elementValue = Number(element.value);
    return elementValue;
}

function multiply(a, b) {
    console.log("happens")
    return a * b;
}

function divide(a, b) {
    return a / b;
}





