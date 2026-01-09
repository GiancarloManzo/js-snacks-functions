/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

function namesInitials(array) {
  const initials = [];
  for (let i = 0; i < array.length; i++) {
    initials.push(array[i][0]);
  }
  return initials;
}
console.log(namesInitials(names));

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
