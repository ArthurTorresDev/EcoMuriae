/* =====================================================
   EcoMuriaé | jogo.js
   Script exclusivo de jogo.html.

   Responsabilidades:
   - Banco de resíduos e sorteio de 20 por partida
   - Controle do temporizador (10s por resíduo)
   - Arrastar e soltar (mouse e toque na tela)
   - Sistema de pontuação
   - Ao terminar, manda o resultado pela URL e
     redireciona para resultado.html
   ===================================================== */


/* =====================================================
   1. BANCO DE RESÍDUOS  (36 itens no total)
   A cada partida são sorteados 20 aleatoriamente,
   então cada jogo tem uma sequência diferente.
   ===================================================== */
var BANCO_RESIDUOS = [

  /* ── PAPEL  →  lixeira azul ──────────────────────── */
  { nome: 'Jornal',                  emoji: '🗞️', categoria: 'papel'    },
  { nome: 'Caixa de Papelão',        emoji: '📦', categoria: 'papel'    },
  { nome: 'Folha de Papel',          emoji: '📄', categoria: 'papel'    },
  { nome: 'Caderno Velho',           emoji: '📓', categoria: 'papel'    },
  { nome: 'Envelope',                emoji: '✉️', categoria: 'papel'    },
  { nome: 'Revista',                 emoji: '📰', categoria: 'papel'    },
  { nome: 'Embalagem de Ovo',        emoji: '🥚', categoria: 'papel'    },
  { nome: 'Saco de Papel',           emoji: '🛍️', categoria: 'papel'    },
  { nome: 'Rolo de Papel Higienico', emoji: '🧻', categoria: 'papel'    },

  /* ── PLÁSTICO  →  lixeira vermelha ───────────────── */
  { nome: 'Yoyo',                  emoji: '🪀', categoria: 'plastico' },
  { nome: 'Sacola Plástica',       emoji: '🛍️', categoria: 'plastico' },
  { nome: 'Copo Descartável',      emoji: '🥤', categoria: 'plastico' },
  { nome: 'Pote de Biscoito',      emoji: '🫙', categoria: 'plastico' },
  { nome: 'Canudo Plástico',       emoji: '🥤', categoria: 'plastico' },
  { nome: 'Balde de Plástico',     emoji: '🪣', categoria: 'plastico' },
  { nome: 'Tampa de Garrafa Pet',  emoji: '🔘', categoria: 'plastico' },
  { nome: 'Brinquedo Plástico',    emoji: '🧸', categoria: 'plastico' },
  { nome: 'Bandeja de Isopor',     emoji: '🍱', categoria: 'plastico' },

  /* ── VIDRO  →  lixeira verde ─────────────────────── */
  { nome: 'Garrafa de Vidro',  emoji: '🍾', categoria: 'vidro' },
  { nome: 'Pote de Geleia',    emoji: '🫙', categoria: 'vidro' },
  { nome: 'Frasco de Perfume', emoji: '🧴', categoria: 'vidro' },
  { nome: 'Copo de Vidro',     emoji: '🥛', categoria: 'vidro' },
  { nome: 'Jarra de Vidro',    emoji: '🍶', categoria: 'vidro' },
  { nome: 'Vidro de Tempero',  emoji: '🧂', categoria: 'vidro' },
  { nome: 'Taça',              emoji: '🍸', categoria: 'vidro' },
  { nome: 'Espelho Quebrado',  emoji: '🪞', categoria: 'vidro' },
  { nome: 'Frasco de Molho',   emoji: '🫙🍅', categoria: 'vidro' },

  /* ── METAL  →  lixeira amarela ───────────────────── */
  { nome: 'Lata de Refrigerante',   emoji: '🥫', categoria: 'metal' },
  { nome: 'Lata de Conserva',       emoji: '🥫', categoria: 'metal' },
  { nome: 'Tampa Metálica',         emoji: '🔘', categoria: 'metal' },
  { nome: 'Balde de Ferro',         emoji: '🪣', categoria: 'metal' },
  { nome: 'Gancho de Aço',          emoji: '🪝', categoria: 'metal' },
  { nome: 'Prego',                  emoji: '📌', categoria: 'metal' },
  { nome: 'Sino',                   emoji: '🔔', categoria: 'metal' },
  { nome: 'Clipe Metálico',         emoji: '📎', categoria: 'metal' },
  { nome: 'Lata de Óleo',           emoji: '🛢️', categoria: 'metal' }
];

/* Quantos resíduos sortear por partida */
var TOTAL_POR_PARTIDA = 20;

/* Segundos permitidos para cada resíduo */
var TEMPO_POR_RESIDUO = 10;


/* =====================================================
   2. ESTADO DA PARTIDA
   Todas as variáveis que mudam enquanto o jogo roda.
   ===================================================== */
var pontuacao      = 0;      // pontos acumulados
var acertos        = 0;      // quantos resíduos foram acertados
var erros          = 0;      // quantos foram errados
var timeouts       = 0;      // quantos esgotaram o tempo
var indiceAtual    = 0;      // índice do resíduo sendo exibido
var listaJogo      = [];     // os 20 resíduos sorteados para esta partida
var aguardando     = false;  // trava: impede processar duas respostas ao mesmo tempo
var intervaloTimer = null;   // referência do setInterval do timer
var tempoRestante  = TEMPO_POR_RESIDUO;


/* =====================================================
   3. REFERÊNCIAS AO DOM
   Buscamos cada elemento uma vez e guardamos em variável.
   ===================================================== */
var pontuacaoEl      = document.getElementById('pontuacao-valor');
var timerValorEl     = document.getElementById('timer-valor');
var timerBlocoEl     = document.getElementById('timer-bloco');
var progressoTextoEl = document.getElementById('progresso-texto');
var barraEl          = document.getElementById('barra-preenchimento');
var residuoCard      = document.getElementById('residuo-card');
var residuoEmoji     = document.getElementById('residuo-emoji');
var residuoNome      = document.getElementById('residuo-nome');
var feedbackEl       = document.getElementById('feedback');
var feedbackTexto    = document.getElementById('feedback-texto');

/* Lista com as 4 lixeiras. querySelectorAll devolve uma lista
   parecida com um array, que percorremos com "for" tradicional. */
var lixeiras = document.querySelectorAll('.lixeira');


/* =====================================================
   4. FUNÇÕES AUXILIARES
   ===================================================== */

/* Embaralha um array (algoritmo de trocar posições aleatórias).
   Não altera o array original, devolve uma cópia embaralhada. */
function embaralhar(array) {
  var copia = array.slice(); // slice() sem argumentos copia o array inteiro
  var i, j, temp;

  for (i = copia.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = copia[i];
    copia[i] = copia[j];
    copia[j] = temp;
  }

  return copia;
}

/* Atualiza o número de pontos no HUD e dá um efeito rápido de cor */
function atualizarPlacar(valor) {
  pontuacaoEl.textContent = valor;

  // Adiciona a classe que muda a cor (definida no CSS)
  pontuacaoEl.classList.add('pulsar');

  // Remove a classe depois de 300ms para o efeito poder repetir depois
  setTimeout(function () {
    pontuacaoEl.classList.remove('pulsar');
  }, 300);
}

/* Procura, a partir de um elemento clicado/tocado, se ele (ou algum
   "pai" dele na árvore do HTML) é uma das 4 lixeiras. Devolve a
   lixeira encontrada, ou null se não for em cima de nenhuma.
   Isso substitui o método avançado elemento.closest('.lixeira'). */
function encontrarLixeira(elemento) {
  var atual = elemento;

  // Sobe na árvore do HTML até achar uma lixeira ou até não ter mais pai
  while (atual !== null && atual !== undefined) {

    // Procura se "atual" é uma das lixeiras da nossa lista
    var i;
    for (i = 0; i < lixeiras.length; i++) {
      if (lixeiras[i] === atual) {
        return lixeiras[i];
      }
    }

    atual = atual.parentElement;
  }

  return null; // não achou nenhuma lixeira
}

/* Tira a classe "drag-sobre" de todas as lixeiras de uma vez */
function limparDestaqueLixeiras() {
  var i;
  for (i = 0; i < lixeiras.length; i++) {
    lixeiras[i].classList.remove('drag-sobre');
  }
}


/* =====================================================
   5. TEMPORIZADOR
   ===================================================== */

/* Inicia a contagem regressiva de 10 segundos */
function iniciarTimer() {
  pararTimer();
  tempoRestante = TEMPO_POR_RESIDUO;
  atualizarVisualTimer(tempoRestante);

  // setInterval chama a função a cada 1000ms (1 segundo)
  intervaloTimer = setInterval(function () {
    tempoRestante = tempoRestante - 1;
    atualizarVisualTimer(tempoRestante);

    if (tempoRestante <= 0) {
      pararTimer();
      aoEsgotarTempo();
    }
  }, 1000);
}

/* Para o timer (limpa o intervalo) */
function pararTimer() {
  if (intervaloTimer !== null) {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
  }
}

/* Atualiza o número e a cor do círculo do temporizador.
   O círculo fica verde normalmente e vira vermelho
   (classe "urgente") nos últimos 3 segundos. */
function atualizarVisualTimer(segundos) {
  timerValorEl.textContent = segundos;

  if (segundos <= 3 && segundos > 0) {
    timerBlocoEl.classList.add('urgente');
  } else {
    timerBlocoEl.classList.remove('urgente');
  }
}

/* Chamada quando o tempo acaba sem o jogador responder */
function aoEsgotarTempo() {
  if (aguardando) {
    return; // segurança: não executa duas vezes
  }
  aguardando = true;

  timeouts = timeouts + 1;
  pontuacao = pontuacao - 3;
  if (pontuacao < 0) {
    pontuacao = 0; // a pontuação nunca fica negativa
  }
  atualizarPlacar(pontuacao);

  mostrarFeedback('⏰ Tempo esgotado! −3 pts', 'timeout');
  residuoCard.style.display = 'none';

  setTimeout(function () {
    indiceAtual = indiceAtual + 1;
    if (indiceAtual < listaJogo.length) {
      carregarResiduo();
    } else {
      encerrarJogo();
    }
  }, 1400);
}


/* =====================================================
   6. FLUXO DO JOGO
   ===================================================== */

/* Inicializa a partida: zera o estado, sorteia os resíduos
   e carrega o primeiro item na tela */
function iniciarJogo() {
  pontuacao   = 0;
  acertos     = 0;
  erros       = 0;
  timeouts    = 0;
  indiceAtual = 0;

  // Embaralha o banco e pega só os primeiros 20 itens
  listaJogo = embaralhar(BANCO_RESIDUOS).slice(0, TOTAL_POR_PARTIDA);

  atualizarPlacar(0);
  carregarResiduo();
}

/* Mostra na tela o resíduo da posição "indiceAtual" e reinicia o timer */
function carregarResiduo() {
  aguardando = false;

  // Esconde o feedback e tira as animações da rodada anterior
  feedbackEl.classList.add('oculto');
  feedbackEl.classList.remove('correto', 'erro', 'timeout');

  var i;
  for (i = 0; i < lixeiras.length; i++) {
    lixeiras[i].classList.remove('acertou', 'errou', 'drag-sobre');
  }

  // Preenche o card com os dados do resíduo atual
  var item = listaJogo[indiceAtual];
  residuoEmoji.textContent = item.emoji;
  residuoNome.textContent = item.nome;

  // Garante que o card esteja visível
  residuoCard.style.display = 'flex';
  residuoCard.style.opacity = '1';
  residuoCard.classList.remove('arrastando');

  // Atualiza a barra e o texto de progresso
  var percentual = (indiceAtual / listaJogo.length) * 100;
  barraEl.style.width = percentual + '%';
  progressoTextoEl.textContent = (indiceAtual + 1) + ' / ' + listaJogo.length;

  iniciarTimer();
}

/* Processa a resposta do jogador (em qual lixeira ele soltou o resíduo) */
function processarResposta(categoriaEscolhida, lixeiraEl) {
  if (aguardando) {
    return;
  }
  aguardando = true;
  pararTimer();

  var item = listaJogo[indiceAtual];
  var correto = (categoriaEscolhida === item.categoria);

  if (correto) {
    acertos = acertos + 1;
    pontuacao = pontuacao + 10;
    mostrarFeedback('✅ Correto! +10 pts', 'correto');
    lixeiraEl.classList.add('acertou');
  } else {
    erros = erros + 1;
    pontuacao = pontuacao - 5;
    if (pontuacao < 0) {
      pontuacao = 0; // a pontuação nunca fica negativa
    }
    mostrarFeedback('❌ Errado! −5 pts', 'erro');
    lixeiraEl.classList.add('errou');
  }

  atualizarPlacar(pontuacao);
  residuoCard.style.display = 'none';

  // Espera o jogador ler o feedback antes de ir para o próximo
  setTimeout(function () {
    indiceAtual = indiceAtual + 1;
    if (indiceAtual < listaJogo.length) {
      carregarResiduo();
    } else {
      encerrarJogo();
    }
  }, 1400);
}

/* Exibe a mensagem de feedback colorida (acerto / erro / tempo esgotado) */
function mostrarFeedback(mensagem, tipo) {
  feedbackTexto.textContent = mensagem;
  feedbackEl.classList.remove('oculto', 'correto', 'erro', 'timeout');
  feedbackEl.classList.add(tipo);
}

/* Chamada quando os 20 resíduos acabam.
   Monta um texto simples com o resultado e manda pela URL
   para a página resultado.html, que vai ler e mostrar os dados. */
function encerrarJogo() {
  pararTimer();

  // Texto no formato "pontuacao,acertos,erros,timeouts,total"
  var textoResultado =
    pontuacao + ',' +
    acertos + ',' +
    erros + ',' +
    timeouts + ',' +
    listaJogo.length;

  window.location.href = 'resultado.html?resultado=' + textoResultado;
}


/* =====================================================
   7. ARRASTAR E SOLTAR — MOUSE (DESKTOP)
   Usamos os eventos nativos do HTML5:
     dragstart → quando o usuário começa a arrastar
     dragover  → quando passa em cima de uma lixeira
     dragleave → quando sai de cima da lixeira
     drop      → quando solta em cima da lixeira
   ===================================================== */

residuoCard.addEventListener('dragstart', function (evento) {
  evento.dataTransfer.setData('text/plain', 'residuo'); // obrigatório no Firefox
  residuoCard.classList.add('arrastando');
});

residuoCard.addEventListener('dragend', function () {
  residuoCard.classList.remove('arrastando');
});

// Configura cada uma das 4 lixeiras para aceitar o drop
var indiceLixeira;
for (indiceLixeira = 0; indiceLixeira < lixeiras.length; indiceLixeira++) {

  // Guardamos a lixeira da vez numa variável separada do "for"
  // para cada função de evento usar a lixeira certa.
  var lixeiraAtual = lixeiras[indiceLixeira];

  lixeiraAtual.addEventListener('dragover', function (evento) {
    evento.preventDefault(); // sem isso o drop não funciona
    this.classList.add('drag-sobre');
  });

  lixeiraAtual.addEventListener('dragleave', function () {
    this.classList.remove('drag-sobre');
  });

  lixeiraAtual.addEventListener('drop', function (evento) {
    evento.preventDefault();
    this.classList.remove('drag-sobre');
    processarResposta(this.dataset.categoria, this);
  });
}


/* =====================================================
   8. ARRASTAR E SOLTAR — TOQUE NA TELA (CELULAR)
   O arrastar nativo do item 7 não funciona bem em celulares.
   Por isso seguimos o toque do dedo manualmente:
     - Criamos uma cópia visual do card que segue o dedo
     - Ao soltar, verificamos em qual elemento o dedo estava
   ===================================================== */

var cloneTouch = null; // cópia visual que segue o dedo
var offsetX = 0;       // distância do toque até o canto esquerdo do card
var offsetY = 0;       // distância do toque até o canto de cima do card

residuoCard.addEventListener('touchstart', function (evento) {
  evento.preventDefault(); // evita rolar a tela sem querer durante o arrasto

  var toque = evento.touches[0];
  var posicaoCard = residuoCard.getBoundingClientRect();

  offsetX = toque.clientX - posicaoCard.left;
  offsetY = toque.clientY - posicaoCard.top;

  // Cria uma cópia visual do card que vai seguir o dedo na tela
  cloneTouch = residuoCard.cloneNode(true); // true = copia o conteúdo de dentro também
  cloneTouch.removeAttribute('id'); // evita ter dois elementos com o mesmo id
  cloneTouch.style.position = 'fixed';
  cloneTouch.style.width = posicaoCard.width + 'px';
  cloneTouch.style.left = (toque.clientX - offsetX) + 'px';
  cloneTouch.style.top = (toque.clientY - offsetY) + 'px';
  cloneTouch.style.opacity = '0.88';
  cloneTouch.style.pointerEvents = 'none'; // a cópia não atrapalha o toque
  cloneTouch.style.zIndex = '9999';

  document.body.appendChild(cloneTouch);
  residuoCard.style.opacity = '0.3'; // deixa o card original meio transparente

}, { passive: false });

residuoCard.addEventListener('touchmove', function (evento) {
  evento.preventDefault();

  var toque = evento.touches[0];

  if (cloneTouch !== null) {
    cloneTouch.style.left = (toque.clientX - offsetX) + 'px';
    cloneTouch.style.top = (toque.clientY - offsetY) + 'px';
  }

  // Descobre o que está embaixo do dedo agora
  var elementoEmbaixo = document.elementFromPoint(toque.clientX, toque.clientY);
  var lixeiraEmbaixo = encontrarLixeira(elementoEmbaixo);

  limparDestaqueLixeiras();
  if (lixeiraEmbaixo !== null) {
    lixeiraEmbaixo.classList.add('drag-sobre');
  }

}, { passive: false });

residuoCard.addEventListener('touchend', function (evento) {
  evento.preventDefault();

  var toque = evento.changedTouches[0]; // posição onde o dedo saiu da tela

  // Remove a cópia visual
  if (cloneTouch !== null) {
    document.body.removeChild(cloneTouch);
    cloneTouch = null;
  }

  residuoCard.style.opacity = '1';
  limparDestaqueLixeiras();

  // Verifica se o dedo foi solto em cima de alguma lixeira
  var elementoFinal = document.elementFromPoint(toque.clientX, toque.clientY);
  var lixeiraAlvo = encontrarLixeira(elementoFinal);

  if (lixeiraAlvo !== null) {
    processarResposta(lixeiraAlvo.dataset.categoria, lixeiraAlvo);
  }
  // Se soltou fora de uma lixeira, o timer continua rodando normalmente

}, { passive: false });


/* =====================================================
   9. ACESSIBILIDADE — TECLADO
   Permite usar Tab para passar de uma lixeira para outra
   e apertar Enter ou Espaço para escolher aquela lixeira.
   ===================================================== */

var indiceTeclado;
for (indiceTeclado = 0; indiceTeclado < lixeiras.length; indiceTeclado++) {

  var lixeiraTeclado = lixeiras[indiceTeclado];

  lixeiraTeclado.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      processarResposta(this.dataset.categoria, this);
    }
  });
}


/* =====================================================
   10. INICIALIZAÇÃO
   Quando a página carrega, a partida começa imediatamente.
   ===================================================== */
iniciarJogo();
