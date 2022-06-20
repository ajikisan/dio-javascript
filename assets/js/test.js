//Introdução ao Javascript 18/06/2022

console.log('Olá Mundo')
var a = 0
a
a + 1
console.log(a + 1)

//Trazer os valores pares do conjunto
function returnEvenValues(array) {
  let evenNums = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i])
    } else {
      console.log(`${array[i]} não é par`)
    }
  }
  console.log('Números Pares são: ', evenNums)
}
//console.log()
let array = [1, 2, 4, 5, 7, 8]

returnEvenValues(array)

/*
Manipulando DOM  - Direto no Console

file:///C:/Users/ajiki/Documents/dio-javascript/index.html

document.getElementsByTagName('h1')
HTMLCollection[h1]
0:h1
length:1
[[Prototype]]: HTMLCollection
var heading1=document.getElementsByTagName('h1')[0]
undefined
heading1
<h1>Olá, Mirian San </h1>
heading1.style.color='red'
'red'
*/
