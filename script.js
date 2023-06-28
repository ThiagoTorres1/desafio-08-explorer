alert("Será solicitado 2 números para fazer as operações matemáticas")

let number1 = Number(prompt("Digite o primeiro número"))
let number2 = Number(prompt("Digite o segundo número"))

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let restDiv = number1 % number2

alert(`A soma dois dos números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multipicação dos dois números é: ${mult}`)
alert(`A divisão dois dos números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)
if((sum % 2) == 0) {
  alert(`A soma dos dois números é PAR: ${sum}`)
} else {
  alert(`A soma dos dois números é IMPAR: ${sum}`)
}

if(number1 == number2) {
  alert(`Os dois números inseridos são iguais`)
} else { 
  alert(`Os dois números inseridos são diferentes`)
}