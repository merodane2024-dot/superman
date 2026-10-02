/* ==========================================================
   ALHAWI — Batman page (standalone, bilingual AR/EN)
   ========================================================== */
(function(){
"use strict";

var PART = "superman";
var PART_ORDER = 3;
var NEXT_PART = null; // last part -> reward shows only the shop button
var SHOP_LINK = "https://alhawi-stock.com/products/superheros-1785011909-588";

/* Which image each game uses on this page, and the order shown */
var GAME_ORDER = ["coloring","puzzle","scratch","memory"];
var GAMES = {
  coloring: { type:"coloring", image:"assets/coloring-lineart.png" },
  puzzle:   { type:"puzzle",   image:"assets/1.jpg" },
  scratch:  { type:"scratch",  image:"assets/2.jpg" },
  memory:   { type:"memory",   images:["assets/1_thumb.jpg","assets/2_thumb.jpg","assets/3_thumb.jpg","assets/4_thumb.jpg","assets/5_thumb.jpg"] }
};

/* ---------------------------------------------------------
   Dictionary
   --------------------------------------------------------- */
var DICT = {
  ar: {
    dir:"rtl", htmlLang:"ar",
    brand:"الحاوي",
    nav:{ batman:"باتمان", spiderman:"سبايدرمان", superman:"سوبرمان" },
    langToggle:"English",
    heroNames:{ batman:"باتمان", spiderman:"سبايدرمان", superman:"سوبرمان" },
    heroIntros:{
      batman:"ادخل الورشة وساعد باتمان يجمّع عالمه من جديد.",
      spiderman:"العب لغز القطع، بطاقة الكشط، وتحدي الذاكرة.",
      superman:"تعاون مع سوبرمان في لغز، بطاقة كشط، ولعبة ذاكرة."
    },
    kicker:"العالم {n} من 3",
    gameMeta:{
      coloring:{ title:"استوديو التلوين", icon:"🖌️", desc:"لوّن صفحة البطل بالألوان اللي تحبها." },
      puzzle:{ title:"لغز القطع", icon:"🧩", desc:"بدّل القطع لإعادة تركيب الصورة." },
      scratch:{ title:"اكشط واكتشف", icon:"✨", desc:"اكشط البطاقة لتكشف الصورة." },
      memory:{ title:"لعبة الذاكرة", icon:"🃏", desc:"اقلب البطاقات وابحث عن كل زوج." }
    },
    hubTeaser:"🎁 اكشط بطاقة \"اكشط واكتشف\" لتفتح جائزة فورية!",
    backToGames:"‹ رجوع للألعاب",
    engine:{
      goalPicture:"الصورة الهدف",
      puzzleSolvedToast:"تم حل اللغز! أحسنت! 🎉",
      puzzleSolvedBanner:"تم الحل! 🎉",
      shuffleAgain:"أعد الخلط",
      scratchHint:"اسحب فوق البطاقة لكشطها ✨",
      scratchRevealedHint:"تم الكشف! ✨ كشط رائع.",
      scratchRevealedToast:"لقد كشفت البطل! ✨",
      movesLabel:"الحركات",
      pairsLabel:"الأزواج",
      memoryWinToast:"وجدت كل الأزواج! ذاكرة رائعة! 🧠",
      referenceCaption:"شاهد هذه الصورة، ثم ارسمها بأسلوبك!",
      coloringCaption:"لوّن الرسمة بالألوان اللي تحبها 🎨",
      brushLabel:"الفرشاة",
      eraserLabel:"ممحاة",
      clearPage:"امسح الصفحة",
      saveArt:"احفظ رسمتك",
      saveToast:"تم الحفظ! تحقق من مجلد التنزيلات. 🎨",
      saveFailToast:"الحفظ يعمل بشكل أفضل عند نشر الموقع أونلاين.",
      doneColoringBtn:"انتهيت من الرسم 🎨"
    },
    reward:{
      burst:"لقد فتحت البطل الإضافي!",
      copy:"اشترِ الآن وجرّب باقي الشخصيات – احصل على خصم 10% باستخدام الكود",
      code:"ALHAWI10",
      shopBtn:"زيارة alhawi-stock.com",
      nextWorldBtn:"العالم التالي: {name} ←",
      homeBtn:"↺ العودة للصفحة الرئيسية"
    },
    footer:"الهاوي — العب الألعاب، وافتح الأبطال.",
    footerShop:"🛍️ تسوّق الآن على Alhawi Store"
  },
  en: {
    dir:"ltr", htmlLang:"en",
    brand:"ALHAWI",
    nav:{ batman:"Batman", spiderman:"Spider-Man", superman:"Superman" },
    langToggle:"العربية",
    heroNames:{ batman:"Batman", spiderman:"Spider-Man", superman:"Superman" },
    heroIntros:{
      batman:"Step into the workshop and help Batman put his world back together.",
      spiderman:"Play the tile puzzle, the scratch card, and the memory challenge.",
      superman:"Team up with Superman for a puzzle, a scratch reveal, and a memory match."
    },
    kicker:"World {n} of 3",
    gameMeta:{
      coloring:{ title:"Coloring Studio", icon:"🖌️", desc:"Color in the hero's page with any colors you like." },
      puzzle:{ title:"Tile Puzzle", icon:"🧩", desc:"Swap the tiles to rebuild the picture." },
      scratch:{ title:"Scratch & Reveal", icon:"✨", desc:"Scratch the card to reveal the photo." },
      memory:{ title:"Memory Match", icon:"🃏", desc:"Flip the cards and find every pair." }
    },
    hubTeaser:"🎁 Scratch the \"Scratch & Reveal\" card to instantly unlock a reward!",
    backToGames:"‹ Back to games",
    engine:{
      goalPicture:"Goal picture",
      puzzleSolvedToast:"Puzzle solved! Great job! 🎉",
      puzzleSolvedBanner:"Solved! 🎉",
      shuffleAgain:"Shuffle again",
      scratchHint:"Drag across the card to scratch it off ✨",
      scratchRevealedHint:"Revealed! ✨ Nice scratching.",
      scratchRevealedToast:"You revealed the hero! ✨",
      movesLabel:"Moves",
      pairsLabel:"Pairs",
      memoryWinToast:"All matched! Amazing memory! 🧠",
      referenceCaption:"Look at this, then draw it your way!",
      coloringCaption:"Color the picture with any colors you like 🎨",
      brushLabel:"Brush",
      eraserLabel:"Eraser",
      clearPage:"Clear page",
      saveArt:"Save my art",
      saveToast:"Saved! Check your downloads. 🎨",
      saveFailToast:"Saving works best once the site is live online.",
      doneColoringBtn:"I'm done coloring! 🎨"
    },
    reward:{
      burst:"You unlocked the bonus hero!",
      copy:"Buy now & try other characters – get a 10% discount using code",
      code:"ALHAWI10",
      shopBtn:"Visit alhawi-stock.com",
      nextWorldBtn:"Next world: {name} →",
      homeBtn:"↺ Back to Alhawi home"
    },
    footer:"Alhawi — play the games, unlock the heroes.",
    footerShop:"🛍️ Shop now at Alhawi Store"
  }
};

function getLang(){
  try{ return localStorage.getItem("alhawi_lang") || "ar"; }catch(e){ return "ar"; }
}
function setLang(l){
  try{ localStorage.setItem("alhawi_lang", l); }catch(e){}
}
function t(){ return DICT[getLang()]; }

/* ---------------------------------------------------------
   Small helpers
   --------------------------------------------------------- */
var toastEl, toastTimer=null;
function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ toastEl.classList.remove("show"); }, 2200);
}
function shuffle(arr){
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var tmp=arr[i]; arr[i]=arr[j]; arr[j]=tmp;
  }
  return arr;
}
function el(tag, cls, html){
  var e=document.createElement(tag);
  if(cls) e.className=cls;
  if(html!==undefined) e.innerHTML=html;
  return e;
}

/* Deals a shuffled memory deck, reshuffling (a few extra passes each
   time) until no identical pair ends up directly next to each other
   — horizontally or vertically — in either grid layout the CSS uses
   (5 columns on wide screens, 3 on narrow ones). This makes shuffles
   consistently feel well-mixed instead of occasionally looking "easy"
   purely by chance. */
function hasAdjacentPair(deck, cols){
  for(var i=0;i<deck.length;i++){
    var col = i % cols;
    if(col < cols-1 && deck[i+1] && deck[i+1].src === deck[i].src) return true;
    var below = i + cols;
    if(below < deck.length && deck[below].src === deck[i].src) return true;
  }
  return false;
}
function dealMemoryDeck(images){
  var deck, attempts = 0;
  do{
    deck = images.concat(images).map(function(src,i){ return {src:src, uid:i}; });
    shuffle(deck); shuffle(deck); shuffle(deck);
    attempts++;
  } while(attempts < 2000 && (hasAdjacentPair(deck,5) || hasAdjacentPair(deck,3)));
  return deck;
}

/* ---------------------------------------------------------
   Reward block — shown inline once a game is finished
   --------------------------------------------------------- */
function revealReward(container){
  if(container.querySelector(".reward")) return;
  var d = t();
  var box = el("section","reward");
  box.appendChild(el("div","burst", d.reward.burst));

  var frame = el("div","reward-frame");
  var img = el("img"); img.src = "assets/finale.jpg"; img.alt = d.reward.burst;
  frame.appendChild(img);
  box.appendChild(frame);

  var copy = el("div","reward-copy");
  copy.appendChild(el("p", null, d.reward.copy + " <code>" + d.reward.code + "</code>."));
  var actions = el("div","reward-actions");

  var shopBtn = el("a","btn btn-lg", d.reward.shopBtn);
  shopBtn.href = SHOP_LINK;
  shopBtn.target = "_blank";
  shopBtn.rel = "noopener";
  actions.appendChild(shopBtn);

  if(NEXT_PART){
    var nextBtn = el("a","btn btn-ghost");
    nextBtn.textContent = d.reward.nextWorldBtn.replace("{name}", d.heroNames[NEXT_PART]);
    nextBtn.href = "../"+NEXT_PART+"/index.html";
    actions.appendChild(nextBtn);
  }

  copy.appendChild(actions);
  box.appendChild(copy);
  container.appendChild(box);
  box.scrollIntoView({behavior:"smooth", block:"nearest"});
}

/* ==========================================================
   GAME ENGINE — Tile puzzle (3x3 swap)
   ========================================================== */
function mountPuzzle(stage, imageSrc){
  stage.innerHTML = "";
  var d = t();
  var N = 3, total = N*N;
  var tiles = [];
  for(var i=0;i<total;i++) tiles.push(i);
  function isSolved(arr){
    for(var k=0;k<arr.length;k++) if(arr[k]!==k) return false;
    return true;
  }
  do { shuffle(tiles); } while(isSolved(tiles));

  var wrap = el("div","puzzle-wrap");
  var refCol = el("div","ref-box");
  var refImg = el("img"); refImg.src = imageSrc; refImg.alt = d.engine.goalPicture;
  refCol.appendChild(refImg);
  refCol.appendChild(el("span",null,d.engine.goalPicture));

  var board = el("div","puzzle-board");
  var tileEls = [];
  var selected = null;

  function draw(){
    for(var i=0;i<total;i++){
      var el2 = tileEls[i];
      var pieceIdx = tiles[i];
      var row = Math.floor(pieceIdx/N), col = pieceIdx%N;
      el2.style.backgroundImage = "url('"+imageSrc+"')";
      el2.style.backgroundPosition = (col/(N-1))*100 + "% " + (row/(N-1))*100 + "%";
      el2.style.backgroundSize = "300% 300%";
      el2.classList.toggle("matched", tiles[i]===i);
    }
  }
  for(var p=0;p<total;p++){
    (function(pos){
      var tl = el("div","puzzle-tile");
      tl.tabIndex = 0;
      tl.addEventListener("click", function(){ onPick(pos); });
      tl.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); onPick(pos); }});
      tileEls.push(tl);
      board.appendChild(tl);
    })(p);
  }
  function onPick(pos){
    if(selected===null){ selected=pos; tileEls[pos].classList.add("selected"); return; }
    if(selected===pos){ tileEls[pos].classList.remove("selected"); selected=null; return; }
    var tmp = tiles[selected]; tiles[selected]=tiles[pos]; tiles[pos]=tmp;
    tileEls[selected].classList.remove("selected");
    selected = null;
    draw();
    if(isSolved(tiles)){
      showToast(d.engine.puzzleSolvedToast);
      win.textContent = d.engine.puzzleSolvedBanner;
    }
  }
  draw();

  wrap.appendChild(board);
  wrap.appendChild(refCol);
  stage.appendChild(wrap);

  var controls = el("div","game-controls");
  var shuffleBtn = el("button","btn btn-ghost", d.engine.shuffleAgain);
  shuffleBtn.type = "button";
  shuffleBtn.addEventListener("click", function(){
    do { shuffle(tiles); } while(isSolved(tiles));
    selected = null;
    win.textContent = "";
    draw();
  });
  controls.appendChild(shuffleBtn);
  stage.appendChild(controls);

  var win = el("div","win-banner","");
  stage.appendChild(win);
}

/* ==========================================================
   GAME ENGINE — Scratch to reveal
   ========================================================== */
function mountScratch(stage, imageSrc){
  stage.innerHTML = "";
  var d = t();
  var frame = el("div","scratch-frame");
  var img = el("img"); img.src = imageSrc; img.alt = d.engine.goalPicture;
  var canvas = el("canvas");
  frame.appendChild(img);
  frame.appendChild(canvas);
  stage.appendChild(frame);

  var hint = el("p","scratch-hint", d.engine.scratchHint);
  stage.appendChild(hint);

  var W=380, H=475;
  canvas.width=W; canvas.height=H;
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#B7BDC6";
  ctx.fillRect(0,0,W,H);
  ctx.strokeStyle = "rgba(255,255,255,0.28)";
  ctx.lineWidth = 14;
  for(var i=-H;i<W;i+=28){
    ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i+H,H); ctx.stroke();
  }
  ctx.fillStyle = "rgba(20,22,27,0.55)";
  ctx.font = "bold 26px 'Cairo', sans-serif";
  ctx.textAlign = "center";
  ctx.save();
  ctx.translate(W/2,H/2);
  ctx.rotate(-0.12);
  ctx.fillText(getLang()==="ar" ? "اكشطني" : "SCRATCH ME", 0, 10);
  ctx.restore();

  var trackW=50, trackH=Math.round(trackW*H/W);
  var track = document.createElement("canvas");
  track.width=trackW; track.height=trackH;
  var tctx = track.getContext("2d");
  tctx.fillStyle = "#000"; tctx.fillRect(0,0,trackW,trackH);

  var drawing=false, revealed=false;
  function posFromEvent(e){
    var rect = canvas.getBoundingClientRect();
    return { x:(e.clientX-rect.left)/rect.width*W, y:(e.clientY-rect.top)/rect.height*H };
  }
  function scratchAt(x,y){
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath(); ctx.arc(x,y,26,0,Math.PI*2); ctx.fill();
    tctx.globalCompositeOperation = "destination-out";
    tctx.beginPath(); tctx.arc(x/W*trackW, y/H*trackH, 26/W*trackW, 0, Math.PI*2); tctx.fill();
  }
  function checkProgress(){
    var data = tctx.getImageData(0,0,trackW,trackH).data;
    var cleared = 0;
    for(var i=3;i<data.length;i+=4){ if(data[i]<40) cleared++; }
    var pct = cleared/(trackW*trackH);
    if(pct>0.55 && !revealed){
      revealed = true;
      canvas.style.transition = "opacity .4s ease";
      canvas.style.opacity = "0";
      setTimeout(function(){ canvas.style.display="none"; }, 420);
      hint.textContent = d.engine.scratchRevealedHint;
      showToast(d.engine.scratchRevealedToast);
      revealReward(stage);
    }
  }
  function start(e){ if(revealed) return; drawing=true; try{canvas.setPointerCapture(e.pointerId);}catch(err){} var pt=posFromEvent(e); scratchAt(pt.x,pt.y); }
  function move(e){ if(!drawing||revealed) return; var pt=posFromEvent(e); scratchAt(pt.x,pt.y); checkProgress(); }
  function stop(){ drawing=false; checkProgress(); }

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
  canvas.addEventListener("pointerleave", stop);
}

/* ==========================================================
   GAME ENGINE — Memory match
   ========================================================== */
function mountMemory(stage, images){
  stage.innerHTML = "";
  var d = t();
  var stats = el("div","memory-stats");
  var movesEl = el("span",null,d.engine.movesLabel+": <b>0</b>");
  var pairsEl = el("span",null,d.engine.pairsLabel+": <b>0</b>/"+images.length);
  stats.appendChild(movesEl); stats.appendChild(pairsEl);
  stage.appendChild(stats);

  var deck = dealMemoryDeck(images);

  var board = el("div","memory-board");
  stage.appendChild(board);

  var cardEls = [];
  var moves = 0, pairsFound = 0;
  var firstIdx = null, lock = false;

  deck.forEach(function(card, idx){
    var c = el("div","memory-card");
    c.tabIndex = 0;
    var inner = el("div","memory-card-inner");
    var back = el("div","memory-face back","<span class='bolt'>⚡</span>");
    var front = el("div","memory-face front");
    var img = el("img"); img.src = card.src; img.alt="";
    front.appendChild(img);
    inner.appendChild(back); inner.appendChild(front);
    c.appendChild(inner);
    board.appendChild(c);
    cardEls.push(c);

    function flip(){
      if(lock || c.classList.contains("flipped") || c.classList.contains("matched")) return;
      c.classList.add("flipped");
      if(firstIdx===null){ firstIdx = idx; return; }
      moves++;
      movesEl.innerHTML = d.engine.movesLabel+": <b>"+moves+"</b>";
      var a = deck[firstIdx], b = deck[idx];
      if(a.src===b.src && firstIdx!==idx){
        cardEls[firstIdx].classList.add("matched");
        cardEls[idx].classList.add("matched");
        pairsFound++;
        pairsEl.innerHTML = d.engine.pairsLabel+": <b>"+pairsFound+"</b>/"+images.length;
        firstIdx = null;
        if(pairsFound===images.length){
          showToast(d.engine.memoryWinToast);
        }
      } else {
        lock = true;
        var f = firstIdx;
        setTimeout(function(){
          cardEls[f].classList.remove("flipped");
          cardEls[idx].classList.remove("flipped");
          firstIdx = null; lock = false;
        }, 800);
      }
    }
    c.addEventListener("click", flip);
    c.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); flip(); }});
  });
}

/* ==========================================================
   GAME ENGINE — Coloring: real line-art coloring page.
   A color canvas sits underneath; the line-art image sits on
   top with mix-blend-mode:multiply so white stays transparent
   and the black outline always shows through the colors.
   ========================================================== */
function mountColoring(stage, lineArtSrc){
  stage.innerHTML = "";
  var d = t();
  var wrap = el("div","coloring-wrap");

  var col = el("div","coloring-canvas-col");
  var holder = el("div","coloring-canvas-holder");
  var canvas = el("canvas");
  var overlay = el("img","coloring-overlay");
  overlay.src = lineArtSrc;
  overlay.alt = "";
  overlay.draggable = false;
  holder.appendChild(canvas);
  holder.appendChild(overlay);
  col.appendChild(holder);

  var caption = el("p","coloring-caption", d.engine.coloringCaption);
  col.appendChild(caption);

  var W=360, H=450;
  canvas.width=W; canvas.height=H;
  var ctx = canvas.getContext("2d");

  var colors = ["#E13334","#0D4EA6","#FFD100","#2ea043","#8E44AD","#FF8C00","#14161B"];
  var currentColor = colors[0];
  var brushSize = 14;
  var eraser = false;

  var palette = el("div","palette");
  var swatchEls = [];
  colors.forEach(function(c, i){
    var s = el("button","swatch"+(i===0?" active":""));
    s.type = "button";
    s.style.background = c;
    s.setAttribute("aria-label","color "+c);
    s.addEventListener("click", function(){
      currentColor = c; eraser = false;
      swatchEls.forEach(function(x){x.classList.remove("active");});
      s.classList.add("active");
      eraserBtn.classList.remove("active");
    });
    swatchEls.push(s);
    palette.appendChild(s);
  });

  var toolRow = el("div","tool-row");
  var sizeLabel = el("span",null,d.engine.brushLabel);
  var sizeInput = document.createElement("input");
  sizeInput.type="range"; sizeInput.min="4"; sizeInput.max="36"; sizeInput.value=String(brushSize);
  sizeInput.addEventListener("input", function(){ brushSize = parseInt(sizeInput.value,10); });

  var eraserBtn = el("button","tool-btn", d.engine.eraserLabel);
  eraserBtn.type = "button";
  eraserBtn.addEventListener("click", function(){
    eraser = !eraser;
    eraserBtn.classList.toggle("active", eraser);
  });

  var clearBtn = el("button","tool-btn", d.engine.clearPage);
  clearBtn.type = "button";
  clearBtn.addEventListener("click", function(){ ctx.clearRect(0,0,W,H); });

  var saveBtn = el("button","tool-btn", d.engine.saveArt);
  saveBtn.type = "button";
  saveBtn.addEventListener("click", function(){
    try{
      var out = document.createElement("canvas");
      out.width=W; out.height=H;
      var octx = out.getContext("2d");
      octx.fillStyle = "#ffffff";
      octx.fillRect(0,0,W,H);
      octx.drawImage(canvas,0,0);
      if(overlay.complete){
        var ow = overlay.naturalWidth || W, oh = overlay.naturalHeight || H;
        var s = Math.min(W/ow, H/oh);
        var dw = ow*s, dh = oh*s, dx = (W-dw)/2, dy = (H-dh)/2;
        octx.globalCompositeOperation = "multiply";
        octx.drawImage(overlay, dx, dy, dw, dh);
        octx.globalCompositeOperation = "source-over";
      }
      var url = out.toDataURL("image/png");
      var a = document.createElement("a");
      a.href = url; a.download = "alhawi-coloring.png";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      showToast(d.engine.saveToast);
    }catch(err){
      showToast(d.engine.saveFailToast);
    }
  });

  toolRow.appendChild(sizeLabel);
  toolRow.appendChild(sizeInput);
  toolRow.appendChild(eraserBtn);
  toolRow.appendChild(clearBtn);
  toolRow.appendChild(saveBtn);

  col.appendChild(palette);
  col.appendChild(toolRow);

  wrap.appendChild(col);
  stage.appendChild(wrap);

  var drawingNow=false, lastX=0, lastY=0;
  function posFromEvent(e){
    var rect = canvas.getBoundingClientRect();
    return { x:(e.clientX-rect.left)/rect.width*W, y:(e.clientY-rect.top)/rect.height*H };
  }
  function strokeTo(x,y){
    ctx.globalCompositeOperation = eraser ? "destination-out" : "source-over";
    ctx.strokeStyle = currentColor;
    ctx.fillStyle = currentColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(lastX,lastY); ctx.lineTo(x,y); ctx.stroke();
    ctx.beginPath(); ctx.arc(x,y,brushSize/2,0,Math.PI*2); ctx.fill();
  }
  function start(e){
    drawingNow = true;
    try{canvas.setPointerCapture(e.pointerId);}catch(err){}
    var pt = posFromEvent(e); lastX=pt.x; lastY=pt.y;
    strokeTo(pt.x,pt.y);
  }
  function move(e){
    if(!drawingNow) return;
    var pt = posFromEvent(e);
    strokeTo(pt.x,pt.y);
    lastX=pt.x; lastY=pt.y;
  }
  function stop(){ drawingNow=false; }

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
  canvas.addEventListener("pointerleave", stop);
}

/* ==========================================================
   Page rendering + bootstrap
   ========================================================== */
var grid, stage, mount, titleEl, closeBtn, kickerEl, heroNameEl, heroIntroEl, teaserEl;

function renderHub(){
  var d = t();
  document.documentElement.lang = d.htmlLang;
  document.documentElement.dir = d.dir;
  document.title = d.heroNames[PART] + " — " + d.brand;

  document.getElementById("brandText").textContent = d.brand;
  wireNav(d);
  document.getElementById("langToggle").textContent = d.langToggle;

  kickerEl.textContent = d.kicker.replace("{n}", String(PART_ORDER));
  heroNameEl.textContent = d.heroNames[PART];
  heroIntroEl.textContent = d.heroIntros[PART];
  teaserEl.textContent = d.hubTeaser;
  closeBtn.textContent = d.backToGames;
  document.getElementById("siteFooter").textContent = d.footer;
  var shopLinkEl = document.getElementById("siteShopLink");
  shopLinkEl.textContent = d.footerShop;
  shopLinkEl.href = SHOP_LINK;

  grid.innerHTML = "";
  GAME_ORDER.forEach(function(key){
    var meta = d.gameMeta[GAMES[key].type];
    var card = el("div","panel game-card");
    card.tabIndex = 0;
    card.setAttribute("role","button");
    card.setAttribute("data-game", key);
    card.appendChild(el("div","icon", meta.icon));
    card.appendChild(el("h3", null, meta.title));
    card.appendChild(el("p", null, meta.desc));
    function open(){ openGame(key); }
    card.addEventListener("click", open);
    card.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); open(); }});
    grid.appendChild(card);
  });
}

function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

function wireNav(d){
  ["batman","spiderman","superman"].forEach(function(key){
    var a = document.getElementById("nav"+capitalize(key));
    if(key === PART){
      a.textContent = d.nav[key];
      a.href = "../"+key+"/index.html";
      a.removeAttribute("target");
      a.removeAttribute("rel");
      a.classList.remove("locked");
      a.classList.add("is-active");
    } else {
      a.textContent = "\uD83D\uDD12 " + d.nav[key];
      a.href = SHOP_LINK;
      a.target = "_blank";
      a.rel = "noopener";
      a.classList.remove("is-active");
      a.classList.add("locked");
    }
  });
}

function openGame(key){
  var d = t();
  var def = GAMES[key];
  if(!def) return;
  var meta = d.gameMeta[def.type];
  titleEl.textContent = meta.icon + " " + meta.title;
  stage.hidden = false;
  if(def.type==="puzzle") mountPuzzle(mount, def.image);
  else if(def.type==="scratch") mountScratch(mount, def.image);
  else if(def.type==="memory") mountMemory(mount, def.images);
  else if(def.type==="coloring") mountColoring(mount, def.image);
  stage.scrollIntoView({behavior:"smooth", block:"start"});
}

function closeGame(){
  stage.hidden = true;
  mount.innerHTML = "";
  grid.scrollIntoView({behavior:"smooth", block:"start"});
}

function init(){
  toastEl = document.getElementById("toast");
  grid = document.getElementById("gameGrid");
  stage = document.getElementById("gameStage");
  mount = document.getElementById("gameMount");
  titleEl = document.getElementById("gameTitle");
  closeBtn = document.getElementById("closeGame");
  kickerEl = document.getElementById("kicker");
  heroNameEl = document.getElementById("heroName");
  heroIntroEl = document.getElementById("heroIntro");
  teaserEl = document.getElementById("hubTeaser");

  closeBtn.addEventListener("click", closeGame);
  document.getElementById("langToggle").addEventListener("click", function(){
    var next = getLang()==="ar" ? "en" : "ar";
    setLang(next);
    closeGame();
    document.querySelectorAll(".topnav a").forEach(function(a){a.classList.remove("is-active");});
    renderHub();
  });

  renderHub();
}

document.addEventListener("DOMContentLoaded", init);

})();
