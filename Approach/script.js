document.getElementById("button").addEventListener("click", () => {
    const num = Number(document.getElementById("num").value)

    if (!isNaN(num)) {
        if (num != parseInt(num)){
            document.querySelector("#menor").innerHTML = `O menor número inteiro é ${Math.floor(num)}`
            document.querySelector("#maior").innerHTML = `O maior número inteiro é ${Math.ceil(num)}`
        }

        else {
            document.querySelector("h3").innerHTML = "O número informado já é inteiro"
        }

    }

    else {
        document.querySelector("h3").innerHTML = "Insira valores númericos"
    }
})