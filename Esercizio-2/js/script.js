// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.



var primaParola = prompt ('Inserisci la prima parola');
// console.log(primaParola);

var secondaParola = prompt ('Inserisci la seconda parola');
// console.log(secondaParola);

if (primaParola.length == secondaParola.length) {
  alert('la lunghezza delle due parole inserite risulta uguale')
}

else if (primaParola.length > secondaParola.length) {
  console.log (secondaParola);
  console.log (primaParola);
}

else {
  console.log (primaParola);
  console.log (secondaParola);
}
