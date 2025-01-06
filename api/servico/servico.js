import fatosHistoricos from "../dados/fatosHistoricos.js"; // Importa dados de fatos históricos.

// Função que realiza a busca do fato.
function servicoBuscarFatoPorAno(ano) {
  let fatoEncontrado;

  if(validaAnoRecebido(ano)){
    // Dado validado: faz a busca do fato:
    fatosHistoricos.filter((fato) => {
      if(fato.ano===ano){
        fatoEncontrado = fato.fato;
      }
    })
  }else{
    fatoEncontrado = '';
  }

  return fatoEncontrado;
}

// Função que realiza a validação do dado recebido que deve ser o ano que se deseja saber o fato.
function validaAnoRecebido(ano) {
  if (isNaN(ano) || ano < 1920 || ano > 2020 || ano === '') { // Verifica se o dado não é um número, se é menor ou maior que os anos e seus fatos disponiveis. 
    return false;
  }else {
    return true;
  }
}

export default servicoBuscarFatoPorAno;