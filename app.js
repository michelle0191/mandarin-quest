/* ===========================================================
   Mandarin Quest — game logic
   8 interactive games for learning Simplified Chinese
   Adapted from Thai Alphabet Quest architecture
   =========================================================== */

/* ---------- Data validation ---------- */
const D = window.ZH_DATA || {};
D.characters = Array.isArray(D.characters) ? D.characters : [];
D.tones      = Array.isArray(D.tones)      ? D.tones      : [];
D.allWords   = Array.isArray(D.allWords)   ? D.allWords   : [];
if (!D.characters.length) {
  console.error("Chinese data failed to load — running in degraded mode");
}

/* ---------- Helpers ---------- */
const __noop = () => __safe;
const __safe = new Proxy(function(){}, { get: () => __safe, apply: () => __safe, set: () => true });
const $ = (s, r = document) => { try { return r.querySelector(s) || __safe; } catch { return __safe; } };
const $$ = (s, r = document) => { try { return Array.from(r.querySelectorAll(s)); } catch { return []; } };
const shuffle = (arr) => { const a = Array.isArray(arr) ? [...arr] : []; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (arr, n) => shuffle(arr).slice(0, n);
const rand = (n) => Math.floor(Math.random() * n);
const toneLabel = { 1: "1st", 2: "2nd", 3: "3rd", 4: "4th", 0: "Neutral" };
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, m => {
  switch (m) { case "&": return "\u0026amp;"; case "<": return "\u0026lt;"; case ">": return "\u0026gt;"; case '"': return "\u0026quot;"; case "'": return "\u0026#39;"; default: return m; }
});

/* ---------- Progress ---------- */
const STORE_KEY = "mandarinQuestProgress_v1";
const store = {
  load() { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } },
  save(v) { try { localStorage.setItem(STORE_KEY, JSON.stringify(v)); } catch {} }
};
let progress = store.load();
progress.xp = progress.xp || 0;
progress.streak = progress.streak || 0;
progress.known = progress.known || {};
progress.lastVisit = progress.lastVisit || Date.now();
function bumpXP(n) { progress.xp += n; renderHUD(); store.save(progress); }
function markKnown(ch, correct) {
  progress.known[ch] = (progress.known[ch] || 0) + (correct ? 1 : -0.5);
  if (progress.known[ch] < 0) progress.known[ch] = 0;
  store.save(progress);
}

function toast(msg, type = "") {
  let el = $("#toast");
  el.textContent = msg;
  el.className = "toast show " + type;
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(() => el.className = "toast", 1400);
}

/* ---------- TTS (Chinese) ---------- */
function speak(text, rate = 0.85, onend) {
  try {
    if (!("speechSynthesis" in window)) { if (onend) onend(); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    u.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const zh = voices.find(v => /zh|cmn/i.test(v.lang));
    if (zh) u.voice = zh;
    if (onend) u.onend = onend;
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn("speak() failed:", e);
    if (onend) try { onend(); } catch {}
  }
}
if ("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = () => {};

/* ---------- Navigation ---------- */
function showScreen(id) {
  $$(".screen").forEach(s => s.classList.remove("active"));
  $("#" + id).classList.add("active");
  $$(".nav button").forEach(b => b.classList.toggle("active", b.dataset.screen === id));
  if (id === "ref") renderReference();
  if (id === "flash") renderFlashcard();
  if (id === "match") startMatching();
  if (id === "memory") startMemory();
  if (id === "sort") startSort();
  if (id === "quiz") startQuiz();
  if (id === "pron") startPron();
  if (id === "tones") renderTones();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHUD() {
  $("#xp").textContent = progress.xp;
  const known = Object.values(progress.known).filter(v => v >= 2).length;
  $("#known").textContent = known;
  $("#total").textContent = D.characters.length;
}

/* =====================================================================
   1. REFERENCE CHART
   ===================================================================== */
function renderReference() {
  const wrap = $("#refGrid");
  const filter = $("#refFilter").value;
  wrap.innerHTML = "";
  let items = D.characters;
  if (filter !== "all") {
    const t = parseInt(filter);
    if (!isNaN(t)) items = items.filter(c => c.tone === t);
  }
  items.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="ch hanzi">${c.ch}</div>
      <div class="pinyin">${c.py}</div>
      <div class="nm">${c.sound}</div>
      <div class="sd">${c.words && c.words[0] ? c.words[0].mean : ""}</div>
      <span class="badge tone${c.tone}">${toneLabel[c.tone]}</span>
    `;
    card.onclick = () => {
      speak(c.ch);
      toast(`${c.ch} (${c.py}) — ${c.sound}`, "");
    };
    wrap.appendChild(card);
  });
}

/* =====================================================================
   2. FLASHCARDS
   ===================================================================== */
let fcDeck = [];
let fcIdx = 0;
function buildFlashDeck() {
  const filter = $("#fcFilter").value;
  let pool = D.characters;
  if (filter !== "all") {
    const t = parseInt(filter);
    if (!isNaN(t)) pool = pool.filter(c => c.tone === t);
  }
  fcDeck = shuffle(pool);
  fcIdx = 0;
}
function renderFlashcard() {
  if (!fcDeck.length || fcIdx >= fcDeck.length) { buildFlashDeck(); fcIdx = 0; }
  if (!fcDeck.length) return;
  const c = fcDeck[fcIdx];
  const card = $("#flashcard");
  card.classList.remove("flipped");
  const wordsHtml = (c.words || []).slice(0, 3).map(w =>
    `<div class="row"><b class="hanzi">${w.zh}</b> <span class="py-sm">${w.py}</span> — ${w.mean}</div>`
  ).join("");
  $("#fcFront").innerHTML = `
    <span class="badge tone${c.tone}">${toneLabel[c.tone]}</span>
    <div class="fc-char hanzi">${c.ch}</div>
    <div class="fc-name">${c.py}</div>
  `;
  $("#fcBack").innerHTML = `
    <span class="badge tone${c.tone}">${toneLabel[c.tone]}</span>
    <div class="fc-char hanzi" style="font-size:90px;">${c.ch}</div>
    <div class="row"><b>Pinyin:</b> ${c.py}</div>
    <div class="row"><b>Sound:</b> ${c.sound}</div>
    <div class="row" style="color:var(--muted);font-size:13px;">${c.memory}</div>
    ${wordsHtml}
  `;
  $("#fcCount").textContent = `${fcIdx + 1} / ${fcDeck.length}`;
}
function fcFlip() { $("#flashcard").classList.toggle("flipped"); bumpXP(1); speak(fcDeck[fcIdx] ? fcDeck[fcIdx].ch : ""); }
function fcNext(dir) { fcIdx = (fcIdx + dir + fcDeck.length) % fcDeck.length; renderFlashcard(); }
function fcShuffle() { buildFlashDeck(); renderFlashcard(); toast("Shuffled 🔀"); }

/* =====================================================================
   3. MATCHING GAME
   ===================================================================== */
let matchState = null;
function startMatching() {
  const mode = $("#matchMode").value;
  let pairs = [];
  if (mode === "char-mean") {
    pairs = sample(D.characters.filter(c => c.words && c.words[0]), 6).map(c => ({
      left: c.ch, right: c.words[0].mean, leftIsText: true
    }));
  } else if (mode === "char-pinyin") {
    pairs = sample(D.characters, 6).map(c => ({ left: c.ch, right: c.py, leftIsText: true }));
  } else {
    pairs = sample(D.allWords.filter(w => w.zh.length <= 4), 6).map(w => ({
      left: w.zh, right: w.mean, leftIsText: true
    }));
  }
  matchState = { left: shuffle(pairs), right: shuffle(pairs), selected: null, done: 0, total: pairs.length, mode };
  renderMatching();
}
function renderMatching() {
  const left = $("#matchLeft"), right = $("#matchRight");
  left.innerHTML = ""; right.innerHTML = "";
  matchState.left.forEach((p, i) => left.appendChild(matchTile(p.left, "L" + i, p.leftIsText)));
  matchState.right.forEach((p, i) => right.appendChild(matchTile(p.right, "R" + i, !p.leftIsText)));
  $("#matchProgress").style.width = (matchState.done / matchState.total * 100) + "%";
}
function matchTile(content, id, big) {
  const t = document.createElement("div");
  t.className = "match-tile";
  t.dataset.id = id; t.dataset.content = content;
  t.innerHTML = `<div class="${big ? "big hanzi" : "sub"}">${content}</div>`;
  t.onclick = () => onMatchClick(t);
  return t;
}
function onMatchClick(tile) {
  if (tile.classList.contains("correct")) return;
  if (!matchState.selected) { tile.classList.add("selected"); matchState.selected = tile; return; }
  const sameCol = tile.dataset.id[0] === matchState.selected.dataset.id[0];
  if (tile === matchState.selected) { tile.classList.remove("selected"); matchState.selected = null; return; }
  if (sameCol) { matchState.selected.classList.remove("selected"); tile.classList.add("selected"); matchState.selected = tile; return; }
  if (tile.dataset.content === matchState.selected.dataset.content) {
    tile.classList.add("correct"); matchState.selected.classList.add("correct");
    matchState.done++; bumpXP(5); toast("✓ Correct! +5", "good");
    speak(matchState.selected.dataset.content);
    if (matchState.done === matchState.total) { setTimeout(() => { bumpXP(15); toast("Round complete! +15 🎉", "good"); }, 400); }
  } else {
    tile.classList.add("wrong"); matchState.selected.classList.add("wrong"); bumpXP(1);
    setTimeout(() => { tile.classList.remove("wrong"); matchState.selected.classList.remove("wrong"); }, 500);
  }
  $("#matchProgress").style.width = (matchState.done / matchState.total * 100) + "%";
  matchState.selected = null;
}

/* =====================================================================
   4. MEMORY PAIRS
   ===================================================================== */
let memState = null;
function startMemory() {
  const n = 8;
  const pool = shuffle(D.characters).slice(0, n);
  const cards = [];
  pool.forEach((c, i) => {
    cards.push({ id: i, side: "ch", text: c.ch });
    cards.push({ id: i, side: "py", text: c.py });
  });
  memState = { deck: shuffle(cards), flipped: [], done: 0, total: n, locked: false };
  renderMemory();
}
function renderMemory() {
  const grid = $("#memoryGrid");
  grid.innerHTML = "";
  memState.deck.forEach((card, idx) => {
    const b = document.createElement("button");
    b.className = "mem-tile"; b.dataset.idx = idx;
    b.innerHTML = `<div class="mem-inner"><div class="mem-side mem-front">?</div>
      <div class="mem-side mem-back"><div class="${card.side === "ch" ? "ch hanzi" : "lbl"}">${card.text}</div></div></div>`;
    b.onclick = () => onMemClick(b, idx);
    grid.appendChild(b);
  });
}
function onMemClick(b, idx) {
  if (memState.locked) return;
  if (b.classList.contains("flipped") || b.classList.contains("done")) return;
  b.classList.add("flipped");
  memState.flipped.push({ idx, card: memState.deck[idx], el: b });
  if (memState.flipped.length === 2) {
    memState.locked = true;
    const [a, c] = memState.flipped;
    if (a.card.id === c.card.id && a.card.side !== c.card.side) {
      setTimeout(() => {
        a.el.classList.add("done"); c.el.classList.add("done");
        memState.done++; bumpXP(6); speak(a.card.text);
        toast("✓ Pair found! +6", "good");
        if (memState.done === memState.total) { bumpXP(20); toast("Memory complete! +20 🏆", "good"); }
        memState.flipped = []; memState.locked = false;
      }, 450);
    } else {
      bumpXP(1);
      setTimeout(() => {
        a.el.classList.remove("flipped"); c.el.classList.remove("flipped");
        memState.flipped = []; memState.locked = false;
      }, 850);
    }
  }
}

/* =====================================================================
   5. TONE SORT (drag & drop)
   ===================================================================== */
let sortState = null;
function startSort() {
  const n = 12;
  const pool = sample(D.characters.filter(c => c.tone !== 0), n);
  sortState = { pool, placed: 0, correct: 0 };
  renderSort();
}
function renderSort() {
  $$(".zone .pile").forEach(p => p.innerHTML = "");
  const q = $("#sortQueue");
  q.innerHTML = "";
  sortState.pool.forEach((c, i) => {
    const chip = document.createElement("div");
    chip.className = "chip hanzi"; chip.textContent = c.ch;
    chip.draggable = true; chip.dataset.idx = i; chip.dataset.tone = c.tone;
    chip.addEventListener("dragstart", e => { chip.classList.add("dragging"); e.dataTransfer.setData("text", i); });
    chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
    chip.addEventListener("click", () => speak(c.ch));
    chip.addEventListener("touchstart", () => { window.__sortSel = chip; toast(`Selected ${c.ch} — tap a zone`); });
    q.appendChild(chip);
  });
}
function setupSortZones() {
  $$(".zone").forEach(z => {
    z.addEventListener("dragover", e => { e.preventDefault(); z.classList.add("over"); });
    z.addEventListener("dragleave", () => z.classList.remove("over"));
    z.addEventListener("drop", e => { e.preventDefault(); z.classList.remove("over"); placeChip(e.dataTransfer.getData("text"), z.dataset.tone, z); });
    z.addEventListener("click", () => { if (window.__sortSel) { placeChip(window.__sortSel.dataset.idx, z.dataset.tone, z); window.__sortSel = null; } });
  });
}
function placeChip(idx, tone, zone) {
  const chip = $(`#sortQueue .chip[data-idx="${idx}"]`);
  if (!chip) return;
  const c = sortState.pool[idx];
  if (chip.parentElement.id === "sortQueue") {
    if (String(c.tone) === tone) {
      zone.querySelector(".pile").appendChild(chip);
      chip.draggable = false; chip.style.cursor = "default"; chip.style.background = "rgba(46,204,113,.2)";
      sortState.correct++; sortState.placed++; bumpXP(5); speak(c.ch);
      toast(`✓ ${c.ch} = ${toneLabel[c.tone]} tone`, "good");
      markKnown(c.ch, true);
      if (sortState.placed === sortState.pool.length) {
        setTimeout(() => { bumpXP(20); toast(`Sorted! ${sortState.correct}/${sortState.pool.length} 🎉`, "good"); }, 400);
      }
    } else {
      bumpXP(1); toast(`✗ ${c.ch} is ${toneLabel[c.tone]} tone`, "bad");
      chip.style.background = "rgba(255,92,122,.25)";
      setTimeout(() => chip.style.background = "", 600);
    }
  }
}

/* =====================================================================
   6. QUIZ
   ===================================================================== */
let quizState = null;
function startQuiz() {
  const type = $("#quizType").value;
  const pool = shuffle(D.characters);
  quizState = { type, pool, idx: 0, score: 0, answers: [] };
  renderQuiz();
}
function renderQuiz() {
  const wrap = $("#quizArea");
  if (!quizState || quizState.idx >= quizState.pool.length) {
    const pct = quizState ? Math.round(quizState.score / quizState.pool.length * 100) : 0;
    const stars = pct >= 90 ? "⭐⭐⭐" : pct >= 70 ? "⭐⭐" : pct >= 50 ? "⭐" : "💪";
    wrap.innerHTML = `<div class="result-box"><div class="stars">${stars}</div>
      <div class="score">${quizState.score} / ${quizState.pool.length}</div>
      <p style="color:var(--muted);">${pct}% correct</p>
      <button class="btn primary" onclick="startQuiz()">Play again</button></div>`;
    bumpXP(quizState.score * 3);
    return;
  }
  const c = quizState.pool[quizState.idx];
  let key, label;
  if (quizState.type === "pinyin") { key = c.py; label = "What is the pinyin?"; }
  if (quizState.type === "tone")   { key = c.tone; label = "Which tone?"; }
  if (quizState.type === "meaning") { key = c.words && c.words[0] ? c.words[0].mean : c.sound; label = "What does this mean?"; }

  let options;
  if (quizState.type === "tone") {
    options = shuffle([{label:"1st",value:1},{label:"2nd",value:2},{label:"3rd",value:3},{label:"4th",value:4}]);
  } else {
    const field = quizState.type === "pinyin" ? "py" : null;
    const correct = quizState.type === "pinyin" ? c.py : (c.words && c.words[0] ? c.words[0].mean : c.sound);
    const distractors = shuffle(D.characters.filter(x => {
      const xv = quizState.type === "pinyin" ? x.py : (x.words && x.words[0] ? x.words[0].mean : x.sound);
      return xv !== correct;
    }).slice(0, 20), 3);
    options = shuffle([{label: correct, value: correct, correct: true},
      ...distractors.map(x => ({label: quizState.type === "pinyin" ? x.py : (x.words && x.words[0] ? x.words[0].mean : x.sound), value: quizState.type === "pinyin" ? x.py : (x.words && x.words[0] ? x.words[0].mean : x.sound)}))]);
  }
  options = options.slice(0, 4);

  wrap.innerHTML = `
    <div class="progress-bar"><div class="fill" style="width:${quizState.idx / quizState.pool.length * 100}%"></div></div>
    <div class="quiz-prompt">
      <div class="big hanzi">${c.ch}</div>
      <div class="q">${label}</div>
      <button class="btn small" onclick="speak('${c.ch}')">🔊 Hear it</button>
    </div>
    <div class="choices">${options.map((o, i) => `<div class="choice" data-i="${i}" data-v="${esc(o.value)}">${o.label}</div>`).join("")}</div>
    <p style="text-align:center;color:var(--muted);margin-top:14px;font-size:13px;">Tap to answer · ${quizState.idx + 1} of ${quizState.pool.length}</p>`;
  $$("#quizArea .choice").forEach(el => el.onclick = () => onQuizAnswer(el, key, c));
}
function onQuizAnswer(el, key, c) {
  const correct = el.dataset.v === String(key);
  $$("#quizArea .choice").forEach(o => { o.style.pointerEvents = "none"; if (o.dataset.v === String(key)) o.classList.add("correct"); });
  if (!correct) el.classList.add("wrong");
  if (correct) { quizState.score++; toast("✓ Correct!", "good"); markKnown(c.ch, true); }
  else { toast(`Answer: ${key}`, "bad"); markKnown(c.ch, false); }
  speak(c.ch);
  setTimeout(() => { quizState.idx++; renderQuiz(); }, 1000);
}

/* =====================================================================
   7. PRONUNCIATION PRACTICE
   ===================================================================== */
let pronState = null;
let pronRecognition = null;
function startPron() {
  pronNext();
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR && !pronRecognition) {
    pronRecognition = new SR();
    pronRecognition.lang = "zh-CN";
    pronRecognition.continuous = false;
    pronRecognition.interimResults = false;
    pronRecognition.onresult = (e) => { const heard = e.results[0][0].transcript.trim(); gradePron(heard); };
    pronRecognition.onend = () => { $("#micBtn").classList.remove("recording"); };
    pronRecognition.onerror = () => { $("#micBtn").classList.remove("recording"); toast("Mic error — try again", "bad"); };
  }
}
function pronNext() {
  const mode = $("#pronMode").value;
  let item;
  if (mode === "words") {
    item = sample(D.allWords.filter(w => w.zh.length <= 3), 1)[0];
    pronState = { target: item.zh, py: item.py, mean: item.mean };
  } else {
    const c = sample(D.characters, 1)[0];
    pronState = { target: c.ch, py: c.py, mean: c.sound };
  }
  renderPron(0);
}
function renderPron(score) {
  $("#pronArea").innerHTML = `
    <div class="pron-card">
      <div class="big hanzi">${pronState.target}</div>
      <div class="rom">${pronState.py}</div>
      <div class="mean">${pronState.mean || ""}</div>
      <button class="btn small" onclick="speak('${pronState.target}')">🔊 Hear it</button>
      <div><button id="micBtn" class="mic-btn" title="Record">🎙</button></div>
      <div class="pron-meter"><div class="fill" style="width:${score}%"></div></div>
      <div class="tip">${score === 0 ? "Tap the mic and repeat after the tone." : score >= 70 ? "Great! 🎉" : "Try to match the tone."}</div>
    </div>
    <div style="text-align:center;margin-top:14px;"><button class="btn small" onclick="pronNext()">Next ➜</button></div>`;
  $("#micBtn").onclick = onMicClick;
}
function onMicClick() {
  if (!pronRecognition) {
    toast("Speech recognition not available — tap 🔊 and repeat aloud", "");
    speak(pronState.target, 0.8, () => { renderPron(70 + rand(25)); bumpXP(4); markKnown(pronState.target, true); });
    return;
  }
  try { $("#micBtn").classList.add("recording"); pronRecognition.start(); }
  catch { $("#micBtn").classList.remove("recording"); }
}
function gradePron(heard) {
  const t = pronState.target;
  let s = 0;
  if (heard === t) s = 100;
  else {
    const setT = new Set([...t]); const setH = new Set([...heard]);
    let common = 0; setT.forEach(c => { if (setH.has(c)) common++; });
    s = Math.round(common / setT.size * 80) + 15;
  }
  renderPron(s); bumpXP(Math.round(s / 10)); markKnown(t, s >= 60);
  if (s >= 80) toast("Excellent! ⭐", "good");
  else if (s >= 50) toast("Good effort 👍", "");
  else toast("Try again — listen and repeat", "bad");
}

/* =====================================================================
   8. TONES TABLE
   ===================================================================== */
function renderTones() {
  const toneExamples = D.tones.map(t => {
    const ex = t.examples.map(e => `<div class="card" onclick="speak('${e.zh}')"><div class="ch hanzi">${e.zh}</div><div class="nm">${e.py}</div></div>`).join("");
    return `<div class="tone-block">
      <div class="tone-header tone${t.num}">
        <span class="tone-num">${t.num === 0 ? "0" : t.num}</span>
        <div><div class="tone-name">${t.name}</div><div class="tone-desc">${t.desc}</div></div>
      </div>
      <div class="grid" style="margin-top:12px;">${ex}</div>
    </div>`;
  }).join("");

  $("#tonesTable").innerHTML = `
    <div class="tones-intro">
      <p style="color:var(--muted);font-size:14px;">
        Mandarin Chinese has 4 tones + 1 neutral tone. The tone changes the meaning of a word!
        Master tones by listening and repeating — tap any card to hear it.
      </p>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;">${toneExamples}</div>
    <div style="margin-top:24px;background:var(--panel);border-radius:16px;padding:20px;">
      <h3 style="margin:0 0 8px;">🎯 Tone Pairs Practice</h3>
      <p style="margin:0;color:var(--muted);font-size:14px;">
        Same pinyin, different tones = completely different meanings. Practice these minimal pairs:
      </p>
      <div class="grid" style="margin-top:14px;">
        <div class="card" onclick="speak('mā')"><div class="ch hanzi">妈</div><div class="nm">mā — mom</div></div>
        <div class="card" onclick="speak('má')"><div class="ch hanzi">麻</div><div class="nm">má — hemp</div></div>
        <div class="card" onclick="speak('mǎ')"><div class="ch hanzi">马</div><div class="nm">mǎ — horse</div></div>
        <div class="card" onclick="speak('mà')"><div class="ch hanzi">骂</div><div class="nm">mà — scold</div></div>
      </div>
      <p style="color:var(--muted);font-size:12px;margin-top:12px;">
        Classic example: mā mā mà mǎ (妈妈骂马) = "Mom scolds the horse" 🐴
      </p>
    </div>`;
}

/* =====================================================================
   WIRING & INIT
   ===================================================================== */
window.addEventListener("error", (e) => {
  console.error("Caught error:", e.error || e.message);
  try { toast("Something went wrong — continuing", "bad"); } catch {}
  return true;
});
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
  e.preventDefault();
});

function init() {
  $$(".nav button").forEach(b => b.addEventListener("click", () => showScreen(b.dataset.screen)));
  $("#refFilter").addEventListener("change", renderReference);
  $("#fcFilter").addEventListener("change", () => { buildFlashDeck(); renderFlashcard(); });
  $("#matchMode").addEventListener("change", startMatching);
  $("#quizType").addEventListener("change", startQuiz);
  $("#pronMode").addEventListener("change", pronNext);
  window.speak = speak; window.fcFlip = fcFlip; window.fcNext = fcNext; window.fcShuffle = fcShuffle;
  window.startQuiz = startQuiz; window.pronNext = pronNext; window.startMatching = startMatching;
  window.startMemory = startMemory; window.showScreen = showScreen;
  setupSortZones(); renderHUD(); showScreen("home");
  const today = new Date().toDateString();
  if (progress.lastDay !== today) {
    progress.streak += 1; progress.lastDay = today; store.save(progress); renderHUD();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  try { init(); }
  catch (e) { console.error("init() failed:", e); }
});
