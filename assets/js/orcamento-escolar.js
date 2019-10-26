const TIPO_MATERIAL = ["Caneta", "Lapis", "Caderno", "Borracha", "Apontador", "Régua", "Corretivo", "Marca-texto", "Cola", "Tesoura" ];
const materialEscolar = document.getElementById("escolhaOpcao");

TIPO_MATERIAL.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialEscolar.options[materialEscolar.options.length] = option;
  });
