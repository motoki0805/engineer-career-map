// 用語のツールチップ。本文の <dfn class="term" data-term="SE">SE</dfn> にカーソルを合わせると、説明を吹き出しで出す
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
.term { font-style: normal; cursor: help; text-decoration: underline dotted 2px; text-underline-offset: 4px; }
.term:hover, .term:focus-visible { color: var(--primary); outline: none; }
.term-tip {
  position: fixed; z-index: 1000; max-width: 300px; padding: 12px 14px 13px;
  background: var(--ink); color: #fff; border-radius: 12px;
  box-shadow: 0 8px 24px rgba(31, 42, 68, .22);
  font-family: var(--font-body); font-size: 13.5px; font-weight: 400; line-height: 1.65; text-align: left; word-break: auto-phrase; text-wrap: pretty;
  pointer-events: none; opacity: 0; transform: translateY(4px); transition: opacity .12s, transform .12s;
}
.term-tip.on { opacity: 1; transform: none; }
.term-tip .nm { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
.term-tip b { font-family: var(--font-display); font-size: 15px; font-weight: 700; }
.term-tip .full { font-size: 12px; color: #c5cde0; }
.term-tip::after {
  content: ""; position: absolute; left: var(--ax, 50%); width: 10px; height: 10px; margin-left: -5px;
  background: var(--ink); transform: rotate(45deg);
}
.term-tip.up::after { bottom: -5px; }
.term-tip.down::after { top: -5px; }
.gl-link {
  margin-left: auto; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px;
  font-family: var(--font-display); font-weight: 700; font-size: 14px; white-space: nowrap;
  color: var(--primary); background: var(--primary-soft); text-decoration: none; border: 1.5px solid transparent;
}
.gl-link:hover, .gl-link:focus-visible { border-color: var(--primary); outline: none; }
.gl-link[aria-current="page"] { color: #fff; background: var(--primary); }
.gl-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
`;
  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

  // 上のバーの右端に、用語集へのリンクを置く
  const top = document.querySelector('.app-top');
  if (top) {
    const here = location.pathname.endsWith('glossary.html');
    top.insertAdjacentHTML('beforeend', `<a class="gl-link" href="glossary.html"${here ? ' aria-current="page"' : ''}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z"/><path d="M12 6.5v13"/></svg>用語集</a>`);
  }

  const tip = document.createElement('div');
  tip.className = 'term-tip';
  tip.setAttribute('role', 'tooltip');
  tip.id = 'term-tip';
  document.body.append(tip);

  function show(el) {
    const g = GLOSSARY[el.dataset.term];
    if (!g) return;
    tip.innerHTML = `<div class="nm"><b>${g.name}</b>${g.full ? `<span class="full">${g.full}</span>` : ''}</div>${g.desc}`;
    // 言葉の上に出す。上に入らないときは下に出す。左右は画面の中に収める
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
  const hide = () => tip.classList.remove('on');

  document.querySelectorAll('.term').forEach(el => {
    el.tabIndex = 0;
    el.setAttribute('aria-describedby', 'term-tip');
    el.addEventListener('mouseenter', () => show(el));
    el.addEventListener('focus', () => show(el));
    el.addEventListener('mouseleave', hide);
    el.addEventListener('blur', hide);
  });
  addEventListener('scroll', hide, true);
  addEventListener('hashchange', hide);
})();
