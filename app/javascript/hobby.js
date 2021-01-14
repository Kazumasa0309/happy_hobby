function move() {
  let question = document.getElementById('question');
  let answer_left = document.getElementById('answer_left');
  let answer_right = document.getElementById('answer_right');
  let img01 = document.getElementById('img01');
  let img02 = document.getElementById('img02');

  answer_left.addEventListener('click', function() {
    // 質問0にて左を選択
    if (answer_left.getAttribute('class') == 'ans0001') {
      question.innerHTML = "質問1"
      answer_left.setAttribute('class', 'ans0101')
      answer_right.setAttribute('class', 'ans0102')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問1にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans0101') {
      question.innerHTML = "質問3"
      answer_left.setAttribute('class', 'ans0301')
      answer_right.setAttribute('class', 'ans0302')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問2にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans0201') {
      question.innerHTML = "質問5"
      answer_left.setAttribute('class', 'ans0501')
      answer_right.setAttribute('class', 'ans0502')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問3にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans0301') {
      question.innerHTML = "結果7"
      answer_left.setAttribute('class', 'ans0701')
      answer_right.setAttribute('class', 'ans0702')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問4にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans0401') {
      question.innerHTML = "結果9"
      answer_left.setAttribute('class', 'ans0901')
      answer_right.setAttribute('class', 'ans0902')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問5にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans0501') {
      question.innerHTML = "結果11"
      answer_left.setAttribute('class', 'ans1101')
      answer_right.setAttribute('class', 'ans1102')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      // 質問6にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans0601') {
      question.innerHTML = "結果13"
      answer_left.setAttribute('class', 'ans1301')
      answer_right.setAttribute('class', 'ans1302')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    }
  });

  answer_right.addEventListener('click', function() {
    // 質問0にて右を選択
    if (answer_right.getAttribute('class') == 'ans0002') {
      question.innerHTML = "質問2"
      answer_left.setAttribute('class', 'ans0201')
      answer_right.setAttribute('class', 'ans0202')
      img01.innerHTML = "<img src ='assets/base.png', class='image'>";
      img02.innerHTML = "<img src ='assets/base.png', class='image'>";
    // 質問1にて右を選択
    } else if (answer_right.getAttribute('class') == 'ans0102') {
      question.innerHTML = "質問4"
      answer_left.setAttribute('class', 'ans0401')
      answer_right.setAttribute('class', 'ans0402')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問2にて右を選択
    } else if (answer_right.getAttribute('class') == 'ans0202') {
      question.innerHTML = "質問6"
      answer_left.setAttribute('class', 'ans0601')
      answer_right.setAttribute('class', 'ans0602')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問3にて右を選択
    } else if (answer_right.getAttribute('class') == 'ans0302') {
      question.innerHTML = "結果8"
      answer_left.setAttribute('class', 'ans0801')
      answer_right.setAttribute('class', 'ans0802')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問4にて右を選択
    } else if (answer_right.getAttribute('class') == 'ans0402') {
      question.innerHTML = "結果10"
      answer_left.setAttribute('class', 'ans1001')
      answer_right.setAttribute('class', 'ans1002')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問5にて右を選択
    } else if (answer_right.getAttribute('class') == 'ans0502') {
      question.innerHTML = "結果12"
      answer_left.setAttribute('class', 'ans1201')
      answer_right.setAttribute('class', 'ans1202')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問6にて右を選択
    } else if (answer_right.getAttribute('class') == 'ans0602') {
      question.innerHTML = "結果14"
      answer_left.setAttribute('class', 'ans1401')
      answer_right.setAttribute('class', 'ans1402')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    }
  });
}
window.addEventListener("click", move);