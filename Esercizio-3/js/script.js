// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// CICLO FOR
var somma = 0;

for (var i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt('Inserisci il tuo numero'));
  console.log(numeroUtente);
  somma = somma + numeroUtente;
}

console.log(somma);

// CICLO WHILE
var somma = 0;
var i = 0;
while (i < 5) {
  var numeroUtente = parseInt(prompt('Inserisci il tuo numero'))
  console.log(numeroUtente);
  somma = somma + numeroUtente;
  i++
}

console.log(somma)
