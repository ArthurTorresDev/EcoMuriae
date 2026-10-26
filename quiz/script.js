// ============================================================
// SCRIPT.JS - Quiz de Pegada Ecológica - Projeto EcoMuriaé
// Este arquivo é usado pelas 3 páginas: index.html, quiz.html e resultado.html
// ============================================================


// ------------------------------------------------------------
// 1. DADOS DO QUIZ
// ------------------------------------------------------------
// A variável "perguntas" guarda todas as 20 perguntas do quiz.
// Cada pergunta é um objeto com: tema, o texto da pergunta,
// as alternativas (textos que aparecem na tela), os valores
// (números usados para calcular a pegada) e o peso da pergunta
// dentro do tema (quanto ela "pesa" no resultado do tema).
var perguntas = [

  // ---------------- TEMA 1 - ALIMENTAÇÃO (gha base: 0.96) ----------------
  {
    tema: "🥩 Alimentação",
    pergunta: "Com que frequência você consome carne bovina?",
    alternativas: ["Nunca", "1 a 2 vezes por semana", "3 a 5 vezes por semana", "Todos os dias"],
    valores: [0.60, 0.85, 1.00, 1.30],
    peso: 0.50
  },
  {
    tema: "🥩 Alimentação",
    pergunta: "Com que frequência você desperdiça alimentos?",
    alternativas: ["Nunca", "Raramente", "Às vezes", "Frequentemente"],
    valores: [0.80, 0.95, 1.10, 1.25],
    peso: 0.20
  },
  {
    tema: "🥩 Alimentação",
    pergunta: "Com que frequência você consome alimentos locais (produzidos na sua região)?",
    alternativas: ["Sempre", "Frequentemente", "Às vezes", "Quase nunca"],
    valores: [0.85, 0.95, 1.05, 1.15],
    peso: 0.15
  },
  {
    tema: "🥩 Alimentação",
    pergunta: "Com que frequência você consome alimentos ultraprocessados?",
    alternativas: ["Quase nunca", "1 a 2 vezes por semana", "3 a 5 vezes por semana", "Todos os dias"],
    valores: [0.85, 1.00, 1.10, 1.20],
    peso: 0.15
  },

  // ---------------- TEMA 2 - TRANSPORTE (gha base: 0.60) ----------------
  {
    tema: "🚌 Transporte",
    pergunta: "Qual é o seu principal meio de transporte no dia a dia?",
    alternativas: ["Bicicleta", "Caminhada", "Transporte público", "Moto", "Carro"],
    valores: [0.40, 0.50, 0.90, 1.10, 1.40],
    peso: 0.40
  },
  {
    tema: "🚌 Transporte",
    pergunta: "Quantos quilômetros você percorre por semana, aproximadamente?",
    alternativas: ["Até 20km", "20 a 50km", "50 a 100km", "Mais de 100km"],
    valores: [0.70, 0.90, 1.10, 1.30],
    peso: 0.30
  },
  {
    tema: "🚌 Transporte",
    pergunta: "Com que frequência você compartilha caronas?",
    alternativas: ["Sempre", "Frequentemente", "Às vezes", "Nunca"],
    valores: [0.80, 0.90, 1.00, 1.15],
    peso: 0.10
  },
  {
    tema: "🚌 Transporte",
    pergunta: "Quantas viagens aéreas você costuma fazer por ano?",
    alternativas: ["Nenhuma", "1 viagem", "2 a 3 viagens", "Mais de 3"],
    valores: [0.90, 1.00, 1.15, 1.35],
    peso: 0.20
  },

  // ---------------- TEMA 3 - MORADIA E ENERGIA (gha base: 0.36) ----------------
  {
    tema: "🏡💡 Moradia e Energia",
    pergunta: "Quantas pessoas moram na sua casa?",
    alternativas: ["5 ou mais", "3 a 4", "2", "1"],
    valores: [0.85, 0.95, 1.05, 1.20],
    peso: 0.15
  },
  {
    tema: "🏡💡 Moradia e Energia",
    pergunta: "Com que frequência você usa ar-condicionado?",
    alternativas: ["Nunca", "Pouco", "Frequentemente", "Diariamente"],
    valores: [0.85, 1.00, 1.15, 1.30],
    peso: 0.35
  },
  {
    tema: "🏡💡 Moradia e Energia",
    pergunta: "Qual o tipo de iluminação predominante na sua casa?",
    alternativas: ["LED", "Mista", "Fluorescente", "Incandescente"],
    valores: [0.90, 1.00, 1.05, 1.20],
    peso: 0.15
  },
  {
    tema: "🏡💡 Moradia e Energia",
    pergunta: "Você desliga os aparelhos eletrônicos quando não está usando?",
    alternativas: ["Sempre", "Frequentemente", "Às vezes", "Nunca"],
    valores: [0.85, 0.95, 1.10, 1.25],
    peso: 0.35
  },

  // ---------------- TEMA 4 - CONSUMO (gha base: 0.24) ----------------
  {
    tema: "🛒🛍️ Consumo",
    pergunta: "Com que frequência você compra roupas novas?",
    alternativas: ["Menos de 2x por ano", "Trimestralmente", "Mensalmente", "Quase toda semana"],
    valores: [0.80, 1.00, 1.15, 1.35],
    peso: 0.30
  },
  {
    tema: "🛒🛍️ Consumo",
    pergunta: "De quanto em quanto tempo você costuma trocar de celular?",
    alternativas: ["Mais de 5 anos", "3 a 5 anos", "2 a 3 anos", "Menos de 2 anos"],
    valores: [0.80, 1.00, 1.15, 1.30],
    peso: 0.30
  },
  {
    tema: "🛒🛍️ Consumo",
    pergunta: "Você conserta objetos antes de substituí-los por novos?",
    alternativas: ["Sempre", "Frequentemente", "Às vezes", "Nunca"],
    valores: [0.80, 0.95, 1.05, 1.20],
    peso: 0.20
  },
  {
    tema: "🛒🛍️ Consumo",
    pergunta: "Com que frequência você faz compras por impulso?",
    alternativas: ["Nunca", "Raramente", "Frequentemente", "Muito frequentemente"],
    valores: [0.85, 1.00, 1.15, 1.30],
    peso: 0.20
  },

  // ---------------- TEMA 5 - RESÍDUOS (gha base: 0.24) ----------------
  {
    tema: "♻️ Resíduos",
    pergunta: "Você separa os materiais recicláveis em casa?",
    alternativas: ["Sempre", "Frequentemente", "Às vezes", "Nunca"],
    valores: [0.80, 0.95, 1.10, 1.25],
    peso: 0.35
  },
  {
    tema: "♻️ Resíduos",
    pergunta: "Você reutiliza embalagens (potes, sacolas, caixas)?",
    alternativas: ["Sempre", "Frequentemente", "Às vezes", "Nunca"],
    valores: [0.85, 0.95, 1.05, 1.15],
    peso: 0.20
  },
  {
    tema: "♻️ Resíduos",
    pergunta: "Você faz compostagem dos resíduos orgânicos?",
    alternativas: ["Sempre", "Às vezes", "Conheço mas não faço", "Não faço"],
    valores: [0.80, 0.95, 1.05, 1.15],
    peso: 0.25
  },
  {
    tema: "♻️ Resíduos",
    pergunta: "Como você costuma descartar lixo eletrônico (pilhas, celulares, cabos)?",
    alternativas: ["Ponto de coleta", "Às vezes corretamente", "Não sei onde descartar", "Lixo comum"],
    valores: [0.85, 1.00, 1.10, 1.25],
    peso: 0.20
  }
];


// A variável "ghaBase" guarda o valor base (em gha) de cada tema.
// Esse valor é multiplicado pelo índice calculado das respostas do tema.
var ghaBaseAlimentacao = 0.96;
var ghaBaseTransporte = 0.60;
var ghaBaseMoradia = 0.36;
var ghaBaseConsumo = 0.24;
var ghaBaseResiduos = 0.24;


// ------------------------------------------------------------
// 2. VARIÁVEIS QUE GUARDAM O ESTADO DO QUIZ
// ------------------------------------------------------------
// Como as 3 páginas (index, quiz e resultado) compartilham este
// mesmo arquivo script.js, podemos usar variáveis "globais" para
// guardar as respostas do usuário enquanto ele navega entre as páginas.

// "respostasEscolhidas" guarda o índice da alternativa escolhida
// em cada pergunta. Por exemplo: respostasEscolhidas[0] = 2 significa
// que na pergunta 0 o usuário escolheu a alternativa de índice 2.
// Começamos preenchendo tudo com -1, que significa "não respondida".
var respostasEscolhidas = [];
for (var i = 0; i < perguntas.length; i++) {
  respostasEscolhidas[i] = -1;
}

// "perguntaAtual" guarda qual é o número da pergunta sendo exibida agora.
var perguntaAtual = 0;


// ------------------------------------------------------------
// 3. FUNÇÕES DA PÁGINA QUIZ.HTML
// ------------------------------------------------------------

// Esta função desenha na tela a pergunta que está em "perguntaAtual".
function mostrarPergunta() {

  var dadosPergunta = perguntas[perguntaAtual];

  // Atualiza o texto do tema e da pergunta
  document.getElementById("temaAtual").innerHTML = dadosPergunta.tema;
  document.getElementById("textoPergunta").innerHTML = dadosPergunta.pergunta;

  // Atualiza o texto de progresso, tipo "Pergunta 3 de 20"
  document.getElementById("progressoTexto").innerHTML =
    "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

  // Atualiza a barrinha de progresso (uma div que cresce em largura)
  var porcentagem = ((perguntaAtual + 1) / perguntas.length) * 100;
  document.getElementById("barraProgresso").style.width = porcentagem + "%";

  // Limpa a área de alternativas antes de desenhar de novo
  var areaAlternativas = document.getElementById("areaAlternativas");
  areaAlternativas.innerHTML = "";

  // Cria um botão para cada alternativa da pergunta atual
  for (var i = 0; i < dadosPergunta.alternativas.length; i++) {

    var botao = document.createElement("button");
    botao.innerHTML = dadosPergunta.alternativas[i];
    botao.className = "botaoAlternativa";

    // Se essa alternativa já foi escolhida antes, destaca o botão
    if (respostasEscolhidas[perguntaAtual] == i) {
      botao.className = "botaoAlternativa botaoSelecionado";
    }

    // Guardamos o índice "i" numa variável separada para o clique
    // funcionar corretamente para cada botão do laço for.
    botao.setAttribute("data-indice", i);
    botao.onclick = function () {
      var indiceClicado = parseInt(this.getAttribute("data-indice"));
      escolherAlternativa(indiceClicado);
    };

    areaAlternativas.appendChild(botao);
  }

  // Mostra ou esconde o botão "Voltar" dependendo da pergunta atual
  if (perguntaAtual == 0) {
    document.getElementById("botaoVoltar").style.display = "none";
  } else {
    document.getElementById("botaoVoltar").style.display = "inline-block";
  }

  // Troca o texto do botão "Próxima" para "Ver resultado" na última pergunta
  if (perguntaAtual == perguntas.length - 1) {
    document.getElementById("botaoProxima").innerHTML = "Ver resultado";
  } else {
    document.getElementById("botaoProxima").innerHTML = "Próxima pergunta";
  }
}

// Esta função guarda a alternativa escolhida pelo usuário.
function escolherAlternativa(indice) {
  respostasEscolhidas[perguntaAtual] = indice;
  mostrarPergunta(); // redesenha a tela para mostrar o botão selecionado
}

// Esta função avança para a próxima pergunta (ou vai para o resultado).
function proximaPergunta() {

  // Verifica se o usuário escolheu alguma alternativa
  if (respostasEscolhidas[perguntaAtual] == -1) {
    alert("Escolha uma alternativa antes de continuar.");
    return;
  }

  // Se ainda não chegou na última pergunta, avança uma pergunta
  if (perguntaAtual < perguntas.length - 1) {
    perguntaAtual = perguntaAtual + 1;
    mostrarPergunta();
  } else {
    // Se já respondeu a última pergunta, vai para a página de resultado.
    //
    // IMPORTANTE: quando o navegador troca de página (window.location.href),
    // ele apaga da memória TODAS as variáveis do script.js, inclusive
    // "respostasEscolhidas". Ou seja, a página resultado.html carrega o
    // script.js do zero, com respostasEscolhidas vazio de novo.
    //
    // Por isso, em vez de só calcular aqui, transformamos as respostas
    // num texto (ex: "0,2,1,3,...") e colocamos esse texto na URL.
    // A página resultado.html vai ler essa URL para saber as respostas
    // e só então fazer o cálculo.
    var textoRespostas = respostasEscolhidas.join(",");
    window.location.href = "resultado.html?respostas=" + textoRespostas;
  }
}

// Esta função volta para a pergunta anterior.
function perguntaAnterior() {
  if (perguntaAtual > 0) {
    perguntaAtual = perguntaAtual - 1;
    mostrarPergunta();
  }
}


// ------------------------------------------------------------
// 4. VARIÁVEIS QUE GUARDAM O RESULTADO FINAL
// ------------------------------------------------------------
// Cada uma dessas variáveis vai guardar o impacto (em gha) de um tema,
// depois que o cálculo for feito pela função calcularResultado().
var impactoAlimentacao = 0;
var impactoTransporte = 0;
var impactoMoradia = 0;
var impactoConsumo = 0;
var impactoResiduos = 0;
var pegadaTotal = 0;


// ------------------------------------------------------------
// 5. CÁLCULO DA PEGADA ECOLÓGICA
// ------------------------------------------------------------
// Esta função percorre as respostas do usuário e calcula o impacto
// de cada tema, usando a fórmula:
//   indiceTema = soma de (valor da resposta * peso da pergunta)
//   impactoTema = ghaBase do tema * indiceTema
function calcularResultado() {

  // As perguntas estão organizadas em blocos de 4 dentro do array
  // "perguntas": posições 0-3 = Alimentação, 4-7 = Transporte,
  // 8-11 = Moradia e Energia, 12-15 = Consumo, 16-19 = Resíduos.

  var indiceAlimentacao = 0;
  var indiceTransporte = 0;
  var indiceMoradia = 0;
  var indiceConsumo = 0;
  var indiceResiduos = 0;

  // Usamos um "for" tradicional para percorrer todas as 20 perguntas
  for (var i = 0; i < perguntas.length; i++) {

    var dadosPergunta = perguntas[i];
    var indiceEscolhido = respostasEscolhidas[i];
    var valorResposta = dadosPergunta.valores[indiceEscolhido];
    var pesoPergunta = dadosPergunta.peso;

    // contribuicao = quanto essa pergunta específica contribui para o índice do tema
    var contribuicao = valorResposta * pesoPergunta;

    // Verifica em qual tema (bloco de 4 perguntas) a pergunta "i" está
    if (i >= 0 && i <= 3) {
      indiceAlimentacao = indiceAlimentacao + contribuicao;
    } else if (i >= 4 && i <= 7) {
      indiceTransporte = indiceTransporte + contribuicao;
    } else if (i >= 8 && i <= 11) {
      indiceMoradia = indiceMoradia + contribuicao;
    } else if (i >= 12 && i <= 15) {
      indiceConsumo = indiceConsumo + contribuicao;
    } else if (i >= 16 && i <= 19) {
      indiceResiduos = indiceResiduos + contribuicao;
    }
  }

  // Agora multiplicamos o índice de cada tema pelo gha base do tema
  impactoAlimentacao = ghaBaseAlimentacao * indiceAlimentacao;
  impactoTransporte = ghaBaseTransporte * indiceTransporte;
  impactoMoradia = ghaBaseMoradia * indiceMoradia;
  impactoConsumo = ghaBaseConsumo * indiceConsumo;
  impactoResiduos = ghaBaseResiduos * indiceResiduos;

  // A pegada total é a soma do impacto de todos os temas
  pegadaTotal = impactoAlimentacao + impactoTransporte + impactoMoradia + impactoConsumo + impactoResiduos;
}


// ------------------------------------------------------------
// 6. FUNÇÕES DA PÁGINA RESULTADO.HTML
// ------------------------------------------------------------

// Valores de referência usados para comparação (definidos no enunciado do trabalho)
var mediaBrasileira = 2.4;
var biocapacidadeBrasileira = 8.1;

// Esta função decide o texto de classificação de acordo com a pegada total
function obterClassificacao(valor) {
  var textoClassificacao = "";

  if (valor < 2.0) {
    textoClassificacao = "Muito abaixo da média brasileira";
  } else if (valor >= 2.0 && valor <= 2.8) {
    textoClassificacao = "Próximo da média brasileira";
  } else if (valor > 2.8 && valor <= 3.5) {
    textoClassificacao = "Acima da média brasileira";
  } else if (valor > 3.5 && valor <= 5) {
    textoClassificacao = "Pegada elevada";
  } else {
    textoClassificacao = "Pegada muito elevada";
  }

  return textoClassificacao;
}

// Esta função devolve um texto de recomendação fixo para cada tema
function obterRecomendacao(nomeTema) {
  var textoRecomendacao = "";

  if (nomeTema == "🥗 Alimentação") {
    textoRecomendacao = "Tente reduzir o consumo de carne vermelha e evitar o desperdício de alimentos, dando preferência a produtos locais e da estação.";
  } else if (nomeTema == "🚌 Transporte") {
    textoRecomendacao = "Sempre que possível, use bicicleta, caminhada ou transporte público, e procure compartilhar caronas para reduzir o impacto dos deslocamentos.";
  } else if (nomeTema == "💡🏡 Moradia e Energia") {
    textoRecomendacao = "Troque lâmpadas por modelos LED, desligue aparelhos que não estão em uso e use o ar-condicionado com moderação.";
  } else if (nomeTema == "🛒🛍️ Consumo") {
    textoRecomendacao = "Antes de comprar algo novo, avalie se realmente precisa, prefira consertar o que já tem e evite compras por impulso.";
  } else if (nomeTema == "♻️ Resíduos") {
    textoRecomendacao = "Separe os materiais recicláveis, reutilize embalagens sempre que possível e descarte lixo eletrônico em pontos de coleta apropriados.";
  }

  return textoRecomendacao;
}

// Esta função descobre a ordem dos 3 temas de maior impacto,
// comparando os 5 valores com if/else (sem usar métodos avançados de array).
function obterRankingTemas() {

  // Guardamos cada tema junto com seu impacto num objeto simples
  var temaAlimentacao = { nome: "🥗 Alimentação", valor: impactoAlimentacao };
  var temaTransporte = { nome: "🚌 Transporte", valor: impactoTransporte };
  var temaMoradia = { nome: "💡🏡 Moradia e Energia", valor: impactoMoradia };
  var temaConsumo = { nome: "🛒🛍️ Consumo", valor: impactoConsumo };
  var temaResiduos = { nome: "♻️ Resíduos", valor: impactoResiduos };

  // Colocamos os 5 temas num array simples
  var listaTemas = [temaAlimentacao, temaTransporte, temaMoradia, temaConsumo, temaResiduos];

  // Fazemos uma ordenação simples (bolha/"bubble sort"), do maior para o menor.
  // Usamos apenas "for" e "if", sem métodos avançados de array.
  var tamanho = listaTemas.length;
  for (var a = 0; a < tamanho; a++) {
    for (var b = 0; b < tamanho - 1; b++) {
      if (listaTemas[b].valor < listaTemas[b + 1].valor) {
        var temaTemporario = listaTemas[b];
        listaTemas[b] = listaTemas[b + 1];
        listaTemas[b + 1] = temaTemporario;
      }
    }
  }

  return listaTemas;
}

// Esta função lê as respostas que vieram escritas na URL (depois de "?respostas=")
// e preenche a variável "respostasEscolhidas" com elas. Isso é necessário porque
// a página resultado.html abre com o script.js "zerado" — ela não tem acesso
// às variáveis que foram preenchidas enquanto o usuário respondia o quiz.html.
function lerRespostasDaURL() {

  // window.location.search devolve algo como "?respostas=0,2,1,3,..."
  var textoCompleto = window.location.search;

  // Tira o "?respostas=" do começo do texto, sobrando só os números separados por vírgula
  var prefixo = "?respostas=";
  var textoRespostas = textoCompleto.substring(prefixo.length);

  // Separa o texto em pedaços usando a vírgula como separador
  var pedacos = textoRespostas.split(",");

  // Converte cada pedaço de texto em número e guarda em respostasEscolhidas
  for (var i = 0; i < pedacos.length; i++) {
    respostasEscolhidas[i] = parseInt(pedacos[i]);
  }
}

// Esta função organiza e exibe todo o resultado na tela de resultado.html
function mostrarResultado() {

  // Primeiro lemos as respostas que vieram pela URL...
  lerRespostasDaURL();

  // ...depois calculamos a pegada ecológica com base nessas respostas
  calcularResultado();

  // ==========================================================
  // CASAMENTO COM O GLOBO: Salva o valor real na memória do navegador
  // ==========================================================
  localStorage.setItem("pegadaUsuario", pegadaTotal);

  // Exibe a pegada total, arredondada para 2 casas decimais
  document.getElementById("valorPegadaTotal").innerHTML = pegadaTotal.toFixed(2) + " gha";

  // Exibe os valores de comparação
  document.getElementById("valorMediaBrasileira").innerHTML = mediaBrasileira.toFixed(2) + " gha";
  document.getElementById("valorBiocapacidade").innerHTML = biocapacidadeBrasileira.toFixed(2) + " gha";

  // Calcula e exibe o percentual em relação à média brasileira
  var percentual = ((pegadaTotal - mediaBrasileira) / mediaBrasileira) * 100;
  var sinalTexto = "";
  if (percentual > 0) {
    sinalTexto = "+";
  }
  document.getElementById("valorPercentual").innerHTML = sinalTexto + percentual.toFixed(1) + "% em relação à média";

  // Exibe a classificação textual
  document.getElementById("valorClassificacao").innerHTML = obterClassificacao(pegadaTotal);

  // Monta o ranking dos 3 temas de maior impacto
  var temasOrdenados = obterRankingTemas();
  var areaRanking = document.getElementById("areaRanking");
  areaRanking.innerHTML = "";

  for (var i = 0; i < 3; i++) {

    var temaAtual = temasOrdenados[i];

    var blocoTema = document.createElement("div");
    blocoTema.className = "blocoTema";

    var titulo = document.createElement("h2");
    titulo.innerHTML = (i + 1) + "º - " + temaAtual.nome + " (" + temaAtual.valor.toFixed(2) + " gha)";

    var recomendacao = document.createElement("p");
    recomendacao.innerHTML = obterRecomendacao(temaAtual.nome);

    blocoTema.appendChild(titulo);
    blocoTema.appendChild(recomendacao);
    areaRanking.appendChild(blocoTema);
  }
}
// ------------------------------------------------------------
// 7. FUNÇÃO DA PÁGINA INDEX.HTML
// ------------------------------------------------------------

// Esta função reinicia o quiz, limpando todas as respostas anteriores.
// É chamada tanto pelo botão "Iniciar quiz" do index.html
// quanto pelo botão "Refazer quiz" do resultado.html.
function iniciarQuiz() {
  perguntaAtual = 0;
  for (var i = 0; i < perguntas.length; i++) {
    respostasEscolhidas[i] = -1;
  }
  window.location.href = "quiz.html";
}