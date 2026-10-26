/* =====================================================
   EcoMuriaé | resultado.js
   Script exclusivo de resultado.html.

   Responsabilidade:
   - Ler os dados da partida que vieram escritos na URL
   - Preencher os elementos da tela com as estatísticas
   - Definir ícone e mensagem conforme o desempenho
   - Se não houver dados na URL (acesso direto à página),
     redireciona para index.html
   ===================================================== */


/* =====================================================
   1. LER OS DADOS QUE VIERAM NA URL
   ===================================================== */

/*
  jogo.js manda o jogador para uma URL parecida com:
    resultado.html?resultado=80,7,2,1,20

  window.location.search devolve o texto depois do "?",
  ou seja: "?resultado=80,7,2,1,20"
*/
var textoCompleto = window.location.search;

/* Segurança: se o jogador abriu resultado.html diretamente
   (sem passar pelo jogo), não existe "?resultado=" na URL. */
if (textoCompleto.indexOf('?resultado=') !== 0) {
  window.location.href = 'index.html';
}

/* Tira o "?resultado=" do começo, sobrando só os números
   separados por vírgula: "80,7,2,1,20" */
var prefixo = '?resultado=';
var textoNumeros = textoCompleto.substring(prefixo.length);

/* Separa o texto em pedaços usando a vírgula como separador */
var partes = textoNumeros.split(',');

/* Converte cada pedaço de texto em número.
   A ordem é sempre a mesma que o jogo.js usou para montar a URL:
   pontuacao, acertos, erros, timeouts, total */
var pontuacaoFinal = parseInt(partes[0]);
var acertosFinal   = parseInt(partes[1]);
var errosFinal     = parseInt(partes[2]);
var timeoutsFinal  = parseInt(partes[3]);
var totalResiduos  = parseInt(partes[4]);


/* =====================================================
   2. REFERÊNCIAS AO DOM
   ===================================================== */
var iconeEl    = document.getElementById('resultado-icone');
var ptsEl      = document.getElementById('stat-pontuacao');
var acertosEl  = document.getElementById('stat-acertos');
var errosEl    = document.getElementById('stat-erros');
var timeoutsEl = document.getElementById('stat-timeouts');
var mensagemEl = document.getElementById('resultado-mensagem');


/* =====================================================
   3. PREENCHER OS ELEMENTOS COM OS DADOS DA PARTIDA
   ===================================================== */
ptsEl.textContent      = pontuacaoFinal;
acertosEl.textContent  = acertosFinal;
errosEl.textContent    = errosFinal;
timeoutsEl.textContent = timeoutsFinal;


/* =====================================================
   4. MENSAGEM E ÍCONE BASEADOS NO DESEMPENHO
   ===================================================== */

/* Calcula a pontuação máxima possível:
   se acertou tudo → total × 10 pontos */
var pontuacaoMaxima = totalResiduos * 10;

/* Define ícone e mensagem conforme o percentual atingido */
var icone;
var mensagem;

if (pontuacaoFinal >= pontuacaoMaxima * 0.8) {
  /* 80% ou mais: excelente */
  icone = '🏆';
  mensagem = 'Incrível! Você domina a coleta seletiva de Muriaé!';

} else if (pontuacaoFinal >= pontuacaoMaxima * 0.5) {
  /* Entre 50% e 79%: bom */
  icone = '🌱';
  mensagem = 'Bom trabalho! Continue praticando para melhorar ainda mais.';

} else {
  /* Abaixo de 50%: precisa praticar */
  icone = '♻️';
  mensagem = 'Não desista! Cada tentativa é um passo para um mundo mais limpo.';
}

iconeEl.textContent = icone;
mensagemEl.textContent = mensagem;


/*
  Os botões "Jogar Novamente" e "Início" são simples
  links <a href="..."> no HTML — não precisam de JS.

  Como cada partida gera uma URL nova com "?resultado=...",
  se o jogador apertar F5 para recarregar a página, ele vai
  apenas ver o mesmo resultado de novo (não tem problema,
  porque os dados estão na própria URL, não em um
  armazenamento temporário do navegador).
*/
