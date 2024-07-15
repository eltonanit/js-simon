
// Recupero i numeri e il risultato dal dom 
document.getElementById('gioca').addEventListener('click', function () {
    const numeri = document.getElementById('numeri');
    const result = document.getElementById('result');
    result.innerHTML = '';

// Genero 5 numeri casuali
const numerirandom = generatenumerirandom(5, 1, 100);
numeri.textContent = numerirandom.join(', ');

// Funzione timer di 30 secondi
setTimeout(function () {
      numeri.textContent = '';

    // Chiedo all'utente di inserire i numeri
    const user = [];   
    for (let i = 0; i < 5; i++) {
            const userInput = parseInt(prompt('Inserisci un numero che hai visto:'));
            if (!isNaN(userInput)) {
                user.push(userInput);
            }
        }

        // Verifichiamo quanti e quali numeri sono stati individuati
        const numerogiusto = numerirandom.filter(num => user.includes(num));
        result.innerHTML = `
            <h3>Risultato:</h3>
            <p>Hai indovinato ${numerogiusto.length} numeri su 5.</p>
            <p>Numeri corretti: ${numerogiusto.join(', ')}</p>
        `;

    }, 30000);
});

// Funzione per generare numeri casuali unici
function generatenumerirandom(count, min, max) {
    const numeri = new Set();
    while (numeri.size < count) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        numeri.add(number);
    }
    return [...numeri];
}