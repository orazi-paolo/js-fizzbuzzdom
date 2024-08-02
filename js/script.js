/*  Scaletta
1. stampa i numeri da 1 a 100 in console ✔️
2. per i multipli di 3 stampa Fizz al posto del numero
3. per i multipli di 5 stampa Buzz al posto del numero
4. per i multipli che sono multipli sia di 3 che di 5 stampa FizzBuzz al posto del numero
5. crea un elemento che faccia da contenitore nel DOM 
6. riempi il contenitore con degli elementi via js
7. applica stili differenti agli elementi aggiunti a seconda del valore inserito che sia un fizz un numero o un buzz
*/

// stampo i numeri da uno a 100 in console
for (let i = 1; i <= 100; i++) {
    // se i numeri sono sia multipli di 3 e di 5 stampo FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    //   se i numeri sono multipli di 3 stampo fizz
    } else if (i % 3 === 0) {
      console.log('Fizz');
    //   se i numeri sono multipli di 5 stampo buzz
    } else if (i % 5 === 0) {
      console.log('Buzz');
    //   altrimenti
    } else {
      console.log(i);
    }
  }
