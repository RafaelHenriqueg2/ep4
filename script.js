function botar() {
    
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if (respostaUsuario && respostaUsuario.value === "correto") {
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta!");
    }
  }
  