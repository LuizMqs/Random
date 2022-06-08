document.getElementById("button").addEventListener("click", function () {
    const peso = Number(document.getElementById("peso").value)
    const altura = Number(document.getElementById("altura").value)
    let resultado

    if (!isNaN(peso) && !isNaN(altura)) {
        resultado = peso / (altura * altura)
        document.querySelector("h3").innerHTML = resultado
        if (resultado <= 18.5) {
            document.querySelector("h4").innerHTML = "Abaixo do peso"
        }

        else if (resultado > 18.5 && resultado <= 24.9) {
            document.querySelector("h4").innerHTML = "Peso normal"
        }

        else if (resultado > 24.9 && resultado <= 29.9) {
            document.querySelector("h4").innerHTML = "Sobrepeso"
        }

        else if (resultado > 29.9 && resultado <= 34.9) {
            document.querySelector("h4").innerHTML = "Obesidade grau I"
        }

        else if (resultado > 34.9 && resultado <= 39.9) {
            document.querySelector("h4").innerHTML = "Obesidade grau II"
        }

        else {
            document.querySelector("h4").innerHTML = "Obesidade grau III"
        }
    }

    else {
        document.querySelector("h3").innerHTML = "Insira os valores em númerais"
    }

})