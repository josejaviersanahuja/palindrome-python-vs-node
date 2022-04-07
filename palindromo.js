/**
 * Este método muestra por consola si una frase es palíndrome o no
 * @param {string} frase es la frase a evaluar
 */
function palindrome(frase){
    const reg_exp = /\s/g
    frase= frase.toLowerCase().replace(reg_exp,"")
    frase_invertida = frase.split("").reverse().join("")
    console.log(frase == frase_invertida ? "Es Palindrome": "No es Palindrome");
}

/**
 * Este método invoca un proceso para acceder a las entradas por consola
 * Std es la consola, Stdin es entrada por consola y debemos invocar al process para acceder a ello.
 * @TODO comenta la línea 25 y corre el programa verás a lo que me refiero
 */
function run(){
    console.log("Escribe una frase: ")
    var stdin = process.openStdin();

    // En node las entradas por consolas se gestionan a través de eventos
    // Es más complejo que python pero genera mucho más control sobre el programa
    stdin.addListener("data", function(d) {
        palindrome(d.toString().trim());
        process.exit(0) // Salida de la consola
    });
}

// punto de entrada del programa
run()