// JavaScript source code
function calcular() {
    var numero1 = document.getElementById("txtNumero1");
    var numero2 = document.getElementById("txtNumero2");
    var numero3 = document.getElementById("txtNumero3")

    var total = parseFloat(numero1.value) + parseFloat(numero2.value) + parseFloat(numero3.value);

    var promedio = total /= 3;

    document.getElementById("txtResultado").value = promedio.toFixed(2);
}