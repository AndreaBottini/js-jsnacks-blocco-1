// alert ('funziona?')
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var primoNumero = parseInt(prompt ('inserisci il primo numero'));
// console.log(primoNumero);

var secondoNumero = parseInt(prompt ('inserisci il secondo numero'));
// console.log(secondoNumero);

if (primoNumero == secondoNumero) {
  console.log(alert('Reinserisci il tuo numero'));
}

else if (primoNumero > secondoNumero) {
  console.log(primoNumero);
}
else {
  console.log(secondoNumero)
}
