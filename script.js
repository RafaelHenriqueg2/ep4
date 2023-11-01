function botar() {
  var respostaUsuario1 = document.querySelector('input[name="resposta1"]:checked');
  var respostaUsuario2 = document.querySelector('input[name="resposta2"]:checked');
  var respostaUsuario3 = document.querySelector('input[name="resposta3"]:checked');
  var respostaUsuario4 = document.querySelector('input[name="resposta4"]:checked');

  if (respostaUsuario1 && respostaUsuario2 && respostaUsuario3 && respostaUsuario4) {
      if (respostaUsuario1.value == "correta") {
          document.getElementById("resultado_correto1").innerHTML = "Acertou";
      } else {
          document.getElementById("resultado_errado1").innerHTML = "Errou";
      }

      if (respostaUsuario2.value == "correta") {
          document.getElementById("resultado2").innerHTML = "Acertou";
      } else {
          document.getElementById("resultado2").innerHTML = "Errou";
      }

      if (respostaUsuario3.value == "correta") {
          document.getElementById("resultado3").innerHTML = "Acertou";
      } else {
          document.getElementById("resultado3").innerHTML = "Errou";
      }

      if (respostaUsuario4.value == "correta") {
          document.getElementById("resultado4").innerHTML = "Acertou";
      } else {
          document.getElementById("resultado4").innerHTML = "Errou";

      }
  } else {
      alert("Não deixe nenhuma questão em aberto");
  }
}
