const TIPO_MATERIAL = ["Caneta", "Lapis", "Caderno", "Borracha", "Apontador", "Régua", "Corretivo", "Marca-texto", "Cola", "Tesoura"];
const materialEscolar = document.getElementById("escolhaOpcao");
var item = {};

TIPO_MATERIAL.forEach((material) => {
  option = new Option(material, material.toLowerCase());
  materialEscolar.options[materialEscolar.options.length] = option;
});

function botaoDesabilitar() {
  if ($("#nomeAluno").valid() && $("#gastarAte").valid()) {
    $("#botaozao").attr("disabled", false);
  }
  else {
    $("#botaozao").attr("disabled", true);
  }

}

$("#nomeAluno").focusout(function () {
  botaoDesabilitar();

});

$("#gastarAte").focusout(function () {
  botaoDesabilitar();
});

function validarProdutos() {
  console.log("validarProdutos");

  return $('#escolhaOpcao').valid() &&
         $('#quantidadeProduto').valid() &&
         $('#precoUnitario').valid();
}

function calcularTotal(Quantidade, Preco) {
  console.log("calcularTotal");

  return Quantidade * Preco;
}

function adicionarItem() {


  console.log("adicionarItem");
  var validarItem = validarProdutos();
  console.log("validarProdutos");

  if (validarItem) {
    item.Opcao = $("#escolhaOpcao").val();
    item.Quantidade = parseInt($("#quantidadeProduto").val());
    item.Preco = parseInt($("#precoUnitario").val());
    item.Total = calcularTotal(item.Quantidade, item.Preco);
    adicionarProdutoTabela(item);
    mudarCorCamaro(item.Total, $("#gastarAte").val());
    item = {};
    $(":input").val("");
  }
}

function adicionarProdutoTabela(objeto) {
  console.log("adicionarProdutoTabela");
  var tabela = document.querySelector("table");
  var tr = tabela.insertRow();
  tr.innerHTML = "<td>" + objeto.Opcao + "</td>" +
    "<td>" + objeto.Quantidade + "</td>" +
    "<td>" + objeto.Preco + "</td>" +
    "<td>" + objeto.Total + "</td>";
};

function mudarCorCamaro(valorTotal, gastarMaximo){
  if(gastarMaximo < valorTotal){
    $("#camaro").removeClass('small-box bg-gradient-green');
    $("#camaro").addClass('small-box bg-red');
  }
  else{
    $("#camaro").addClass('small-box bg-gradient-green');
  }

}

function mudarMoney(){
  h3.innerHTML = "<h3> R$" + ($("#totalDinheiro").val()) + "</h3>";
}