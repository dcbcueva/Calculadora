const inputA = document.getElementById("num1")
const inputB = document.getElementById("num2")
const inputR = document.getElementById("resp")

const buttonSuma = document.getElementById("suma")
const buttonRest = document.getElementById("rest")
const buttonMult = document.getElementById("mult")
const buttonDivi = document.getElementById("divi")

const suma = (a, b) => a + b
const rest = (a, b) => a - b
const mult = (a, b) => a * b
const divi = (a, b) => a / b

const operacionSuma = () => {
    const x = parseInt(inputA.value)
    const y = parseInt(inputB.value)
    inputR.value = suma(x,y)
}

const operacionRest = () => {
    inputR = rest(inputA.value, inputB.value)
}

const operacionMult = () => {
    inputR = mult(inputA.value, inputB.value)
}

const operacionDivi = () => {
    inputR = divi(inputA.value, inputB.value)
}

buttonSuma.addEventListener("click", operacionSuma)
buttonRest.addEventListener("click", operacionRest)
buttonMult.addEventListener("click", operacionMult)
buttonDivi.addEventListener("click", operacionDivi)