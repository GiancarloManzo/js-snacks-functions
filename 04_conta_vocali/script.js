/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(word));
// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
