/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function filterByLetter(array, letter) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === letter) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(filterByLetter(names, "A"));

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
