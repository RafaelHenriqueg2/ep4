function botar() {
    if (
        document.querySelector('input[name="resposta1"]:checked') &&
        document.querySelector('input[name="resposta2"]:checked') &&
        document.querySelector('input[name="resposta3"]:checked') &&
        document.querySelector('input[name="resposta4"]:checked') &&
        document.querySelector('input[name="resposta5"]:checked') &&
        document.querySelector('input[name="resposta6"]:checked') &&
        document.querySelector('input[name="resposta7"]:checked') &&
        document.querySelector('input[name="resposta8"]:checked') &&
        document.querySelector('input[name="resposta9"]:checked') &&
        document.querySelector('input[name="resposta10"]:checked')
    ) {
        if (document.querySelector('input[name="resposta1"]:checked').value == "correta") {
            document.getElementById("resultado_correto1").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado1").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta2"]:checked').value == "correta") {
            document.getElementById("resultado_correto2").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado2").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta3"]:checked').value == "correta") {
            document.getElementById("resultado_correto3").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado3").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta4"]:checked').value == "correta") {
            document.getElementById("resultado_correto4").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado4").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta5"]:checked').value == "correta") {
            document.getElementById("resultado_correto5").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado5").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta6"]:checked').value == "correta") {
            document.getElementById("resultado_correto6").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado6").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta7"]:checked').value == "correta") {
            document.getElementById("resultado_correto7").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado7").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta8"]:checked').value == "correta") {
            document.getElementById("resultado_correto8").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado8").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta9"]:checked').value == "correta") {
            document.getElementById("resultado_correto9").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado9").textContent = "Errou";
        }

        if (document.querySelector('input[name="resposta10"]:checked').value == "correta") {
            document.getElementById("resultado_correto10").textContent = "Acertou";
        } else {
            document.getElementById("resultado_errado10").textContent = "Errou";
        }
    } else {
        alert("Não deixe nenhuma questão em aberto");
    }
}
