function move() {
  let shindan_wrap = document.getElementById('shindan_wrap');
  let question = document.getElementById('question');
  let answer_left = document.getElementById('answer_left');
  let answer_right = document.getElementById('answer_right');
  let img01 = document.getElementById('img01');
  let img02 = document.getElementById('img02');
  let txt01_1 = document.getElementById('txt01_1');
  let txt01_2 = document.getElementById('txt01_2');
  let txt02_1 = document.getElementById('txt02_1');
  let txt02_2 = document.getElementById('txt02_2');
  let kekka_wrap = document.getElementById('kekka_wrap')
  let kekka07 = document.getElementById('kekka07')
  let kekka08 = document.getElementById('kekka08')
  let kekka09 = document.getElementById('kekka09')
  let kekka10 = document.getElementById('kekka10')
  let kekka11 = document.getElementById('kekka11')
  let kekka12 = document.getElementById('kekka12')
  let kekka13 = document.getElementById('kekka13')
  let kekka14 = document.getElementById('kekka14')

  answer_left.addEventListener('click', function() {
    // 質問1
    if (answer_left.getAttribute('class') == 'ans0001') {
      shindan_wrap.setAttribute('style', 'background-color: #CCFFFF')
      question.innerHTML = "ものを使う方が好き？作る方が好き？"
      answer_left.setAttribute('class', 'ans0101')
      answer_right.setAttribute('class', 'ans0102')
      img01.innerHTML = "<img src ='assets/img_0101_sword.png', class='image'>";
      img02.innerHTML = "<img src ='assets/img_0102_diy.png', class='image'>";
      txt01_1.innerHTML = "いいもの見つけたい"
      txt01_2.innerHTML = "使う派"
      txt02_1.innerHTML = "いいもの作りたい"
      txt02_2.innerHTML = "作る派"
    // 質問3
    } else if (answer_left.getAttribute('class') == 'ans0101') {
      shindan_wrap.setAttribute('style', 'background-color: #f5d0d0')
      question.innerHTML = "与えたい人ですか？与えられたい人ですか？"
      answer_left.setAttribute('class', 'ans0301')
      answer_right.setAttribute('class', 'ans0302')
      img01.innerHTML = "<img src ='assets/img_0301_hikigatari.png', class='image'>";
      img02.innerHTML = "<img src ='assets/img_0302_audience.png', class='image'>";
      txt01_1.innerHTML = "みんなが幸せだと自分も幸せ"
      txt01_2.innerHTML = "与えたい人"
      txt02_1.innerHTML = "自分の中の穴を埋めて欲しい！"
      txt02_2.innerHTML = "与えられたい人"
    // 質問5
    } else if (answer_left.getAttribute('class') == 'ans0201') {
      shindan_wrap.setAttribute('style', 'background-color: #fce5d9')
      question.innerHTML = "体を動かすのが好き？"
      answer_left.setAttribute('class', 'ans0501')
      answer_right.setAttribute('class', 'ans0502')
      img01.innerHTML = "<img src ='assets/img_0501_run.png', class='image'>";
      img02.innerHTML = "<img src ='assets/img_0502_smartphone.png', class='image'>";
      txt01_1.innerHTML = "スポーティなタイプ"
      txt01_2.innerHTML = "けっこう好き"
      txt02_1.innerHTML = "嫌いではないが"
      txt02_2.innerHTML = "そうでもない"
    // 結果7
    } else if (answer_left.getAttribute('class') == 'ans0301') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka08.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    // 結果9
    } else if (answer_left.getAttribute('class') == 'ans0401') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka08.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    // 結果11
    } else if (answer_left.getAttribute('class') == 'ans0501') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka08.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    // 結果13
    } else if (answer_left.getAttribute('class') == 'ans0601') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka08.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    }
  });

  answer_right.addEventListener('click', function() {
    // 質問2
    if (answer_right.getAttribute('class') == 'ans0002') {
      shindan_wrap.setAttribute('style', 'background-color: #fcd9d9')
      question.innerHTML = "花より団子？"
      answer_left.setAttribute('class', 'ans0201')
      answer_right.setAttribute('class', 'ans0202')
      img01.innerHTML = "<img src ='assets/img_0201_sakura.jpg', class='image'>";
      img02.innerHTML = "<img src ='assets/img_0202_dango.png', class='image'>";
      txt01_1.innerHTML = "景色、景観派"
      txt01_2.innerHTML = "花でしょ"
      txt02_1.innerHTML = "花？食べられる？"
      txt02_2.innerHTML = "そう団子だ！"
    // 質問4
    } else if (answer_right.getAttribute('class') == 'ans0102') {
      shindan_wrap.setAttribute('style', 'background-color: #FFFFCC')
      question.innerHTML = "あなたは都会派？田舎派？"
      answer_left.setAttribute('class', 'ans0401')
      answer_right.setAttribute('class', 'ans0402')
      img01.innerHTML = "<img src ='assets/img_0401_city.png', class='image'>";
      img02.innerHTML = "<img src ='assets/img_0402_village.png', class='image'>";
      txt01_1.innerHTML = "利便性が第一！"
      txt01_2.innerHTML = "都会派"
      txt02_1.innerHTML = "たまには自然もいいよね"
      txt02_2.innerHTML = "田舎派"
    // 質問6
    } else if (answer_right.getAttribute('class') == 'ans0202') {
      shindan_wrap.setAttribute('style', 'background-color: #c9f5d7')
      question.innerHTML = "何かやるとき事前準備をバッチリする人？"
      answer_left.setAttribute('class', 'ans0601')
      answer_right.setAttribute('class', 'ans0602')
      img01.innerHTML = "<img src ='assets/img_0601_sleep.png', class='image'>";
      img02.innerHTML = "<img src ='assets/img_0602_hammock.png', class='image'>";
      txt01_1.innerHTML = "夜眠れないレベル"
      txt01_2.innerHTML = "準備命"
      txt02_1.innerHTML = "楽観的"
      txt02_2.innerHTML = "あまり気にせず"
    // 結果8
    } else if (answer_right.getAttribute('class') == 'ans0302') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    // 結果10
    } else if (answer_right.getAttribute('class') == 'ans0402') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka08.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    // 結果12
    } else if (answer_right.getAttribute('class') == 'ans0502') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka08.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
      kekka14.setAttribute('style', 'display: none')
    // 結果14
    } else if (answer_right.getAttribute('class') == 'ans0602') {
      shindan_wrap.setAttribute('style', 'display: none')
      kekka_wrap.setAttribute('style', '')
      kekka07.setAttribute('style', 'display: none')
      kekka08.setAttribute('style', 'display: none')
      kekka09.setAttribute('style', 'display: none')
      kekka10.setAttribute('style', 'display: none')
      kekka11.setAttribute('style', 'display: none')
      kekka12.setAttribute('style', 'display: none')
      kekka13.setAttribute('style', 'display: none')
    }
  });
}
window.addEventListener('load', move);