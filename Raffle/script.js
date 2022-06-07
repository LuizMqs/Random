function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

document.getElementById("button").addEventListener("click", () => {
    const min = Number(document.getElementById("min").value)
    const max = Number(document.getElementById("max").value)
    let resultado

    if (!isNaN(min) && !isNaN(max)) {
        if (min == parseInt(min) && max == parseInt(max)) {
            resultado = getRandomIntInclusive(min, max)
            document.querySelector("h3").innerHTML = resultado
        }

        else {
            document.querySelector("h3").innerHTML = "Insira valores inteiros"
        }
    }

    else {
        document.querySelector("h3").innerHTML = "Insira valores númericos"
    }
})