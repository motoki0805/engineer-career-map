// 用語の説明。本文の <dfn class="term" data-term="SE">SE</dfn> にカーソルを合わせると吹き出し、クリックすると右のサイドバーに説明を出す
// 説明文はここにまとめ、各章と用語集のページ（glossary.html）で共通に使う
// 印は、各項目（スライド1枚）と詳細モーダルの中で、最初に出てくるところだけに付ける
const GLOSSARY_GROUPS = [
  { title: '仕事と働き方', icon: 'i-bag', terms: [
    { key: 'SE', name: 'SE', full: 'システムエンジニア', desc: '要望を聞いて、何を作るか決め、設計する人。', more: 'お客さんや使う人と話して、作るものを決めるのが中心の仕事。コードを書くかどうかは、会社によって違う。未経験から入ると、まずPGとして働き、経験を積んでSEになることが多い。' },
    { key: 'PG', name: 'PG', full: 'プログラマー', desc: '設計をもとに、コードを書く人。', more: 'SEが決めた設計どおりに動くよう、コードを書き、自分で動きを確かめる。未経験から入るときは、多くがこの立場から始まる。小さい会社では、SEとPGを同じ人が受け持つことも多い。' },
    { key: 'QA', name: 'QA', full: '品質保証', desc: 'テストをして、不具合がないか確かめる人・仕事。', more: 'Quality Assurance の略。試す項目を考え、実際に操作して、決めたとおりに動くかを確かめる。見つけた不具合はPGに伝えて直してもらう。テストを自動で行うコードを書くこともある。' },
    { key: 'PM', name: 'PM', full: 'プロジェクトマネージャー', desc: '予算・人・スケジュールを管理する人。', more: 'プロジェクト全体の責任者。いつまでに、何人で、いくらで作るかを決め、遅れや問題が出たら手を打つ。自分でコードを書くことは少ない。' },
    { key: 'SIer', name: 'SIer', full: 'エスアイヤー', desc: '会社や役所から頼まれて、システムを作って納める会社。大きな受託開発の会社を指すことが多い。', more: 'System Integrator（システムインテグレーター）を縮めた、日本での呼び方。銀行や役所の大きなシステムを作るのは、たいていSIer。大きな会社では、自社は管理や設計を受け持ち、作る部分をほかの会社に頼むことも多い。' },
    { key: 'SES', name: 'SES', desc: 'お客さんの会社のチームに入って働く契約の形。給料は自分の会社からもらう。', more: 'System Engineering Service の略。働く場所はお客さんの会社でも、雇われているのは自分の会社。未経験でも入りやすい一方、どの現場に行くかで、身につく経験が大きく変わる。' },
    { key: '案件', name: '案件', full: 'あんけん', desc: '仕事の1件1件のこと。「案件に入る」は、そのプロジェクトの仕事をすること。', more: '「今の案件」「次の案件」のように使う。SESやフリーランスでは、案件ごとに働く場所やチームが変わる。' },
    { key: '単価', name: '単価', full: 'たんか', desc: '仕事1件、または1か月・1時間あたりにもらえる金額。', more: 'フリーランスやSESでよく使う。「月単価60万円」なら、1か月働くと60万円もらえるということ。経験やスキルが上がるほど、単価も上がる。' },
    { key: 'ポートフォリオ', name: 'ポートフォリオ', desc: '自分の力を見せるための作品。転職活動で会社に見せる。', more: '未経験の転職では、職歴の代わりに「何ができるか」を見せる材料になる。見た目の良さより、なぜ作ったか、どう作ったかを説明できることが大事。4-2で詳しく見る。' },
  ]},
  { title: '仕事の流れ', icon: 'i-vee', terms: [
    { key: 'フェーズ', name: 'フェーズ', desc: '仕事の段階。「要件定義」「実装」など、流れの中の1つ1つ。', more: '英語で「段階」の意味。「今は設計のフェーズ」「テストのフェーズに入った」のように使う。' },
    { key: '上流工程', name: '上流工程', full: 'じょうりゅうこうてい', desc: '何を作るかを決める、仕事の前半（要件定義・設計）。', more: '川の上流と下流にたとえた言い方。ここで決めたことをもとに後半の作業が進むので、決め間違えると、あとの作り直しが大きくなる。主にSEやPMが受け持つ。' },
    { key: '下流工程', name: '下流工程', full: 'かりゅうこうてい', desc: '決めたものを作って確かめる、仕事の後半（実装・テスト）。', more: '上流工程で決めた設計どおりに、コードを書いて、テストする。未経験から入ると、まずこの下流工程から関わることが多い。' },
    { key: '要件定義', name: '要件定義', full: 'ようけんていぎ', desc: 'お客さんと話して、何を作るか（必要な機能など）を決める工程。', more: '「要件」は、システムに必要なこと。会議室の予約サイトなら「空きをカレンダーで見られる」「ログインした人だけ予約できる」など。ここがあいまいだと、作ったあとに「頼んだものと違う」となる。' },
    { key: '基本設計', name: '基本設計', desc: '画面や機能など、使う人から見える部分を決める工程。', more: '外部設計とも呼ぶ。どんな画面があり、どのボタンを押すと何が起きるかを、お客さんにも分かる形で決める。' },
    { key: '詳細設計', name: '詳細設計', desc: 'プログラムの中の作りを決める工程。', more: '内部設計とも呼ぶ。基本設計で決めたことを、どんな部品に分け、データをどう処理するかまで細かく決める。PGはこれを見てコードを書く。' },
    { key: '単体テスト', name: '単体テスト', desc: '部品ごとに、正しく動くか確かめる。', more: '関数や画面など、小さな部品を1つずつ試す。たとえば「料金を計算する部分に2時間を渡すと、正しい金額が返るか」を確かめる。作ったPGが自分で行うことが多い。' },
    { key: '結合テスト', name: '結合テスト', desc: '部品をつないで、一緒に正しく動くか確かめる。', more: '部品ごとには動いても、つなぐと動かないことがある。たとえば「予約を保存したら、カレンダーの ○ が × に変わるか」を確かめる。' },
    { key: 'システムテスト', name: 'システムテスト', desc: '全体を通して、決めたとおりに動くか確かめる。', more: 'ログインから予約、確認までを、使う人と同じ流れで通して試す。たくさんの人が同時に使っても止まらないかも、ここで確かめる。' },
    { key: '受け入れテスト', name: '受け入れテスト', desc: 'お客さんが実際に使って、頼んだとおりか確かめる。', more: 'お客さんが、自分の仕事で使えるかを確かめる最後のテスト。ここで問題がなければ、お客さんに引き渡す（納品）。' },
  ]},
  { title: 'Webの仕組み', icon: 'i-globe', terms: [
    { key: 'ブラウザ', name: 'ブラウザ', desc: 'インターネットのページを見るためのアプリ。Chrome、Safari、Edge など。', more: 'URLを入れると、サーバーにページを頼み、届いたHTMLやCSSを読んで画面に出す。Webサービスの見た目と動き（フロントエンド）は、ブラウザの中で動く。' },
    { key: 'サーバー', name: 'サーバー', desc: 'インターネットの向こう側で、ページやデータを用意して送り返すコンピューター。', more: '中身は普通のコンピューターと同じだが、24時間動き続け、たくさんの頼みに応える。会議室の予約サイトなら、予約を保存し、空き状況を計算して返すのはサーバー。' },
    { key: 'URL', name: 'URL', desc: 'ページの住所。「https://」から始まる文字で、開くとそのページが出る。', more: 'たとえば https://example.com/rooms/1 なら、「example.com というサーバーの、rooms/1 というページ」という意味。URLを送れば、誰でも同じページを開ける。' },
    { key: 'HTTP', name: 'HTTP', desc: 'ブラウザとサーバーがやり取りするときの決まりごと。URLの先頭の「http」はこれ。', more: 'ブラウザが「このページをください」と頼み（リクエスト）、サーバーが中身を返す（レスポンス）。このやり取りの書き方を決めたもの。https の s は、やり取りを暗号にして安全にしたもの。' },
    { key: 'インフラ', name: 'インフラ', desc: 'サービスを動かすための土台。サーバーやネットワークなど。道路や水道のようなもの。', more: 'インフラストラクチャー（Infrastructure）の略。サービスが止まらずに動くように、サーバーを用意し、見守る。これを専門にする人を、インフラエンジニアと呼ぶ。' },
    { key: 'クラウドサービス', name: 'クラウドサービス', desc: 'サーバーなどを、機械を買わずにインターネット経由で借りられるサービス。AWS など。', more: '昔は、会社がサーバーの機械を自分で買って置いていた。今は必要な分だけ借りて、使った分だけ払うのが主流。AWS（Amazon）、Google Cloud、Azure（Microsoft）が有名。' },
    { key: 'デプロイ', name: 'デプロイ', desc: '作ったサービスをサーバーに置いて、使える状態にすること。公開。', more: '自分のパソコンで作ったものは、自分しか見られない。サーバーに置くことで、URLから誰でも使えるようになる。直したときも、もう一度デプロイして反映する。' },
  ]},
  { title: '作るための道具', icon: 'i-code', terms: [
    { key: 'フレームワーク', name: 'フレームワーク', desc: 'よく使う仕組みをまとめた、作るための骨組み。一から全部書かずに済む。', more: 'ログインやデータの保存など、どのサービスでも必要になる部分が用意されている。決まった書き方に従うことで、早く、間違いの少ないコードが書ける。RubyならRuby on Rails、PHPならLaravelが有名。' },
    { key: 'Ruby on Rails', name: 'Ruby on Rails', full: 'ルビー・オン・レイルズ', desc: 'Rubyという言語で使うフレームワーク。Webサービスを短い期間で作りやすい。', more: '日本生まれの言語Rubyで使う、代表的なフレームワーク。決まりごとが多い分、少ないコードで動くものが作れる。この資料では、Progateで学べることもあって、これを選んでいる。' },
    { key: 'Git', name: 'Git', full: 'ギット', desc: 'ファイルの変更を記録する道具。いつ何を変えたかが残り、前の状態に戻せる。', more: 'ゲームのセーブのように、変更をこまめに記録（コミット）しておける。うまくいかなくなったら、前の記録に戻せる。チームで同じファイルを同時に直すときにも欠かせない。' },
    { key: 'GitHub', name: 'GitHub', full: 'ギットハブ', desc: 'Gitの記録をインターネットに置いて、人と共有できるサービス。', more: 'コードを置いておくと、チームで同じコードを見ながら直せる。転職活動では、自分のコードと、作ってきた記録を見せる場所にもなる。' },
    { key: 'エディタ', name: 'エディタ', desc: 'プログラムを書くためのアプリ。VS Code など。', more: 'メモ帳と違い、コードに色を付けて読みやすくしたり、間違いを教えてくれたりする。VS Code は無料で、多くのエンジニアが使っている。' },
    { key: 'ターミナル', name: 'ターミナル', desc: '文字で命令を打ち込んで、パソコンを操作する画面。', more: 'マウスで操作する代わりに、文字で命令を打つ。最初は難しく見えるが、開発の道具の多くはここから動かす。Windowsでは「PowerShell」、Macでは「ターミナル」というアプリ。' },
    { key: 'Command Line', name: 'Command Line', full: 'コマンドライン', desc: 'ターミナルに命令（コマンド）を打ち込んで操作するやり方。', more: 'たとえば cd でフォルダーを移動し、ls で中身を見る。Gitやフレームワークの操作も、多くはコマンドで行う。ProgateのCommand Lineコースで基本を学べる。' },
  ]},
  { title: 'AIと学び方', icon: 'i-spark', terms: [
    { key: '生成AI', name: '生成AI', full: 'せいせいエーアイ', desc: '文章・画像・コードなどを作り出すAI。ChatGPT や Claude など。', more: '質問や頼みごとを文章で書くと、答えや下書きを作ってくれる。便利な一方、間違ったことをもっともらしく書くこともあるので、正しいかを確かめる力が必要。' },
    { key: 'AI駆動開発', name: 'AI駆動開発', full: 'エーアイくどうかいはつ', desc: 'AIに手伝ってもらいながら、サービスを作る進め方。', more: 'コードの下書き、エラーの原因探し、テスト項目の洗い出しなどをAIに頼みながら進める。AIが出したものが正しいかを判断し、責任を持つのは人。' },
    { key: 'チュートリアル', name: 'チュートリアル', desc: '手順どおりに進めると完成する、練習用の教材。', more: '書いてあるとおりに進めれば動くものができるので、基礎を覚えるのに向いている。ただ、そのまま作っただけのものは、ポートフォリオとしては評価されにくい。' },
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
.td-more { margin: 0; font-size: 15px; line-height: 1.9; text-wrap: pretty; }
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
      ${g.more ? `<p class="td-sub">もう少し詳しく</p><p class="td-more">${g.more}</p>` : ''}
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
