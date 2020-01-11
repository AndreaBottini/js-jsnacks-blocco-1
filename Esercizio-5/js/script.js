// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var array = [];
console.log(array);

// CICLO FOR

// for (var i = 0; i < 6; i++) {
//   var numero = parseInt(prompt('Inserisci un numero'));
//   console.log(numero);
//
//   if (numero % 2 != 0) {
//     console.log('dispari', numero);
//     array.push(numero);
//   }
// }
// console.log(array);


// CICLO WHILE

var array = [];
var i = 0;

while (i < 6) {
  var numero = parseInt(prompt('Scrivi il tuo numero'));
  console.log(numero);

  if(numero % 2 != 0) {
    console.log('dispari', numero);
    array.push(numero);
    i++;
  }
}
console.log(array);
