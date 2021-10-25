// dichiaro le variabili
const contQuadrati = document.getElementById("contenitore-quadrati");

// ciclo che verifica le condizioni che determinano il tipo di output da mostrare in pagina
for (let i = 1; i <= 100; i++) {
    // la condizione più specifica viene verificata per prima in modo che, quando è vera, i singoli casi vengano ignorati
    if (!(i % 3) && !(i %5)) {
        const nuovaRiga = `<div class="quadrato tre-cinque">fizzbuzz</div>`;
        contQuadrati.innerHTML += nuovaRiga;
    } else if (!(i % 3)) {
        const nuovaRiga = `<div class="quadrato tre">fizz</div>`;
        contQuadrati.innerHTML += nuovaRiga;
    } else if (!(i % 5)) {
        const nuovaRiga = `<div class="quadrato cinque">buzz</div>`;
        contQuadrati.innerHTML += nuovaRiga;
    } else {
        const nuovaRiga = `<div class="quadrato">${i}</div>`;
        contQuadrati.innerHTML += nuovaRiga;
    }
}