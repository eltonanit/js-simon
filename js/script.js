
// Recupero i numeri e il risultato dal dom 
document.getElementById('gioca').addEventListener('click', function () {
    const numeri = document.getElementById('numeri');
    const result = document.getElementById('result');   
    const userInputs = document.getElementById('userInputs');
    result.innerHTML = '';

// Genero 5 numeri casuali
const numerirandom = generatenumerirandom(5, 1, 100);
numeri.textContent = numerirandom.join(', ');

// Funzione timer di 30 secondi
setTimeout(function () {
      numeri.textContent = '';
 userInputs.style.display = 'block';

    document.getElementById('submitNumbers').addEventListener('click', function () {
    // Chiedo all'utente di inserire i numeri
    const user = [];   
        for (let i = 1; i <= 5; i++) {
            const userInput = parseInt(document.getElementById(`userNum${i}`).value);
            if (!isNaN(userInput)) {
                user.push(userInput);
            }
        }

        // Verifica dei numeri indovonati
        const numerogiusto = numerirandom.filter(num => user.includes(num));
        result.innerHTML = `
            <h3>Risultato:</h3>
            <p>Numeri indovinati ${numerogiusto.length} numeri su 5.</p>
            <p>Numeri corretti: ${numerogiusto.join(', ')}</p>
        `;
        userInputs.style.display = 'none';
    });
    }, 8000);
});

// Funzione per generare numeri casuali
function generatenumerirandom(count, min, max) {
    const numeri = new Set();
    while (numeri.size < count) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        numeri.add(number);
    }
    return [...numeri];
}