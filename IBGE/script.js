function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button").addEventListener("click", () => {
  let min;
  let max;
  let resultado;

    resultado = getRandomIntInclusive(1, 1000);

    if (resultado <= 517) {
        if (resultado <= 86) {
            document.querySelector("h3").innerHTML = "Idosa"
        }

        else {
            document.querySelector("h3").innerHTML = "Mulher"
        }
    }

    else {
        if (resultado <= 599) {
            document.querySelector("h3").innerHTML = "Idoso"
        }

        else {
            document.querySelector("h3").innerHTML = "Homem"
        }
    }



    


});
