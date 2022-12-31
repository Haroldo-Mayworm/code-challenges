function calcular() {
  var totalConta = document.getElementById("valorTotal").value;
  var totalPessoas = document.getElementById("pessoasTotal").value;
  var totalServicos = document.getElementById("taxaGorjeta").value;

  if(totalConta === "" || isNaN(totalConta) || isNaN(totalPessoas)) {
    alert("Por favor, coloque valores válidos!");
    return;
  }

  var totalTaxaServicos = (totalConta * totalServicos) / totalPessoas;
  var total = totalTaxaServicos + (totalConta / totalPessoas);


  document.getElementById("valorCalculado").style.display = "block";
  document.getElementById("valorDividido").innerHTML = total;
}

document.getElementById("btn").onclick = function() {
  calcular()
}