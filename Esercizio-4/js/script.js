// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ['Luca', 'Paolo', 'Andrea', 'Cristina', 'Lucia']
console.log(invitati);

var nome = prompt('Come ti chiami?');
console.log(nome);

var invitato = false;

for (var i = 0; i < invitati.length; i++) {
  console.log(invitati[i]);

  if (nome == invitati[i]){
    invitato = true;
  }
}
console.log(invitato);

if (invitato == true) {
  console.log('puoi prendere parte alla festa')
}
else {
  console.log('non puoi prendere parte alla festa')
}
