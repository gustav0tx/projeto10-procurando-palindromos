let word = prompt('Qual a palavra desejada?')
let size = word.length
let lastW = size -1
let stretch = size / 2
let count2 = 0
let palin = true
for(let count = 0; count < stretch; count++) {
  if (size % 2 == 1) {
    stretch -= 0.5
  }
  alert(word.charAt(lastW) + ' ' + word.charAt(count))
  if (word.charAt(lastW) == word.charAt(count)) {
    alert('letra verificada')
    count2++
  } 
  if (count2 == stretch) {
    alert('É um palindromo')
    palin = true
  } else {
    palin = false
  }
  lastW--
}
if (palin == false) {
  alert(`'${word}' teve ${count2} letras verificadas , mas não é um palindromo`)
}
