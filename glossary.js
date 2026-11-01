// 用語の説明。本文の <dfn class="term" data-term="SE">SE</dfn> をクリックすると、画面の右から説明のサイドバーを出す
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
  margin-left: auto; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px;
  font-family: var(--font-display); font-weight: 700; font-size: 14px; white-space: nowrap;
  color: var(--primary); background: var(--primary-soft); text-decoration: none; border: 1.5px solid transparent;
}
.gl-link:hover, .gl-link:focus-visible { border-color: var(--primary); outline: none; }
.gl-link[aria-current="page"] { color: #fff; background: var(--primary); }
.gl-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

/* 右から出るサイドバー。本文の上に重ねて出し、本文の配置は動かさない */
.td {
  position: fixed; z-index: 1000; top: 12px; right: 12px; bottom: 12px; width: 400px; max-width: calc(100vw - 24px);
  display: flex; flex-direction: column; overflow: hidden;
  background: var(--surface); color: var(--ink); border: 1px solid var(--line); border-radius: var(--radius, 18px);
  box-shadow: 0 24px 64px rgba(31, 42, 68, .22);
  font-family: var(--font-body); font-size: 16px; line-height: 1.75; text-align: left; word-break: auto-phrase;
  transform: translateX(calc(100% + 24px)); visibility: hidden; transition: transform .24s ease, visibility 0s .24s;
}
.td.on { transform: none; visibility: visible; transition: transform .24s ease; }
.td-top { display: flex; align-items: center; gap: 10px; padding: 14px 14px 14px 24px; border-bottom: 1px solid var(--line); }
.td-label { font-family: var(--font-display); font-weight: 700; font-size: 13px; letter-spacing: .08em; color: var(--muted); }
.td-close {
  margin-left: auto; width: 36px; height: 36px; display: grid; place-items: center; flex: none;
  border: 1px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--muted); cursor: pointer;
}
.td-close:hover, .td-close:focus-visible { color: var(--ink); border-color: var(--muted); outline: none; }
.td svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
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
.td.tone-1 { --tone: var(--c1); --tone-soft: var(--c1s); }
.td.tone-2 { --tone: var(--c2); --tone-soft: var(--c2s); }
.td.tone-3 { --tone: var(--c6); --tone-soft: var(--c6s); }
.td.tone-4 { --tone: var(--c3); --tone-soft: var(--c3s); }
.td.tone-5 { --tone: var(--c4); --tone-soft: var(--c4s); }
`;
  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

  // 上のバーの右端に、用語集へのリンクを置く
  const top = document.querySelector('.app-top');
  if (top) {
    const here = location.pathname.endsWith('glossary.html');
    top.insertAdjacentHTML('beforeend', `<a class="gl-link" href="glossary.html"${here ? ' aria-current="page"' : ''}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z"/><path d="M12 6.5v13"/></svg>用語集</a>`);
  }

  const terms = [...document.querySelectorAll('.term')];
  if (!terms.length) return;

  const td = document.createElement('aside');
  td.className = 'td';
  td.setAttribute('aria-label', '用語の説明');
  td.innerHTML = `
    <div class="td-top"><span class="td-label">用語の説明</span>
      <button type="button" class="td-close" aria-label="閉じる"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <div class="td-body"></div>
    <div class="td-foot"><a href="glossary.html">用語集をすべて見る<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>`;
  document.body.append(td);
  const tdBody = td.querySelector('.td-body');
  let current = null;

  function open(key, from) {
    const gi = GLOSSARY_GROUPS.findIndex(g => g.terms.some(t => t.key === key));
    if (gi < 0) return;
    const group = GLOSSARY_GROUPS[gi];
    const g = GLOSSARY[key];
    // モーダルの中の言葉なら、サイドバーもモーダルの中に移す（モーダルの外は触れなくなるため）
    const host = (from || current)?.closest('dialog[open]') || document.body;
    if (td.parentElement !== host) host.append(td);
    td.className = `td tone-${gi + 1}`;
    tdBody.innerHTML = `
      <span class="td-group">${group.title}</span>
      <p class="td-name">${g.name}</p>
      ${g.full ? `<p class="td-full">${g.full}</p>` : ''}
      <p class="td-desc">${g.desc}</p>
      <p class="td-sub">同じまとまりの言葉</p>
      <ul class="td-list">${group.terms.filter(t => t.key !== key).map(t =>
        `<li><button type="button" data-key="${t.key}"><b>${t.name}</b>${t.full ? `<small>${t.full}</small>` : ''}</button></li>`).join('')}</ul>`;
    tdBody.scrollTop = 0;
    if (from) {
      current = from;
      terms.forEach(el => el.classList.toggle('is-active', el === from));
    }
    requestAnimationFrame(() => td.classList.add('on'));
  }
  function close() {
    if (!td.classList.contains('on')) return;
    td.classList.remove('on');
    terms.forEach(el => el.classList.remove('is-active'));
    if (current?.isConnected) current.focus({ preventScroll: true });
    current = null;
  }

  terms.forEach(el => {
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.addEventListener('click', e => { e.stopPropagation(); open(el.dataset.term, el); });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(el.dataset.term, el); }
    });
  });
  td.addEventListener('click', e => {
    e.stopPropagation();
    const b = e.target.closest('[data-key]');
    if (b) open(b.dataset.key, null);
    if (e.target.closest('.td-close')) close();
  });
  // サイドバーの外をクリックしたら閉じる。Esc は、モーダルより先にサイドバーを閉じる
  document.addEventListener('click', close);
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && td.classList.contains('on')) { e.preventDefault(); e.stopPropagation(); close(); }
  }, true);
  document.querySelectorAll('dialog').forEach(d => d.addEventListener('close', () => {
    if (td.parentElement === d) { close(); document.body.append(td); }
  }));
})();
