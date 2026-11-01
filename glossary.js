// 用語の説明。本文の <dfn class="term" data-term="SE">SE</dfn> にカーソルを合わせると吹き出し、クリックすると右のサイドバーに説明を出す
// 説明文はここにまとめ、各章と用語集のページ（glossary.html）で共通に使う
// 印は、各項目（スライド1枚）と詳細モーダルの中で、最初に出てくるところだけに付ける
const GLOSSARY_GROUPS = [
  { title: '仕事と働き方', icon: 'i-bag', terms: [
    { key: 'SE', name: 'SE', full: 'システムエンジニア', desc: '要望を聞いて、何を作るか決め、設計する人。' },
    { key: 'PG', name: 'PG', full: 'プログラマー', desc: '設計をもとに、コードを書く人。' },
    { key: 'QA', name: 'QA', full: '品質保証', desc: 'テストをして、不具合がないか確かめる人・仕事。' },
    { key: 'PM', name: 'PM', full: 'プロジェクトマネージャー', desc: '予算・人・スケジュールを管理する人。' },
    { key: 'SIer', name: 'SIer', full: 'エスアイヤー', desc: '会社や役所から頼まれて、システムを作って納める会社。大きな受託開発の会社を指すことが多い。' },
    { key: 'SES', name: 'SES', desc: 'お客さんの会社のチームに入って働く契約の形。給料は自分の会社からもらう。' },
    { key: '案件', name: '案件', full: 'あんけん', desc: '仕事の1件1件のこと。「案件に入る」は、そのプロジェクトの仕事をすること。' },
    { key: '単価', name: '単価', full: 'たんか', desc: '仕事1件、または1か月・1時間あたりにもらえる金額。' },
    { key: 'ポートフォリオ', name: 'ポートフォリオ', desc: '自分の力を見せるための作品。転職活動で会社に見せる。' },
  ]},
  { title: '仕事の流れ', icon: 'i-vee', terms: [
    { key: 'フェーズ', name: 'フェーズ', desc: '仕事の段階。「要件定義」「実装」など、流れの中の1つ1つ。' },
    { key: '上流工程', name: '上流工程', full: 'じょうりゅうこうてい', desc: '何を作るかを決める、仕事の前半（要件定義・設計）。' },
    { key: '下流工程', name: '下流工程', full: 'かりゅうこうてい', desc: '決めたものを作って確かめる、仕事の後半（実装・テスト）。' },
    { key: '要件定義', name: '要件定義', full: 'ようけんていぎ', desc: 'お客さんと話して、何を作るか（必要な機能など）を決める工程。' },
    { key: '基本設計', name: '基本設計', desc: '画面や機能など、使う人から見える部分を決める工程。' },
    { key: '詳細設計', name: '詳細設計', desc: 'プログラムの中の作りを決める工程。' },
    { key: '単体テスト', name: '単体テスト', desc: '部品ごとに、正しく動くか確かめる。' },
    { key: '結合テスト', name: '結合テスト', desc: '部品をつないで、一緒に正しく動くか確かめる。' },
    { key: 'システムテスト', name: 'システムテスト', desc: '全体を通して、決めたとおりに動くか確かめる。' },
    { key: '受け入れテスト', name: '受け入れテスト', desc: 'お客さんが実際に使って、頼んだとおりか確かめる。' },
  ]},
  { title: 'Webの仕組み', icon: 'i-globe', terms: [
    { key: 'ブラウザ', name: 'ブラウザ', desc: 'インターネットのページを見るためのアプリ。Chrome、Safari、Edge など。' },
    { key: 'サーバー', name: 'サーバー', desc: 'インターネットの向こう側で、ページやデータを用意して送り返すコンピューター。' },
    { key: 'URL', name: 'URL', desc: 'ページの住所。「https://」から始まる文字で、開くとそのページが出る。' },
    { key: 'HTTP', name: 'HTTP', desc: 'ブラウザとサーバーがやり取りするときの決まりごと。URLの先頭の「http」はこれ。' },
    { key: 'インフラ', name: 'インフラ', desc: 'サービスを動かすための土台。サーバーやネットワークなど。道路や水道のようなもの。' },
    { key: 'クラウドサービス', name: 'クラウドサービス', desc: 'サーバーなどを、機械を買わずにインターネット経由で借りられるサービス。AWS など。' },
    { key: 'デプロイ', name: 'デプロイ', desc: '作ったサービスをサーバーに置いて、使える状態にすること。公開。' },
  ]},
  { title: '作るための道具', icon: 'i-code', terms: [
    { key: 'フレームワーク', name: 'フレームワーク', desc: 'よく使う仕組みをまとめた、作るための骨組み。一から全部書かずに済む。' },
    { key: 'Ruby on Rails', name: 'Ruby on Rails', full: 'ルビー・オン・レイルズ', desc: 'Rubyという言語で使うフレームワーク。Webサービスを短い期間で作りやすい。' },
    { key: 'Git', name: 'Git', full: 'ギット', desc: 'ファイルの変更を記録する道具。いつ何を変えたかが残り、前の状態に戻せる。' },
    { key: 'GitHub', name: 'GitHub', full: 'ギットハブ', desc: 'Gitの記録をインターネットに置いて、人と共有できるサービス。' },
    { key: 'エディタ', name: 'エディタ', desc: 'プログラムを書くためのアプリ。VS Code など。' },
    { key: 'ターミナル', name: 'ターミナル', desc: '文字で命令を打ち込んで、パソコンを操作する画面。' },
    { key: 'Command Line', name: 'Command Line', full: 'コマンドライン', desc: 'ターミナルに命令（コマンド）を打ち込んで操作するやり方。' },
  ]},
  { title: 'AIと学び方', icon: 'i-spark', terms: [
    { key: '生成AI', name: '生成AI', full: 'せいせいエーアイ', desc: '文章・画像・コードなどを作り出すAI。ChatGPT や Claude など。' },
    { key: 'AI駆動開発', name: 'AI駆動開発', full: 'エーアイくどうかいはつ', desc: 'AIに手伝ってもらいながら、サービスを作る進め方。' },
    { key: 'チュートリアル', name: 'チュートリアル', desc: '手順どおりに進めると完成する、練習用の教材。' },
  ]},
];
const GLOSSARY = Object.fromEntries(GLOSSARY_GROUPS.flatMap(g => g.terms).map(t => [t.key, t]));

(() => {
  const css = `
.term { font-style: normal; cursor: pointer; text-decoration: underline dotted 2px; text-underline-offset: 4px; border-radius: 4px; }
.term:hover, .term:focus-visible { color: var(--primary); outline: none; }
.term.is-active { color: var(--primary); background: var(--primary-soft); text-decoration-style: solid; }
.gl-link {
  margin-left: auto; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px; cursor: pointer;
  font-family: var(--font-display); font-weight: 700; font-size: 14px; line-height: 1.6; white-space: nowrap;
  color: var(--primary); background: var(--primary-soft); text-decoration: none; border: 1.5px solid transparent;
}
.gl-link:hover, .gl-link:focus-visible { border-color: var(--primary); outline: none; }
.gl-link[aria-current="page"], .gl-link[aria-expanded="true"] { color: #fff; background: var(--primary); }
.gl-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

/* カーソルを合わせたときの吹き出し */
.term-tip {
  position: fixed; z-index: 1001; max-width: 300px; padding: 12px 14px 13px;
  background: var(--ink); color: #fff; border-radius: 12px;
  box-shadow: 0 8px 24px rgba(31, 42, 68, .22);
  font-family: var(--font-body); font-size: 13.5px; font-weight: 400; line-height: 1.65; text-align: left; word-break: auto-phrase; text-wrap: pretty;
  pointer-events: none; opacity: 0; transform: translateY(4px); transition: opacity .12s, transform .12s;
}
.term-tip.on { opacity: 1; transform: none; }
.term-tip .nm { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
.term-tip b { font-family: var(--font-display); font-size: 15px; font-weight: 700; }
.term-tip .full { font-size: 12px; color: #c5cde0; }
.term-tip .hint { display: block; margin-top: 6px; font-size: 12px; color: #c5cde0; }
.term-tip::after {
  content: ""; position: absolute; left: var(--ax, 50%); width: 10px; height: 10px; margin-left: -5px;
  background: var(--ink); transform: rotate(45deg);
}
.term-tip.up::after { bottom: -5px; }
.term-tip.down::after { top: -5px; }

/* 右から出るサイドバー。本文の上に重ねて出し、本文の配置は動かさない。上のバー（「用語集」ボタン）は隠さない */
.td {
  position: fixed; z-index: 1000; top: 72px; right: 12px; bottom: 12px; width: 400px; max-width: calc(100vw - 24px);
  display: flex; flex-direction: column; overflow: hidden;
  background: var(--surface); color: var(--ink); border: 1px solid var(--line); border-radius: var(--radius, 18px);
  box-shadow: 0 24px 64px rgba(31, 42, 68, .22);
  font-family: var(--font-body); font-size: 16px; line-height: 1.75; text-align: left; word-break: auto-phrase;
  transform: translateX(calc(100% + 24px)); visibility: hidden; transition: transform .24s ease, visibility 0s .24s;
}
.td.on { transform: none; visibility: visible; transition: transform .24s ease; }
.td-top { display: flex; align-items: center; gap: 10px; min-height: 65px; padding: 14px 14px 14px 24px; border-bottom: 1px solid var(--line); }
.td-label { font-family: var(--font-display); font-weight: 900; font-size: 18px; }
.td-back {
  display: inline-flex; align-items: center; gap: 4px; margin-left: -10px; padding: 6px 12px 6px 8px; border: 0; border-radius: 10px;
  background: none; color: var(--primary); font: 700 14px var(--font-body); cursor: pointer;
}
.td-back:hover, .td-back:focus-visible { background: var(--primary-soft); outline: none; }
.td-close {
  margin-left: auto; width: 36px; height: 36px; display: grid; place-items: center; flex: none;
  border: 1px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--muted); cursor: pointer;
}
.td-close:hover, .td-close:focus-visible { color: var(--ink); border-color: var(--muted); outline: none; }
.td svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; flex: none; }
.td-body { flex: 1; overflow-y: auto; padding: 24px 24px 28px; }
.td-group {
  display: inline-flex; align-items: center; gap: 6px; padding: 3px 12px 3px 10px; border-radius: 999px;
  font-size: 13px; font-weight: 500; color: var(--tone); background: var(--tone-soft);
}
.td-group::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--tone); }
.td-name { margin: 14px 0 0; font-family: var(--font-display); font-size: 32px; font-weight: 900; line-height: 1.3; }
.td-full { margin: 4px 0 0; font-size: 14px; color: var(--muted); }
.td-desc {
  margin: 18px 0 0; padding: 16px 18px; border-radius: 14px; background: var(--bg, #f5f7fb);
  border-left: 4px solid var(--tone); font-size: 17px; line-height: 1.85; text-wrap: pretty;
}
.td-sub { margin: 28px 0 10px; font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--muted); }
.td-sec + .td-sec { margin-top: 24px; }
.td-sec .td-sub { margin-top: 0; display: flex; align-items: center; gap: 8px; color: var(--ink); }
.td-sec .td-sub::before { content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--tone); }
.td-sec .td-sub small { font-family: var(--font-body); font-size: 12px; font-weight: 400; color: var(--muted); }
.td-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.td-list button {
  width: 100%; display: flex; align-items: baseline; gap: 10px; padding: 10px 14px; text-align: left; cursor: pointer;
  border: 1px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); font: inherit;
}
.td-list button:hover, .td-list button:focus-visible { border-color: var(--tone); outline: none; }
.td-list b { font-family: var(--font-display); font-size: 15px; font-weight: 700; }
.td-list small { font-size: 12px; color: var(--muted); }
.td-foot { padding: 14px 24px; border-top: 1px solid var(--line); }
.td-foot a { display: inline-flex; align-items: center; gap: 6px; color: var(--primary); font-weight: 700; font-size: 14px; text-decoration: none; }
.td-foot a:hover { text-decoration: underline; }
.td .tone-1, .td.tone-1 { --tone: var(--c1); --tone-soft: var(--c1s); }
.td .tone-2, .td.tone-2 { --tone: var(--c2); --tone-soft: var(--c2s); }
.td .tone-3, .td.tone-3 { --tone: var(--c6); --tone-soft: var(--c6s); }
.td .tone-4, .td.tone-4 { --tone: var(--c3); --tone-soft: var(--c3s); }
.td .tone-5, .td.tone-5 { --tone: var(--c4); --tone-soft: var(--c4s); }
`;
  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

  const BOOK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z"/><path d="M12 6.5v13"/></svg>';
  const top = document.querySelector('.app-top');

  // 用語集のページでは、上のバーの「用語集」は今いるページを示すだけにする
  if (location.pathname.endsWith('glossary.html')) {
    top?.insertAdjacentHTML('beforeend', `<a class="gl-link" href="glossary.html" aria-current="page">${BOOK}用語集</a>`);
    return;
  }

  // 上のバーの「用語集」を押すと、ページは移らずに、サイドバーに一覧を出す
  top?.insertAdjacentHTML('beforeend', `<button type="button" class="gl-link" aria-expanded="false">${BOOK}用語集</button>`);
  const glBtn = top?.querySelector('.gl-link');

  const terms = [...document.querySelectorAll('.term')];
  const groupOf = key => GLOSSARY_GROUPS.findIndex(g => g.terms.some(t => t.key === key));
  const termButton = t => `<li><button type="button" data-key="${t.key}"><b>${t.name}</b>${t.full ? `<small>${t.full}</small>` : ''}</button></li>`;

  // サイドバー
  const td = document.createElement('aside');
  td.className = 'td';
  td.setAttribute('aria-label', '用語集');
  td.innerHTML = `
    <div class="td-top"></div>
    <div class="td-body"></div>
    <div class="td-foot"><a href="glossary.html">用語集のページで見る<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>`;
  document.body.append(td);
  const tdTop = td.querySelector('.td-top');
  const tdBody = td.querySelector('.td-body');
  const CLOSE = '<button type="button" class="td-close" aria-label="閉じる"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
  let mode = null;
  let current = null;

  // モーダルの中から開いたときは、サイドバーと吹き出しもモーダルの中に移す（モーダルの外は前に出せないため）
  function place(el, from) {
    const host = from?.closest('dialog[open]') || document.body;
    if (el.parentElement !== host) host.append(el);
  }
  function show() {
    glBtn?.setAttribute('aria-expanded', String(mode === 'list'));
    requestAnimationFrame(() => td.classList.add('on'));
  }

  function openList(from) {
    mode = 'list';
    place(td, from);
    td.className = 'td' + (td.classList.contains('on') ? ' on' : '');
    tdTop.innerHTML = `<span class="td-label">用語集</span>${CLOSE}`;
    tdBody.innerHTML = GLOSSARY_GROUPS.map((g, i) => `
      <section class="td-sec tone-${i + 1}">
        <p class="td-sub">${g.title}<small>${g.terms.length}語</small></p>
        <ul class="td-list">${g.terms.map(termButton).join('')}</ul>
      </section>`).join('');
    tdBody.scrollTop = 0;
    terms.forEach(el => el.classList.remove('is-active'));
    show();
  }

  function openTerm(key, from) {
    const gi = groupOf(key);
    if (gi < 0) return;
    const group = GLOSSARY_GROUPS[gi];
    const g = GLOSSARY[key];
    mode = 'term';
    place(td, from || current);
    td.className = `td tone-${gi + 1}` + (td.classList.contains('on') ? ' on' : '');
    tdTop.innerHTML = `<button type="button" class="td-back"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>用語集</button>${CLOSE}`;
    tdBody.innerHTML = `
      <span class="td-group">${group.title}</span>
      <p class="td-name">${g.name}</p>
      ${g.full ? `<p class="td-full">${g.full}</p>` : ''}
      <p class="td-desc">${g.desc}</p>
      <p class="td-sub">同じまとまりの言葉</p>
      <ul class="td-list">${group.terms.filter(t => t.key !== key).map(termButton).join('')}</ul>`;
    tdBody.scrollTop = 0;
    if (from) {
      current = from;
      terms.forEach(el => el.classList.toggle('is-active', el === from));
    }
    show();
  }

  function close() {
    if (!td.classList.contains('on')) return;
    td.classList.remove('on');
    glBtn?.setAttribute('aria-expanded', 'false');
    terms.forEach(el => el.classList.remove('is-active'));
    if (current?.isConnected) { current.focus({ preventScroll: true }); hideTip(); }
    current = null;
    mode = null;
  }

  glBtn?.addEventListener('click', e => {
    e.stopPropagation();
    if (mode === 'list' && td.classList.contains('on')) close();
    else { current = null; openList(null); }
  });
  td.addEventListener('click', e => {
    e.stopPropagation();
    const b = e.target.closest('[data-key]');
    if (b) openTerm(b.dataset.key, null);
    else if (e.target.closest('.td-back')) openList(current);
    else if (e.target.closest('.td-close')) close();
  });
  // サイドバーの外をクリックしたら閉じる。Esc は、モーダルより先にサイドバーを閉じる
  document.addEventListener('click', close);
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && td.classList.contains('on')) { e.preventDefault(); e.stopPropagation(); close(); }
  }, true);
  document.querySelectorAll('dialog').forEach(d => d.addEventListener('close', () => {
    if (td.parentElement === d) { close(); document.body.append(td); }
    if (tip.parentElement === d) { hideTip(); document.body.append(tip); }
  }));

  // 吹き出し。言葉の上に出す。上に入らないときは下に出す。左右は画面の中に収める
  const tip = document.createElement('div');
  tip.className = 'term-tip';
  tip.setAttribute('role', 'tooltip');
  tip.id = 'term-tip';
  document.body.append(tip);

  function showTip(el) {
    const g = GLOSSARY[el.dataset.term];
    if (!g) return;
    place(tip, el);
    tip.innerHTML = `<div class="nm"><b>${g.name}</b>${g.full ? `<span class="full">${g.full}</span>` : ''}</div>${g.desc}<span class="hint">クリックで詳しく</span>`;
    const r = el.getBoundingClientRect();
    const w = tip.offsetWidth, h = tip.offsetHeight, gap = 10, pad = 12;
    const up = r.top - h - gap > pad;
    const left = Math.min(Math.max(r.left + r.width / 2 - w / 2, pad), innerWidth - w - pad);
    tip.style.left = left + 'px';
    tip.style.top = (up ? r.top - h - gap : r.bottom + gap) + 'px';
    tip.style.setProperty('--ax', (r.left + r.width / 2 - left) + 'px');
    tip.classList.toggle('up', up);
    tip.classList.toggle('down', !up);
    tip.classList.add('on');
  }
  const hideTip = () => tip.classList.remove('on');

  terms.forEach(el => {
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-describedby', 'term-tip');
    el.addEventListener('mouseenter', () => showTip(el));
    el.addEventListener('focus', () => showTip(el));
    el.addEventListener('mouseleave', hideTip);
    el.addEventListener('blur', hideTip);
    el.addEventListener('click', e => { e.stopPropagation(); hideTip(); openTerm(el.dataset.term, el); });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hideTip(); openTerm(el.dataset.term, el); }
    });
  });
  addEventListener('scroll', hideTip, true);
  addEventListener('hashchange', hideTip);
})();
