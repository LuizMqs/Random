document.getElementById("button").addEventListener("click", function () {
    const peso = Number(document.getElementById("peso").value)
    const altura = Number(document.getElementById("altura").value)
    let resultado

    if (!isNaN(peso) && !isNaN(altura)) {
        resultado = peso / (altura * altura)
        document.querySelector("h3").innerHTML = resultado
    }

    else {
        document.querySelector("h3").innerHTML = "Insira os valores em númerais"
    }

})