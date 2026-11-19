const ESTADO_FIXO = {"borda": "A4C-selo", "anelPulso": false, "monoOn": true, "monoX": 145.9, "monoY": 426.3, "monoLarg": 56.9, "monoNaFrente": false, "persEsc": 100, "persX": 25, "persY": -25, "fundoTipo": "roxo", "fundoOp": 81, "fundoY": -72, "fundoX": 0, "fundoEsc": 100, "escQuebra": true, "saidaEsq": 70, "saidaDirIni": 60, "saidaDirFim": 45, "cacosQtd": 0, "cacosTam": 2, "cruzX": 178, "cruzY": 243, "cruzAlt": 430, "cruzLarg": 118, "cruzRot": -1.5, "cruzOp": 100, "cruzSai": true, "cruzCor": "#fff4e4", "pulsoBase": 9, "pulsoInt": 31, "pulsoVel": 0.3, "anelOn": true, "anelX": -3, "anelY": 77, "anelEsc": 89, "anelVolta": 9.5, "anelSentido": false, "anelInt": 103, "anelBrilho": 130, "anelSat": 101, "auraOn": false, "auraX": 184, "auraY": 398, "auraRaio": 177, "auraAlt": 115, "auraInc": 14, "auraVel": 10, "auraSentido": false, "auraRep": 3, "auraOp": 100, "auraCor": "#E9A0BF", "auraCorEsc": "#8a2a5a", "auraDens": 280, "auraFrente": true, "auraBrilho": 0, "partCor": "#E9A0BF", "partVar": 45, "sombraOp": 100, "animOn": true, "animAuto": false, "animClique": true, "shimOn": true, "shimCor": "#ffffff", "shimOp": 60, "shimLarg": 20, "shimAng": 120, "shimDur": 1.2, "shimPausa": 3, "shimModo": "overlay", "rodVerso": true, "rodTarja": false, "cslX": 0, "cslY": 0, "cslEsc": 100, "cslCamada": "atras", "tiltOn": true, "tiltForca": 12, "profEsc": 0, "profCruz": -12, "_versao": 2, "fumLoopOp": 45, "fumBranco": 70, "fumVel": 90, "fumSome": 1, "fumSomeDur": 1, "txtContorno": 0.9};

// ---------- geometria: carta Ascendant (lvl 3) do deadcards, 350x505, moldura de 4 px
const CW = 350, CH = 505, PAD = 4, IW = CW - 2 * PAD, IH = CH - 2 * PAD;
const FORMA_ASC = [[0,5.5],[8,0],[36,0],[50,3.5],[64,0],[92,0],[100,5.5],[100,86],[50,100],[0,86]];
let FORMA = FORMA_ASC;
const BORDAS = {"A": {"nome": "A \u00b7 Manchete (monograma)", "svg": "bordas/borda-A2-manchete-monograma.svg", "fora": [[0.0, 3.0], [3.0, 0.0], [36.0, 0.0], [40.0, 2.2], [60.0, 2.2], [64.0, 0.0], [97.0, 0.0], [100.0, 3.0], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[5.5, 6.52], [8.17, 3.75], [37.54, 3.75], [41.1, 5.78], [58.9, 5.78], [62.46, 3.75], [91.83, 3.75], [94.5, 6.52], [94.5, 83.3], [50.0, 96.25], [5.5, 83.3]], "mono": {"left": 139, "top": -22, "width": 72, "height": 92}}, "B": {"nome": "B \u00b7 Vidente", "svg": "bordas/borda-B-vidente.svg", "fora": [[0.0, 14.0], [6.0, 7.0], [22.0, 2.5], [50.0, 0.0], [78.0, 2.5], [94.0, 7.0], [100.0, 14.0], [100.0, 82.0], [96.0, 82.0], [96.0, 86.0], [92.0, 86.0], [92.0, 89.5], [50.0, 100.0], [8.0, 89.5], [8.0, 86.0], [4.0, 86.0], [4.0, 82.0], [0.0, 82.0]], "interno": [[5.25, 16.7], [10.62, 10.22], [24.94, 6.06], [50.0, 3.75], [75.06, 6.06], [89.38, 10.22], [94.75, 16.7], [94.75, 79.6], [91.17, 79.6], [91.17, 83.3], [87.59, 83.3], [87.59, 86.54], [50.0, 96.25], [12.41, 86.54], [12.41, 83.3], [8.83, 83.3], [8.83, 79.6], [5.25, 79.6]]}, "C": {"nome": "C \u00b7 Selo", "svg": "bordas/borda-C-selo.svg", "fora": [[0.0, 5.5], [8.0, 0.0], [36.0, 0.0], [50.0, 3.5], [64.0, 0.0], [92.0, 0.0], [100.0, 5.5], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[5.75, 9.15], [12.83, 4.1], [37.61, 4.1], [50.0, 7.31], [62.39, 4.1], [87.17, 4.1], [94.25, 9.15], [94.25, 83.05], [50.0, 95.9], [5.75, 83.05]]}, "A3": {"nome": "A3 \u00b7 Manchete, faixa grossa", "svg": "bordas/borda-A3-manchete-faixa.svg", "fora": [[0.0, 3.0], [3.0, 0.0], [97.0, 0.0], [100.0, 3.0], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[5.5, 8.61], [8.17, 8.61], [91.83, 8.61], [94.5, 8.61], [94.5, 83.3], [50.0, 96.25], [5.5, 83.3]], "mono": {"left": 151.6, "top": -13, "width": 46.7, "height": 60, "clip": "path('M-1000 -1000 H1000 V52.3 H-1000 Z')"}}, "A4": {"nome": "A4 \u00b7 Manchete, orbe no canto", "svg": "bordas/borda-A4-manchete-orbe.svg", "fora": [[0.0, 3.0], [3.0, 0.0], [97.0, 0.0], [100.0, 3.0], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[5.5, 6.52], [8.17, 3.75], [91.83, 3.75], [94.5, 6.52], [94.5, 83.3], [50.0, 96.25], [5.5, 83.3]], "mono": {"left": 295.3, "top": -9.6, "width": 48.3, "height": 62, "clip": "path('M-1000 -1000 H1000 V38.6 H45.1 A20.4 20.4 0 0 1 4.3 38.6 H-1000 Z')"}}, "A3-selo": {"nome": "A3 \u00b7 selo (faixa grossa)", "svg": "bordas/borda-A3-selo.svg", "fora": [[0.0, 3.0], [3.0, 0.0], [97.0, 0.0], [100.0, 3.0], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[3.25, 7.92], [6.05, 7.92], [93.95, 7.92], [96.75, 7.92], [96.75, 84.27], [50.0, 97.6], [3.25, 84.27]], "mono": {"left": 151.6, "top": -13, "width": 46.7, "height": 60, "clip": "path('M-1000 -1000 H1000 V52.3 H-1000 Z')"}}, "A4-selo": {"nome": "A4 \u00b7 selo (orbe no canto)", "svg": "bordas/borda-A4-selo.svg", "fora": [[0.0, 3.0], [3.0, 0.0], [97.0, 0.0], [100.0, 3.0], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[3.25, 5.26], [6.05, 2.4], [93.95, 2.4], [96.75, 5.26], [96.75, 84.27], [50.0, 97.6], [3.25, 84.27]], "mono": {"left": 295.3, "top": -9.6, "width": 48.3, "height": 62, "clip": "path('M-1000 -1000 H1000 V38.6 H45.1 A20.4 20.4 0 0 1 4.3 38.6 H-1000 Z')"}}, "A4C-selo": {"nome": "A4C \u00b7 selo (monograma embaixo)", "svg": "{{asset:bordas-borda-A4C-selo.svg}}", "fora": [[0.0, 3.0], [3.0, 0.0], [97.0, 0.0], [100.0, 3.0], [100.0, 86.0], [50.0, 100.0], [0.0, 86.0]], "interno": [[3.25, 5.26], [6.05, 2.4], [93.95, 2.4], [96.75, 5.26], [96.75, 84.27], [50.0, 97.6], [3.25, 84.27]], "mono": {"left": 145.9, "top": 426.3, "width": 56.9, "height": 73, "clip": "polygon(-545.9px -1426.3px, 604.1px -1426.3px, 604.1px -169.9px, 29.1px 66.6px, -545.9px -169.9px)"}}};
const VERSO_MONO = {"left": -40.3, "top": -25, "width": 420.6, "height": 540, "clip": "polygon(-359.7px -975.0px, 790.3px -975.0px, 790.3px 286.5px, 215.3px 521.9px, -359.7px 286.5px)"};
const TEM_ANIM = true;
const UNICO = true;
const TEM_FUMACA = true;   // camada de fumaça (estilo do jogo) por cima de tudo do personagem   // render de 1 camada: o mesmo vídeo do personagem dentro da carta e (recortado pela área de saída) por cima da borda
const ENC = {"w": 1920, "h": 2600, "k": 0.35, "l": -264.59999999999997, "t": -336.0, "cruzProp": 0.5518};   // encaixe base do render na área interna (gerado pelo gera_editor.py)
const IMG_W = ENC.w, IMG_H = ENC.h, K0 = ENC.k, L0 = ENC.l, T0 = ENC.t;
const ROSA = '#E9A0BF';
let ang = 0, t0 = 0;
// ---------- controles (padrões)
const SPEC = [
  ['Borda da carta', [['borda', 'Modelo', 'sel', 'A4C-selo', [['asc', 'Ascendant (deadcards)'], ...Object.entries(BORDAS).map(([k, b]) => [k, b.nome])]], ['anelPulso', 'Anel pulsando por cima', 'bool', true]]],
  ['Monograma animado (topo)', [['monoOn', 'Mostrar', 'bool', true], ['monoX', 'Esquerda', -100, 400, 1, 139, 'px'], ['monoY', 'Topo', -150, 450, 1, -22, 'px'], ['monoLarg', 'Largura', 20, 300, 1, 72, 'px'], ['monoNaFrente', 'Na frente da cabeça', 'bool', false]]],
  ['Personagem', [
    ['persEsc', 'Tamanho', 40, 250, 1, 100, '%'], ['persX', 'Posição X', -300, 300, 1, 0, 'px'], ['persY', 'Posição Y', -300, 300, 1, 0, 'px'],
    ['fundoTipo', 'Fundo', 'sel', 'roxo', [['roxo', 'Roxo do verso (Oráculo)'], ['cena', 'Cena do render']]], ['fundoOp', 'Força do fundo', 0, 100, 1, 100, '%'], ['fundoY', 'Altura do fundo roxo', -300, 300, 1, 0, 'px'], ['fundoX', 'Posição X do fundo roxo', -200, 200, 1, 0, 'px'], ['fundoEsc', 'Tamanho do fundo roxo', 50, 250, 1, 100, '%']]],
  ['Cabeça, armas e besta (quebram a moldura)', [
    ['escQuebra', 'Quebrar moldura', 'bool', true], ['saidaEsq', 'Saída esquerda até', 0, 100, 1, 70, '%'], ['saidaDirIni', 'Saída direita até (pose inicial)', 0, 100, 1, 60, '%'], ['saidaDirFim', 'Saída direita até (após o recuo)', 0, 100, 1, 45, '%'], ['cacosQtd', 'Estilhaços', 0, 12, 1, 4, ''], ['cacosTam', 'Tam. estilhaço', 2, 14, .5, 5, 'px']]],
  ['Cruz', [
    ['cruzX', 'Centro X', -150, 500, 1, 171, 'px'], ['cruzY', 'Centro Y', -300, 550, 1, 120, 'px'], ['cruzAlt', 'Altura', 40, 900, 1, 330, 'px'],
    ['cruzLarg', 'Largura', 30, 250, 1, 100, '%'], ['cruzRot', 'Rotação', -180, 180, .5, 0, '°'], ['cruzOp', 'Opacidade', 0, 100, 1, 100, '%'],
    ['cruzSai', 'Sai pelo topo', 'bool', true], ['cruzCor', 'Cor do brilho', 'cor', '#fff4e4'],
    ['pulsoBase', 'Brilho base', 0, 80, 1, 18, 'px'], ['pulsoInt', 'Pulso: intensidade', 0, 100, 1, 55, '%'], ['pulsoVel', 'Pulso: velocidade', 0, 4, .05, 0.8, 'Hz']]],
  ['Auréola do render (girando)', [
    ['anelOn', 'Mostrar', 'bool', true], ['anelX', 'Posição X', -300, 300, 1, 0, 'px'], ['anelY', 'Altura (Y)', -500, 300, 1, 0, 'px'], ['anelEsc', 'Tamanho', 30, 250, 1, 100, '%'],
    ['anelVolta', 'Giro (s por volta)', 1, 60, .5, 12, 's'], ['anelSentido', 'Sentido inverso', 'bool', false],
    ['anelInt', 'Intensidade', 0, 200, 1, 100, '%'], ['anelBrilho', 'Brilho', 50, 250, 1, 100, '%'], ['anelSat', 'Saturação', 0, 200, 1, 100, '%']]],
  ['Auréola desenhada (antiga)', [
    ['auraOn', 'Mostrar', 'bool', false], ['auraX', 'Centro X', -100, 450, 1, 171, 'px'], ['auraY', 'Centro Y', -100, 600, 1, 255, 'px'],
    ['auraRaio', 'Raio', 20, 400, 1, 150, 'px'], ['auraAlt', 'Altura da faixa', 10, 300, 1, 95, 'px'], ['auraInc', 'Inclinação', -80, 80, 1, 14, '°'],
    ['auraVel', 'Giro (s por volta)', 0, 60, .5, 10, 's'], ['auraSentido', 'Sentido inverso', 'bool', false], ['auraRep', 'Repetições da textura', 1, 8, 1, 3, ''],
    ['auraOp', 'Opacidade', 0, 100, 1, 100, '%'], ['auraCor', 'Cor clara', 'cor', ROSA], ['auraCorEsc', 'Cor escura (pinceladas)', 'cor', '#8a2a5a'],
    ['auraDens', 'Densidade da tinta', 50, 500, 1, 280, '%'], ['auraFrente', 'Passa pela frente dele', 'bool', true], ['auraBrilho', 'Brilho', 0, 40, 1, 0, 'px']]],
  ['Partículas da carta', [
    ['partCor', 'Cor base', 'cor', ROSA], ['partVar', 'Variação', 0, 100, 1, 45, '%']]],
  ['Sombra do rodapé', [['sombraOp', 'Intensidade', 0, 100, 1, 100, '%']]],
  ['Composição na tela', [['compTam', 'Tamanho da composição', 30, 250, 1, 100, '%'], ['compY', 'Subir / descer', -60, 60, .5, 0, '%']]],
  ['Animação (tiro → loop do end frame)', [['animOn', 'Animar a carta', 'bool', true], ['animAuto', 'Tocar o tiro ao abrir', 'bool', false], ['animClique', 'Clique repete o tiro', 'bool', true]]],
  ['Fumaça (estilo do jogo)', [['fumOn', 'Mostrar', 'bool', true], ['fumOp', 'Força', 0, 100, 1, 100, '%'], ['fumBaixo', 'Corta abaixo de (altura)', 0, 100, 1, 86, '%'], ['fumLoopOp', 'Depois do tiro: força', 0, 100, 1, 45, '%'], ['fumBranco', 'Depois do tiro: branco', 0, 100, 1, 70, '%'], ['fumVel', 'Depois do tiro: velocidade', 10, 100, 1, 90, '%'], ['fumSome', 'Some depois de (0 = nunca)', 0, 10, .1, 1, 's'], ['fumSomeDur', 'Tempo para sumir', 0.1, 4, .1, 1, 's']]],
  ['Brilho que passa (shimmer-sweep do HyperFrames)', [['shimOn', 'Mostrar', 'bool', true], ['shimCor', 'Cor', 'cor', '#ffffff'], ['shimOp', 'Força', 0, 100, 1, 60, '%'],
    ['shimLarg', 'Largura da faixa', 2, 80, 1, 20, '%'], ['shimAng', 'Ângulo', 0, 360, 1, 120, '°'], ['shimDur', 'Duração da passada', 0.2, 6, .05, 1.2, 's'], ['shimPausa', 'Pausa entre passadas', 0, 15, .1, 3, 's'], ['shimModo', 'Mistura', 'sel', 'overlay', [['overlay', 'overlay (igual ao HyperFrames)'], ['soft-light', 'soft-light'], ['screen', 'screen (mais forte)']]]]],
  ['Textos da carta (contorno no lugar do brilho)', [['txtContorno', 'Contorno (cor da linha interna da borda)', 0, 4, .1, .9, 'px'], ['txtEsc', 'Tamanho dos textos', 80, 130, 1, 108, '%'], ['txtSobe', 'Subir a parte de baixo', 0, 10, .1, 2.5, '%']]],
  ['CARDSLOCK da frente (estilo do verso)', [['rodVerso', 'Mostrar', 'bool', true], ['rodTarja', 'Com a tarja EDIÇÃO EXTRA do verso', 'bool', false],
    ['cslX', 'Posição X', -150, 150, .5, 0, 'px'], ['cslY', 'Posição Y', -300, 100, .5, 0, 'px'], ['cslEsc', 'Tamanho', 30, 200, 1, 100, '%'],
    ['cslCamada', 'Camada', 'sel', 'atras', [['atras', 'atrás do monograma'], ['frente', 'na frente de tudo']]]]],
  ['Paralaxe (inclinar com o mouse)', [
    ['tiltOn', 'Inclinação da carta', 'bool', true], ['tiltForca', 'Força', 0, 30, 1, 12, '°']]],
];
const PADRAO = {}; SPEC.forEach(([, cs]) => cs.forEach(c => PADRAO[c[0]] = c[2] === 'bool' || c[2] === 'cor' || c[2] === 'sel' ? c[3] : c[5]));
let E = { ...PADRAO };
const $ = (id) => document.getElementById(id);
// ---------- painel (régua + caixa para digitar)
const painel = $('painel'); const ins = {};
SPEC.forEach(([titulo, cs], i) => {
  const d = document.createElement('details'); if (i < 4) d.open = true; d.innerHTML = `<summary>${titulo}</summary>`;
  for (const c of cs) {
    const [k, rot, a, b] = c; const row = document.createElement('div');
    if (a === 'sel') { row.className = 'ctl'; row.innerHTML = `<span>${rot}</span><select id="c_${k}" style="grid-column:span 2;min-height:28px;background:#0f0f13;color:#eee;border:1px solid #333;border-radius:5px">${c[4].map(([v, t]) => `<option value="${v}">${t}</option>`).join('')}</select>`; }
    else if (a === 'bool') { row.className = 'lig'; row.innerHTML = `<input type="checkbox" id="c_${k}"><label for="c_${k}">${rot}</label>`; }
    else if (a === 'cor') { row.className = 'ctl'; row.innerHTML = `<span>${rot}</span><input type="color" id="c_${k}">`; }
    else { row.className = 'ctl'; row.innerHTML = `<span title="${c[6]}">${rot}${c[6] && c[6] !== 'px' ? ` (${c[6]})` : ''}</span><input type="range" id="c_${k}" min="${a}" max="${b}" step="${c[4]}"><input class="num" type="number" step="${c[4]}">`; }
    d.appendChild(row); const o = ins[k] = { el: row.querySelector('input, select'), num: row.querySelector('.num'), tipo: a === 'bool' ? 'bool' : a === 'cor' ? 'cor' : a === 'sel' ? 'sel' : 'num' };
    const muda = (v) => { E[k] = v; aplica(); agendaSalvar(); };
    if (a === 'bool') o.el.addEventListener('change', () => muda(o.el.checked));
    else if (a === 'cor') o.el.addEventListener('input', () => muda(o.el.value));
    else if (a === 'sel') o.el.addEventListener('change', () => {
      const b = BORDAS[o.el.value];   // cada borda traz a posição do monograma pensada para ela
      if (k === 'borda' && b && b.mono) Object.assign(E, { monoX: b.mono.left, monoY: b.mono.top, monoLarg: b.mono.width, monoOn: true });
      muda(o.el.value); });
    else {
      o.el.addEventListener('input', () => muda(+o.el.value));
      o.num.addEventListener('change', () => { const v = parseFloat(o.num.value.replace(',', '.')); if (Number.isFinite(v)) muda(v); });   // digitar aceita fora da régua
    }
  }
  painel.appendChild(d);
});
function mostraValores() {
  for (const [k, o] of Object.entries(ins)) {
    if (o.tipo === 'bool') o.el.checked = !!E[k]; else o.el.value = E[k];
    if (o.num && document.activeElement !== o.num) o.num.value = +(+E[k]).toFixed(2);
  }
}
// ---------- textos por cima de tudo (cópia da carta só com o texto)
const orig = document.querySelector('#gira > .rk-wrap');
const textos = orig.cloneNode(true);
textos.querySelectorAll('.hero-bg-wrap, .rk-ring, .rk-glint, .rk-particles, .card-hover-overlay, .pointer-events-none.absolute.inset-0').forEach(n => n.remove());
textos.style.cssText += ';filter:none;pointer-events:none;z-index:40'; textos.classList.add('textos-copia');
textos.querySelector('.deadlock-card-shell').style.cssText = 'background:none;--rk-fx:none';
textos.querySelector('.deadlock-card-inner').style.backgroundColor = 'transparent';
$('gira').appendChild(textos);
orig.querySelectorAll('.deadlock-card-inner > .relative.z-10').forEach(n => n.style.visibility = 'hidden');
orig.querySelectorAll('.card-hover-overlay').forEach(n => n.remove());
const particulas = [...orig.querySelectorAll('.rk-particles > span')];
// ordem fixa das camadas (de trás para frente): cruz fora < carta < borda < cabeça/armas < estilhaços < textos
$('cruzFora').style.zIndex = 1; orig.style.zIndex = 2; $('escapaFora').style.zIndex = 4; $('cacos').style.zIndex = 5; textos.style.zIndex = 6;
// ---------- máscara da camada que escapa, para achar onde cruza a moldura
const escImg = Object.assign(new Image(), { crossOrigin: 'anonymous' }); escImg.src = '{{asset:editor-escapa.webp}}';
const MW = 960, MH = Math.round(960 * IMG_H / IMG_W);
const cv = document.createElement('canvas'), cx2 = cv.getContext('2d', { willReadFrequently: true }); let escPx = null;
escImg.onload = () => { cv.width = MW; cv.height = MH; cx2.drawImage(escImg, 0, 0, MW, MH); escPx = cx2.getImageData(0, 0, MW, MH).data; aplica(); };
let CONT = (() => { const pts = FORMA.map(([u, v]) => [u / 100 * CW, v / 100 * CH]); const out = [];
  for (let i = 0; i < pts.length; i++) { const [xa, ya] = pts[i], [xb, yb] = pts[(i + 1) % pts.length]; const n = Math.round(Math.hypot(xb - xa, yb - ya) / 2);
    for (let s = 0; s < n; s++) out.push([xa + (xb - xa) * s / n, ya + (yb - ya) * s / n, i]); } return out; })();
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
// ---------- auréola: faixa em cilindro 3D (painéis) girando ao redor dele; metade de trás atrás do corpo, metade da frente por cima
const auraTras = document.createElement('div'), auraFrente = document.createElement('div');
for (const el of [auraTras, auraFrente]) { el.className = 'auraPersp'; el.innerHTML = '<div class="auraCil"></div>'; }
$('arteDentro').insertBefore(auraTras, $('imPers'));
// metade da frente acima da sombra do rodapé da carta (senão fica apagada); fica abaixo dos textos
const sombraRodape = document.querySelector('#gira > .rk-wrap .deadlock-card-inner > .pointer-events-none.absolute.inset-0');
(sombraRodape || $('imPers')).after(auraFrente);
const N_AURA = 32;
for (const el of [auraTras, auraFrente]) el.firstChild.innerHTML = '<i></i>'.repeat(N_AURA);
// faixa em duas cores (clara + pinceladas escuras) a partir da textura do jogo; a transparência vem da própria tinta
const faixaSrc = Object.assign(new Image(), { crossOrigin: 'anonymous' }); faixaSrc.src = '{{asset:editor-aureola-faixa.png}}'; let faixaURL = '', faixaChave = '';
function faixaCor() {
  const chave = E.auraCor + E.auraCorEsc + E.auraDens; if (chave === faixaChave || !faixaSrc.complete) return faixaURL;
  const c = document.createElement('canvas'); c.width = faixaSrc.width; c.height = faixaSrc.height; const x = c.getContext('2d'); x.drawImage(faixaSrc, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height), px = d.data, cl = hexRgb(E.auraCor), es = hexRgb(E.auraCorEsc), k = E.auraDens / 100;
  for (let i = 0; i < px.length; i += 4) {
    // como no material do jogo (emissão ×3,8): o rosa claro domina; a cor escura fica só nas pinceladas mais finas
    const l = px[i + 3] / 255, t = Math.min(1, Math.max(0, (l - .04) / .3)), m = t * t * (3 - 2 * t);
    for (let j = 0; j < 3; j++) px[i + j] = es[j] + (cl[j] - es[j]) * m;
    px[i + 3] = Math.min(255, l * 255 * k);
  }
  x.putImageData(d, 0, 0); faixaURL = c.toDataURL(); faixaChave = chave; return faixaURL;
}
faixaSrc.onload = () => aplica();
function montaAura() {
  const N = N_AURA, R = E.auraRaio, H = E.auraAlt, C = 2 * Math.PI * R, pw = C / N + 1.5, rep = Math.max(1, Math.round(E.auraRep)), url = faixaCor();
  for (const el of [auraTras, auraFrente]) [...el.firstChild.children].forEach((p, i) => Object.assign(p.style, {
    left: `${-pw / 2}px`, top: `${-H / 2}px`, width: `${pw}px`, height: `${H}px`, backgroundImage: url ? `url(${url})` : 'none',
    transform: `rotateY(${i * 360 / N}deg) translateZ(${R}px)`, backgroundSize: `${C / rep}px ${H}px`, backgroundPosition: `${-i * (C / N)}px 0` }));
}
function giraAura(ang) {
  for (const el of [auraTras, auraFrente]) el.firstChild.style.transform = `rotateX(${-E.auraInc}deg) rotateY(${ang}deg)`;
  const tras = auraTras.firstChild.children, frente = auraFrente.firstChild.children;
  for (let i = 0; i < N_AURA; i++) {   // o painel está na frente quando a normal aponta para a câmera
    const z = Math.cos((i * 360 / N_AURA + ang) * Math.PI / 180) > 0 && E.auraFrente;
    tras[i].style.display = z ? 'none' : ''; frente[i].style.display = z ? '' : 'none';
  }
}
// ---------- auréola do render: 48 quadros do ANEL_ROXO girando (fundo preto, corpo recortando), somados com 'screen'
const anelCv = document.createElement('canvas'); anelCv.width = 1920; anelCv.height = 2600;
Object.assign(anelCv.style, { position: 'absolute', pointerEvents: 'none', mixBlendMode: 'screen' });
(sombraRodape || $('imPers')).after(anelCv);   // acima da sombra do rodapé, como a luz do render
const anelQ = Array.from({ length: 48 }, (_, i) => { const im = Object.assign(new Image(), { crossOrigin: 'anonymous' }); im.src = ASSET('editor-anel-a' + String(i + 1).padStart(2, '0') + '.webp'); return im; });
const anelCtx = anelCv.getContext('2d'); let anelFase = 0, anelUlt = -1;
function desenhaAnel(dt) {
  if (!E.anelOn) { anelCv.style.display = 'none'; return; } anelCv.style.display = '';
  anelFase = (anelFase + dt / E.anelVolta * (E.anelSentido ? -1 : 1) + 1) % 1;
  // entre dois quadros do render: mistura linear (é luz somada, então a mistura é exata) -> giro fluido em qualquer velocidade
  const pos = anelFase * 48, q = Math.floor(pos) % 48, q2 = (q + 1) % 48, f = pos - Math.floor(pos);
  if (!anelQ[q].complete || !anelQ[q2].complete) return;
  anelCtx.globalCompositeOperation = 'source-over'; anelCtx.globalAlpha = 1; anelCtx.clearRect(0, 0, 1920, 2600);
  anelCtx.globalAlpha = 1 - f; anelCtx.drawImage(anelQ[q], 0, 0);
  anelCtx.globalCompositeOperation = 'lighter'; anelCtx.globalAlpha = f; anelCtx.drawImage(anelQ[q2], 0, 0);
  anelCtx.globalCompositeOperation = 'source-over'; anelCtx.globalAlpha = 1;
}
// ---------- aplica o estado
function geoPers() { const s = E.persEsc / 100, cx = IW / 2, cy = IH / 2; return { x: cx + (L0 - cx) * s + E.persX, y: cy + (T0 - cy) * s + E.persY, w: IMG_W * K0 * s, h: IMG_H * K0 * s }; }
function aplicaTextos() {   // contorno nítido (sem desfoque) na cor da linha interna da borda; tamanho e altura dos blocos
  const c = E.txtContorno ?? .9, cor = '#17130E';
  const contorno = c > 0 ? [[c, 0], [-c, 0], [0, c], [0, -c], [c * .7, c * .7], [-c * .7, c * .7], [c * .7, -c * .7], [-c * .7, -c * .7]].map(([x, y]) => `drop-shadow(${x.toFixed(2)}px ${y.toFixed(2)}px 0 ${cor})`).join(' ') : 'none';
  // o contorno vai em cada texto/selo (não na camada inteira): a linha embaixo do nome fica só a linha, sem faixa escura
  textos.style.setProperty('filter', 'none', 'important');
  let est = document.getElementById('estiloContorno');
  if (!est) { est = document.createElement('style'); est.id = 'estiloContorno'; document.head.appendChild(est); }
  // CARRY e emblema do time (selos com moldura própria) ficam sem contorno
  est.textContent = `.textos-copia h3, .textos-copia span:not(span span):not(.rounded-sm) { filter: ${contorno} !important; }`;
  const k = (E.txtEsc ?? 108) / 100, sobe = (E.txtSobe ?? 2.5) / 100 * CH;
  const cima = textos.querySelector('.deadlock-card-inner > .relative.z-10.flex'), baixo = textos.querySelector('.deadlock-card-inner > .relative.z-10.mt-auto');
  if (cima) Object.assign(cima.style, { transform: `scale(${k})`, transformOrigin: 'top left' });
  if (baixo) Object.assign(baixo.style, { transform: `translateY(${-sobe}px) scale(${k})`, transformOrigin: 'bottom center' });
}
function aplica() {
  aplicaTextos();
  mostraValores();
  aplicaBorda();
  const mo = $('monograma'); mo.style.display = E.monoOn ? '' : 'none';
  Object.assign(mo.style, { left: `${E.monoX}px`, top: `${E.monoY}px`, width: `${E.monoLarg}px`, height: `${E.monoLarg * 278 / 216}px`, zIndex: E.monoNaFrente ? 7 : 3 });
  const bm = BORDAS[E.borda] && BORDAS[E.borda].mono;   // recorte que esconde o pulso da mão atrás do fio (vem da sessão do Motion)
  mo.style.clipPath = bm && bm.clip ? bm.clip : '';
  const g = geoPers();
  const roxo = E.fundoTipo !== 'cena', fi = $('imFundo');
  if (roxo) { if (fi.src !== new URL('{{asset:bordas-fundo-roxo-fundo-roxo-4x.png}}', document.baseURI).href) fi.src = '{{asset:bordas-fundo-roxo-fundo-roxo-4x.png}}'; const fe = E.fundoEsc / 100; Object.assign(fi.style, { left: `${-PAD + CW * (1 - fe) / 2 + E.fundoX}px`, top: `${-PAD + CH * (1 - fe) / 2 + E.fundoY}px`, width: `${CW * fe}px`, height: `${CH * fe}px`, maxWidth: 'none', opacity: E.fundoOp / 100 }); }
  else { if (fi.src !== new URL('{{asset:editor-fundo.webp}}', document.baseURI).href) fi.src = '{{asset:editor-fundo.webp}}'; Object.assign(fi.style, { left: `${L0}px`, top: `${T0}px`, width: `${IMG_W * K0}px`, height: `${IMG_H * K0}px`, opacity: E.fundoOp / 100 }); }
  Object.assign($('imPers').style, { left: `${g.x}px`, top: `${g.y}px`, width: `${g.w}px`, height: `${g.h}px` });
  const ae = E.anelEsc / 100, aw = g.w * ae, ah = g.h * ae;
  Object.assign(anelCv.style, { left: `${g.x + (g.w - aw) / 2 + E.anelX}px`, top: `${g.y + (g.h - ah) / 2 + E.anelY}px`, width: `${aw}px`, height: `${ah}px`, opacity: Math.min(1, E.anelInt / 100),
    filter: `brightness(${E.anelBrilho / 100 * Math.max(1, E.anelInt / 100)}) saturate(${E.anelSat / 100})` });
  Object.assign($('imEscapa').style, { left: `${g.x + PAD}px`, top: `${g.y + PAD}px`, width: `${g.w}px`, height: `${g.h}px` });
  if (TEM_ANIM) { for (const v of [VID.dTiro, VID.dLoop]) Object.assign(v.style, { left: `${g.x}px`, top: `${g.y}px`, width: `${g.w}px`, height: `${g.h}px` });
    for (const v of [VID.fTiro, VID.fLoop]) Object.assign(v.style, { left: `${g.x + PAD}px`, top: `${g.y + PAD}px`, width: `${g.w}px`, height: `${g.h}px` });
    { // furo no miolo da carta: dentro da arte vale só a camada de dentro (a auréola, o brilho e a luz passam por cima dele); a cópia de fora só aparece na borda e fora
      const bb = BORDAS[E.borda], ox = g.x + PAD, oy = g.y + PAD, M = 4000;
      const P0 = (bb ? bb.interno : FORMA_ASC).map(([u, v]) => [u / 100 * CW, v / 100 * CH]);
      const cx = P0.reduce((t, p) => t + p[0], 0) / P0.length, cy = P0.reduce((t, p) => t + p[1], 0) / P0.length;
      const miolo = P0.map(([x, y]) => { const d = Math.hypot(x - cx, y - cy) || 1, f = 1 - 2 / d; return `${cx + (x - cx) * f - ox}px ${cy + (y - cy) * f - oy}px`; });   // 2 px menor: as duas camadas se sobrepõem e a emenda não aparece
      const furo = `polygon(evenodd, ${-M}px ${-M}px, ${M}px ${-M}px, ${M}px ${M}px, ${-M}px ${M}px, ${-M}px ${-M}px, ${miolo.join(',')}, ${miolo[0]}, ${-M}px ${-M}px)`;
      for (const v of [VID.fTiro, VID.fLoop]) v.style.clipPath = E.escQuebra ? furo : ''; }
    if (TEM_FUMACA) { for (const v of [VID.mTiro, VID.mLoop]) Object.assign(v.style, { left: `${g.x + PAD}px`, top: `${g.y + PAD}px`, width: `${g.w}px`, height: `${g.h}px` }); window.__kF = null;
      $('fumacaFora').style.clipPath = `polygon(-3000px -3000px, ${CW + 3000}px -3000px, ${CW + 3000}px ${E.fumBaixo / 100 * CH}px, -3000px ${E.fumBaixo / 100 * CH}px)`; }
    if (!E.animOn) fase = 'parado'; mostraFase(); }
  const B = 3000; const saida = poligonoSaida(kSaida()); window.__kS = null;   // parada = pose inicial (a 12 apontada sai pela direita)
  const dentro = `polygon(${FORMA.map(([u, v]) => `${u / 100 * CW}px ${v / 100 * CH}px`).join(',')})`;
  $('escapaFora').style.clipPath = E.escQuebra ? saida : dentro;
  const cw = E.cruzAlt * ENC.cruzProp * E.cruzLarg / 100;
  for (const [el, dx] of [[$('cruzDentro'), 0], [$('cruzForaEl'), PAD]])
    Object.assign(el.style, { left: `${E.cruzX + dx - cw / 2}px`, top: `${E.cruzY + dx - E.cruzAlt / 2}px`, width: `${cw}px`, height: `${E.cruzAlt}px`, transform: `rotate(${E.cruzRot}deg)`, opacity: E.cruzOp / 100 });
  $('cruzFora').style.display = E.cruzSai ? '' : 'none';
  // auréola
  for (const el of [auraTras, auraFrente]) { el.style.display = E.auraOn ? '' : 'none';
    Object.assign(el.style, { left: `${E.auraX}px`, top: `${E.auraY}px`, opacity: E.auraOp / 100, filter: E.auraBrilho ? `drop-shadow(0 0 ${E.auraBrilho}px ${E.auraCor})` : 'none' }); }
  montaAura(); giraAura(ang);
  if (sombraRodape) sombraRodape.style.opacity = E.sombraOp / 100;
  // partículas da carta no rosa do render, com variação
  const r = rng(11), base = hexRgb(E.partCor), v = E.partVar / 100;
  particulas.forEach(p => { const f = 1 + (r() - .5) * v * 1.2, mix = r() * v; const c = base.map((x, i) => Math.round(Math.min(255, x * f * (1 - mix * .3) + [255, 255, 255][i] * mix * .3)));
    p.style.setProperty('--pc', `rgb(${c.join(',')})`); });
  arrumaShim(g);
  const rf = $('rodapeFrente'), cs = E.cslEsc / 100; rf.style.display = E.rodVerso ? '' : 'none';
  const srcR = E.rodTarja ? '{{asset:bordas-frente-rodape.svg}}' : '{{asset:bordas-frente-cardslock.svg}}'; if (!rf.src.endsWith(srcR)) rf.src = srcR;
  // escala a partir do centro do texto (x 175, y 427 na carta)
  Object.assign(rf.style, { left: `${-60 + E.cslX}px`, top: `${E.cslY}px`, transformOrigin: '235px 427px', transform: `scale(${cs})`, zIndex: E.cslCamada === 'atras' ? 6 : 9 });
  mo.style.zIndex = E.cslCamada === 'atras' ? (E.monoNaFrente ? 8 : 7) : (E.monoNaFrente ? 7 : 3);
  textos.querySelectorAll('.deadlock-card-inner > .relative.z-10:last-of-type > div:last-child').forEach(n => n.style.visibility = E.rodVerso ? 'hidden' : '');
  desenhaCacos(g);
  if (!E.tiltOn) $('gira').style.transform = '';
}
const shellEl = orig.querySelector('.deadlock-card-shell'), innerEl = orig.querySelector('.deadlock-card-inner'), ringEl = orig.querySelector('.rk-ring');
const varsAsc = ['--rk-clip', '--rk-bg', '--rk-bg-h', '--rk-fx'].map(v => [v, orig.style.getPropertyValue(v)]);
let svgBorda = null;
function aplicaBorda() {
  const b = BORDAS[E.borda];
  const pct = (pts) => `polygon(${pts.map(([u, v]) => `${u}% ${v}%`).join(',')})`;
  if (!b) {   // Ascendant original
    varsAsc.forEach(([v, x]) => orig.style.setProperty(v, x)); innerEl.style.clipPath = ''; FORMA = FORMA_ASC;
    if (svgBorda) svgBorda.style.display = 'none';
  } else {
    orig.style.setProperty('--rk-clip', pct(b.fora)); orig.style.setProperty('--rk-bg', 'transparent'); orig.style.setProperty('--rk-bg-h', 'transparent'); orig.style.setProperty('--rk-fx', 'none');
    // área da arte = recorte interno da proposta (convertido para a caixa interna, que começa 4 px para dentro)
    innerEl.style.clipPath = `polygon(${b.interno.map(([u, v]) => `${u / 100 * CW - PAD}px ${v / 100 * CH - PAD}px`).join(',')})`;
    FORMA = b.fora;
    if (!svgBorda) { svgBorda = document.createElement('img'); svgBorda.alt = ''; Object.assign(svgBorda.style, { position: 'absolute', left: 0, top: 0, width: CW + 'px', height: CH + 'px', pointerEvents: 'none', zIndex: 3 }); orig.after(svgBorda); }
    svgBorda.src = b.svg; svgBorda.style.display = '';
  }
  ringEl.style.display = E.anelPulso ? '' : 'none';
  CONT = contornoDe(FORMA);
}
function contornoDe(F) { const pts = F.map(([u, v]) => [u / 100 * CW, v / 100 * CH]); const out = [];
  for (let i = 0; i < pts.length; i++) { const [xa, ya] = pts[i], [xb, yb] = pts[(i + 1) % pts.length]; const n = Math.round(Math.hypot(xb - xa, yb - ya) / 2);
    for (let s = 0; s < n; s++) out.push([xa + (xb - xa) * s / n, ya + (yb - ya) * s / n, ya > .8 * CH && yb > .8 * CH ? 99 : i]); } return out; }
// ---------- shimmer-sweep (registro HyperFrames: gradiente 'transparent → cor → transparent', mix-blend-mode: overlay,
// --shimmer-pos de -20% a 120% em 1.2 s, power2.inOut). Aqui: só na arte (janela interna + o que escapa), nunca na borda.
const SB = { l: -250, t: -250, w: 850, h: 1005 };
const shimDentro = document.createElement('div'), shimFora = document.createElement('div');
for (const el of [shimDentro, shimFora]) Object.assign(el.style, { position: 'absolute', left: SB.l + 'px', top: SB.t + 'px', width: SB.w + 'px', height: SB.h + 'px', pointerEvents: 'none', mixBlendMode: 'overlay' });
shimDentro.style.zIndex = 2; orig.after(shimDentro);
shimFora.style.zIndex = 4; $('escapaFora').after(shimFora);   // irmão da camada de fora (sem caixa própria, para o overlay misturar com o personagem);   // o brilho passa no personagem inteiro (dentro e fora da carta), não só na área de saída
orig.querySelectorAll('.rk-glint').forEach(n => n.style.display = 'none');   // o sweep antigo do deadcards sai
function gradShim(pos) {
  const c = hexRgb(E.shimCor), cor = `rgba(${c.join(',')},${(E.shimOp / 100).toFixed(3)})`, w = E.shimLarg;
  return `linear-gradient(${E.shimAng}deg, transparent 0%, transparent calc(${pos}% - ${w / 2}%), ${cor} ${pos}%, transparent calc(${pos}% + ${w / 2}%), transparent 100%)`;
}
function arrumaShim(g) {
  const b = BORDAS[E.borda]; const jan = b ? b.interno : FORMA_ASC;
  shimDentro.style.clipPath = `polygon(${jan.map(([u, v]) => `${u / 100 * CW - SB.l}px ${v / 100 * CH - SB.t}px`).join(',')})`;
  const mk = { maskImage: 'url({{asset:editor-escapa.webp}})', webkitMaskImage: 'url({{asset:editor-escapa.webp}})', maskRepeat: 'no-repeat', webkitMaskRepeat: 'no-repeat',
    maskSize: `${g.w}px ${g.h}px`, webkitMaskSize: `${g.w}px ${g.h}px`, maskPosition: `${g.x + PAD - SB.l}px ${g.y + PAD - SB.t}px`, webkitMaskPosition: `${g.x + PAD - SB.l}px ${g.y + PAD - SB.t}px` };
  Object.assign(shimFora.style, mk); if (typeof mostraFase === 'function') mostraFase();
  shimDentro.style.display = shimFora.style.display = E.shimOn ? '' : 'none';
  shimDentro.style.mixBlendMode = shimFora.style.mixBlendMode = E.shimModo || 'overlay';
}
const p2io = (x) => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;   // power2.inOut
let shimT = 0;
function passaShim(dt) {
  if (!E.shimOn) return; shimT += dt; const ciclo = E.shimDur + E.shimPausa, t = shimT % ciclo;
  const pos = t < E.shimDur ? -20 + 140 * p2io(t / E.shimDur) : 120, g = gradShim(pos.toFixed(2));
  shimDentro.style.background = g; shimFora.style.background = g;
}
// ---------- animação: 4 vídeos (dentro/fora × tiro/loop) no lugar das imagens paradas do personagem e do que escapa
const VID = {};
if (TEM_ANIM) {
  const mk = (id, src, pai, antes) => { const v = document.createElement('video'); v.id = id; v.src = src; v.muted = true; v.playsInline = true; v.preload = 'auto';
    v.className = 'camada-img'; v.style.display = 'none'; v.style.maxWidth = 'none'; antes ? pai.insertBefore(v, antes) : pai.appendChild(v); return v; };
  const SRC = UNICO ? { dt: 'personagem-tiro', dl: 'personagem-loop', ft: 'personagem-tiro', fl: 'personagem-loop' } : { dt: 'dentro-tiro', dl: 'dentro-loop', ft: 'fora-tiro', fl: 'fora-loop' };
  VID.dTiro = mk('vDentroTiro', ASSET('editor-anim-' + SRC.dt + '.webm'), $('arteDentro'), $('imPers').nextSibling);
  VID.dLoop = mk('vDentroLoop', ASSET('editor-anim-' + SRC.dl + '.webm'), $('arteDentro'), $('imPers').nextSibling);
  VID.fTiro = mk('vForaTiro', ASSET('editor-anim-' + SRC.ft + '.webm'), $('escapaFora'));
  VID.fLoop = mk('vForaLoop', ASSET('editor-anim-' + SRC.fl + '.webm'), $('escapaFora'));
  VID.dLoop.loop = VID.fLoop.loop = true;
  if (TEM_FUMACA) {   // fumaça: um vídeo só, fora do recorte da carta (sobe por cima da borda), cortado embaixo para não cobrir o rodapé
    const caixa = document.createElement('div'); caixa.id = 'fumacaFora'; Object.assign(caixa.style, { position: 'absolute', left: 0, top: 0, width: CW + 'px', height: CH + 'px', overflow: 'visible', pointerEvents: 'none', zIndex: 5 });
    $('escapaFora').after(caixa);
    VID.mTiro = mk('vFumTiro', '{{asset:editor-anim-fumaca-tiro.webm}}', caixa); VID.mLoop = mk('vFumLoop', '{{asset:editor-anim-fumaca-loop.webm}}', caixa); VID.mLoop.loop = true;
  }
}
let fase = 'parado';   // parado | tiro | loop
function mostraFase() {
  const anim = TEM_ANIM && E.animOn;
  // UNICO: a pose parada já é o 1º quadro do vídeo do tiro (pausado) -> nada de trocar imagem por vídeo (evitava um quadro vazio)
  const tiroVis = anim && (fase === 'tiro' || (UNICO && fase === 'parado'));
  $('imPers').style.display = anim && (fase !== 'parado' || UNICO) ? 'none' : '';
  $('imEscapa').style.display = anim && (fase !== 'parado' || UNICO) ? 'none' : '';
  if (!TEM_ANIM) return;
  VID.dTiro.style.display = VID.fTiro.style.display = tiroVis ? '' : 'none';
  if (TEM_FUMACA) { VID.mTiro.style.display = tiroVis && E.fumOn ? '' : 'none'; VID.mLoop.style.display = anim && fase === 'loop' && E.fumOn ? '' : 'none'; }
  VID.dLoop.style.display = VID.fLoop.style.display = anim && fase === 'loop' ? '' : 'none';
  const masc = UNICO ? (anim && fase === 'loop' ? 'url({{asset:editor-personagem-final.webp}})' : 'url({{asset:editor-personagem-inicio.webp}})') : (anim && fase === 'loop' ? 'url({{asset:editor-escapa-final.webp}})' : 'url({{asset:editor-escapa.webp}})');
  shimFora.style.maskImage = shimFora.style.webkitMaskImage = masc;
  // a máscara é a silhueta da pose parada: durante o tiro o braço se mexe e o brilho cairia no fundo e no glow -> some no tiro
  shimFora.style.visibility = anim && fase === 'tiro' ? 'hidden' : '';
}
function tocaTiro() {
  if (!TEM_ANIM || !E.animOn) return;
  for (const v of [VID.dTiro, VID.fTiro, VID.mTiro].filter(Boolean)) { v.currentTime = 0; v.play().catch(() => {}); }
  const troca = () => { fase = 'tiro'; if (VID.mLoop) VID.mLoop.pause(); VID.dLoop.pause(); VID.fLoop.pause(); mostraFase(); };
  let feito = false; const uma = () => { if (!feito) { feito = true; troca(); } };
  if ('requestVideoFrameCallback' in VID.dTiro) VID.dTiro.requestVideoFrameCallback(uma); setTimeout(uma, 120);   // vídeo escondido não apresenta quadro: o tempo garante a troca
}
function vaiLoop() {
  for (const v of [VID.dLoop, VID.fLoop, VID.mLoop].filter(Boolean)) { v.currentTime = 0; v.play().catch(() => {}); }
  const troca = () => { fase = 'loop'; window.__tLoop = performance.now(); mostraFase(); };
  let feito = false; const uma = () => { if (!feito) { feito = true; troca(); } };
  VID.dLoop.addEventListener('playing', uma, { once: true }); setTimeout(uma, 120);
}
if (TEM_ANIM) {
  VID.dTiro.addEventListener('ended', vaiLoop);
  // mantém o vídeo de fora colado no de dentro
  setInterval(() => { for (const [a_, b_] of [[VID.dTiro, VID.fTiro], [VID.dLoop, VID.fLoop], [VID.dTiro, VID.mTiro]].filter(p => p[1])) if (!a_.paused && !b_.seeking && Math.abs(a_.currentTime - b_.currentTime) > .12) b_.currentTime = a_.currentTime; }, 250);
  document.querySelector('.palco').addEventListener('click', () => { if (E.animClique && !mostrandoVerso) tocaTiro(); });
}
// área de saída (onde o personagem pode passar por cima da borda): topo inteiro + laterais até alturas próprias.
// A direita muda com o tempo: na pose inicial a 12 sai pela lateral; depois do recuo só o topo (a capa fica dentro).
// o brilho do personagem segue a silhueta inteira do render (inclusive o que fica escondido fora da carta):
// vale só onde o personagem aparece = área de saída (acima do degrau) + o formato da carta abaixo dele
function clipShimFora(k) {
  const B = 3000, ye = (E.saidaEsq ?? 55) / 100 * CH, yd = ((E.saidaDirIni ?? 60) + ((E.saidaDirFim ?? 15) - (E.saidaDirIni ?? 60)) * k) / 100 * CH;
  const pts = [[-B, -B], [CW + B, -B], [CW + B, yd], [CW, yd], [CW, .86 * CH], [CW / 2, CH], [0, .86 * CH], [0, ye], [-B, ye]];
  return `polygon(${pts.map(([x, y]) => `${x - SB.l}px ${y - SB.t}px`).join(',')})`;
}
function poligonoSaida(k) {   // k: 0 = pose inicial, 1 = após o recuo
  const B = 3000, ye = (E.saidaEsq ?? 55) / 100 * CH, yd = ((E.saidaDirIni ?? 60) + ((E.saidaDirFim ?? 15) - (E.saidaDirIni ?? 60)) * k) / 100 * CH;
  const fora = [[-B, -B], [CW + B, -B], [CW + B, yd], [CW / 2, yd], [CW / 2, ye], [-B, ye]];   // degrau no meio: cada lateral com a sua altura
  return `polygon(${fora.map(([x, y]) => `${x}px ${y}px`).join(',')})`;
}
function kSaida() {          // tempo do vídeo -> transição da área de saída
  if (!TEM_ANIM || !E.animOn || fase === 'parado') return 0;
  if (fase === 'loop') return 1;
  const t = VID.dTiro.currentTime; return Math.min(1, Math.max(0, (t - .55) / .35));   // a 12 só deixa a lateral direita depois de subir
}
function hexRgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function desenhaCacos(g) {
  const svg = $('cacos');
  if (!escPx || !E.escQuebra || !E.cacosQtd) { svg.innerHTML = ''; return; }
  const cob = CONT.map(([x, y, seg]) => { if (seg === 99 || y > .8 * CH) return false;
    const ix = Math.floor(((x - PAD) - g.x) / g.w * MW), iy = Math.floor(((y - PAD) - g.y) / g.h * MH);
    return ix >= 0 && iy >= 0 && ix < MW && iy < MH && escPx[(iy * MW + ix) * 4 + 3] > 128; });
  const pontas = []; for (let i = 1; i < cob.length; i++) if (cob[i] !== cob[i - 1]) pontas.push(CONT[cob[i] ? i - 1 : i]);
  const r = rng(7); let s = '<defs><linearGradient id="ouro" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".3" stop-color="#f5b82e"/><stop offset=".55" stop-color="#8f5e08"/><stop offset=".8" stop-color="#f5b82e"/><stop offset="1" stop-color="#fff3c4"/></linearGradient></defs>';
  for (const [px, py] of pontas) { const dx = px - CW / 2, dy = py - CH / 2, L = Math.hypot(dx, dy), nx = dx / L, ny = dy / L;
    for (let k = 0; k < E.cacosQtd; k++) { const d = 4 + r() * 26, t = E.cacosTam * (.6 + r() * .9), a = r() * 6.28, ox = px + nx * d + (r() - .5) * 12, oy = py + ny * d + (r() - .5) * 12;
      s += `<polygon points="${[0, 1, 2].map(j => `${(ox + Math.cos(a + j * 2.1) * t * (.6 + r() * .7)).toFixed(1)},${(oy + Math.sin(a + j * 2.1) * t * (.6 + r() * .7)).toFixed(1)}`).join(' ')}" fill="url(#ouro)" stroke="#1a1006" stroke-width=".6"/>`; } }
  svg.innerHTML = s;
}
// ---------- animação: pulso da cruz e giro da auréola
t0 = performance.now();
function quadro(t) {
  const dt = (t - t0) / 1000; t0 = t;
  if (E.auraVel > 0) ang = (ang + dt * 360 / E.auraVel * (E.auraSentido ? -1 : 1)) % 360;
  giraAura(ang); desenhaAnel(dt); passaShim(dt); escala();
  if (TEM_FUMACA) {   // fumaça da 12 parada: mais branca e mais transparente (sem render novo), entrando aos poucos no fim do tiro
    const kf = !E.animOn || fase === 'parado' ? 0 : fase === 'loop' ? 1 : Math.min(1, Math.max(0, (VID.dTiro.currentTime - .75) / .25));
    // no loop: fumaça mais lenta e, depois de fumSome segundos, se dissipa em fumSomeDur
    const tl = fase === 'loop' && window.__tLoop ? (performance.now() - window.__tLoop) / 1000 : 0;
    const some = E.fumSome > 0 ? 1 - Math.min(1, Math.max(0, (tl - E.fumSome) / (E.fumSomeDur || 1))) : 1;
    if (VID.mLoop) { const r = (E.fumVel ?? 50) / 100; if (VID.mLoop.playbackRate !== r) VID.mLoop.playbackRate = r; if (some === 0 && !VID.mLoop.paused) VID.mLoop.pause(); }
    const op = E.fumOp / 100 * (1 - kf * (1 - (E.fumLoopOp ?? 65) / 100)) * some, br = kf * (E.fumBranco ?? 70) / 100;
    const fl = `saturate(${1 - br}) brightness(${1 + br * 1.1})`, chave = op.toFixed(3) + fl;
    if (chave !== window.__kF) { window.__kF = chave; for (const v of [VID.mTiro, VID.mLoop]) { v.style.opacity = op; v.style.filter = fl; } } }
  if (E.escQuebra) { const k_ = kSaida(); if (k_ !== window.__kS) { window.__kS = k_; $('escapaFora').style.clipPath = poligonoSaida(k_); shimFora.style.clipPath = clipShimFora(k_); } }
  const p = .5 + .5 * Math.sin(t / 1000 * Math.PI * 2 * E.pulsoVel), amp = E.pulsoInt / 100;
  const br = Math.max(0, E.pulsoBase * (1 + amp * (p * 2 - 1) * .9));
  const f = `drop-shadow(0 0 ${br.toFixed(1)}px ${E.cruzCor}) drop-shadow(0 0 ${(br * 2.2).toFixed(1)}px ${E.cruzCor}) brightness(${(1 + amp * .35 * p).toFixed(3)})`;
  $('cruzDentro').style.filter = f; $('cruzForaEl').style.filter = f;
  requestAnimationFrame(quadro);
}
requestAnimationFrame(quadro);
addEventListener('pointermove', (e) => {
  if (!E.tiltOn || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = $('vista').getBoundingClientRect(); if (e.clientX > r.right) return;
  $('gira').style.transform = `rotateY(${((e.clientX - r.left) / r.width - .5) * E.tiltForca * 2}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * E.tiltForca * 1.6}deg)`;
});
const SO_VER = true; if (SO_VER) document.body.classList.add('so-ver');
function escala() { return;   // no pacote a carta fica em escala 1 na posição (--card-x, --card-y)
 const r = $('vista').getBoundingClientRect(); const ch = [r.width, r.height, E.compTam, E.compY].join(); if (ch === window.__kE) return; window.__kE = ch;
  const k = Math.min(r.width / 880, r.height / 960, 3) * (E.compTam ?? 100) / 100;   // mesma regra no editor e na prévia
  $('zoom').style.transform = `translateY(${178 * k + (E.compY ?? 0) / 100 * r.height}px) scale(${k})`; }   // compY: + desce, - sobe (em % da altura da tela)
// modo ver: o conjunto vai da fumaça da 12 (~365 px acima da carta) até a ponta de baixo (505) e da SMG (~240 px à esquerda) à besta;
// cabe 880 x 960 com folga e o centro do conjunto fica 178 px acima do centro da carta -> desce a carta 178 px (na escala) para centralizar
addEventListener('resize', escala);
// ---------- salvar/carregar
let tSalvar; function agendaSalvar() { if (SO_VER) return; clearTimeout(tSalvar); $('estado').textContent = 'alterado…'; tSalvar = setTimeout(salvar, 700); }
async function salvar() { const r = await fetch('/api/salvar', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...E, _versao: 2 }) }); $('estado').textContent = r.ok ? 'Salvo ✓' : 'Falhou ao salvar'; }
$('salvar').onclick = salvar;
Object.assign($('versoMono').style, { left: VERSO_MONO.left + 'px', top: VERSO_MONO.top + 'px', width: VERSO_MONO.width + 'px', height: VERSO_MONO.height + 'px', maxWidth: 'none', clipPath: VERSO_MONO.clip || '' });
let mostrandoVerso = false;
$('virar').onclick = () => {   // gira a carta 180° no eixo vertical e troca frente/verso no meio do giro
  mostrandoVerso = !mostrandoVerso; const gira = $('gira'); gira.style.transition = 'transform .25s ease-in'; gira.style.transform = 'rotateY(90deg)';
  setTimeout(() => {
    [...gira.children].forEach(n => { if (n.id !== 'verso') n.style.visibility = mostrandoVerso ? 'hidden' : ''; });
    $('verso').style.display = mostrandoVerso ? '' : 'none'; if (mostrandoVerso) $('versoMono').play().catch(() => {});
    gira.style.transition = 'transform .25s ease-out'; gira.style.transform = 'rotateY(0deg)'; setTimeout(() => gira.style.transition = '', 260);
  }, 250);
  $('virar').textContent = mostrandoVerso ? 'Ver frente' : 'Virar carta';
};
$('padrao').onclick = () => { if (!confirm('Voltar todos os controles ao padrão? (o salvo anterior fica no histórico)')) return; E = { ...PADRAO }; aplica(); salvar(); };
(async () => {
  try { const s = ESTADO_FIXO; if (s._versao === 2) E = { ...PADRAO, ...s }; else for (const k of ['cruzX','cruzY','cruzAlt','cruzLarg','cruzRot','cruzOp','cruzSai','cruzCor','pulsoBase','pulsoInt','pulsoVel']) if (k in s) E[k] = s[k]; } catch {}
  escala(); aplica(); $('estado').textContent = 'Pronto';
  if (TEM_ANIM && E.animOn) { if (E.animAuto) setTimeout(tocaTiro, 600); else mostraFase(); }   // parada: apontando a 12 até o clique
  const mv = $('monograma'); const toca = () => mv.play().catch(() => {}); toca(); addEventListener('pointerdown', toca, { once: true }); document.addEventListener('visibilitychange', toca);
})();

if (window.CARD && window.CARD.face === 'back') {
  const mostraVerso = () => { mostrandoVerso = true; [...$('gira').children].forEach(n => { if (n.id !== 'verso') n.style.visibility = 'hidden'; });
    $('verso').style.display = ''; $('versoMono').play().catch(() => {}); };
  mostraVerso(); addEventListener('load', mostraVerso); setTimeout(mostraVerso, 400);
}
// só aparece quando o personagem já tem quadro (senão, enquanto os vídeos carregam, a cruz brilhando aparece sozinha)
(function () {
  document.documentElement.style.opacity = '0';
  let feito = false; const mostra = () => { if (feito) return; feito = true; document.documentElement.style.transition = 'opacity .25s'; document.documentElement.style.opacity = '1'; };
  const t = setInterval(() => { if (typeof VID !== 'undefined' && VID.dTiro && VID.dTiro.readyState >= 2) { clearInterval(t); mostra(); } }, 50);
  setTimeout(() => { clearInterval(t); mostra(); }, 3000);
})();
// versão contida (listas e formulário do site: window.CARD.bleed === false): o que sai pelas laterais fica atrás da
// moldura; só sai da carta o que passa da borda de cima (cabeça, 12 erguida), dentro da largura da carta
if (window.CARD && window.CARD.bleed === false) {
  // desce até onde começa o miolo da moldura (a faixa de cima fica atrás da cabeça, não por cima do rosto)
  const b_ = BORDAS[E.borda], topoMiolo = b_ ? Math.min(...b_.interno.map(([, v]) => v)) / 100 * CH : 12;   // ponto mais alto do miolo (borda de cima)
  // e na largura da borda interna (não do limite da carta): o que passa pelas laterais fica atrás da moldura
  // só o trecho reto da borda de cima (sem as quinas): pontos do miolo que estão na altura do topo
  const vt_ = b_ ? Math.min(...b_.interno.map(([, v]) => v)) : 0, xs_ = b_ ? b_.interno.filter(([, v]) => v <= vt_ + .01).map(([u]) => u / 100 * CW) : [21, CW - 21], xe = Math.min(...xs_), xd = Math.max(...xs_);
  poligonoSaida = function () { return `polygon(${xe}px -3000px, ${xd}px -3000px, ${xd}px ${topoMiolo + 2}px, ${xe}px ${topoMiolo + 2}px)`; };
  window.__kS = null; $('escapaFora').style.clipPath = poligonoSaida();
  // o brilho do personagem segue a silhueta inteira: na versão contida, só dentro da largura da carta
  clipShimFora = function () { return `polygon(${xe - SB.l}px 0px, ${xd - SB.l}px 0px, ${xd - SB.l}px ${SB.h}px, ${xe - SB.l}px ${SB.h}px)`; };
  shimFora.style.clipPath = clipShimFora();
}
