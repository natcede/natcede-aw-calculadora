function realizarOperaciones() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultadosDiv = document.getElementById('resultados');

    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

    for (var i = 1; i <= 5; i++) {
        var resultado;
        var operacion;

        switch (i) {
            case 1:
                resultado = numero1 + numero2;
                operacion = 'SUMA';
                break;
            case 2:
                resultado = numero1 - numero2;
                operacion = 'RESTA';
                break;
            case 3:
                resultado = numero1 * numero2;
                operacion = 'MULTIPLICACIÓN';
                break;
            case 4:
                resultado = numero1 / numero2;
                operacion = 'DIVISIÓN';
                break;
            case 5:
                resultado = numero1 % numero2;
                operacion = 'MODULO';
                break;
        }

        resultadosDiv.innerHTML += `<p>Iteración ${i}: ${operacion} = ${resultado}</p>`;
    }
}
