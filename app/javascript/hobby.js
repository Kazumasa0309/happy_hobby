function move() {
  let question = document.getElementById('question');
  let answer_left = document.getElementById('answer_left');
  let answer_right = document.getElementById('answer_right');
  let img01 = document.getElementById('img01');
  let img02 = document.getElementById('img02');

  

  answer_left.addEventListener('click', function() {
    // 質問0にて左を選択
    if (answer_left.getAttribute('class') == 'ans00') {
      question.innerHTML = "質問1"
      answer_left.setAttribute('class', 'ans01')
      answer_right.setAttribute('class', 'ans01')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    // 質問1にて左を選択
    } else if (answer_left.getAttribute('class') == 'ans01') {
      question.innerHTML = "質問3"
      answer_left.setAttribute('class', 'ans03')
      answer_right.setAttribute('class', 'ans03')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    }
  });

  answer_right.addEventListener('click', function() {
    // 質問0にて右を選択
    if (answer_left.getAttribute('class') == 'ans00') {
      question.innerHTML = "質問2"
      answer_left.setAttribute('class', 'ans02')
      answer_right.setAttribute('class', 'ans02')
      img01.innerHTML = "<img src ='assets/base.png', class='image'>";
      img02.innerHTML = "<img src ='assets/base.png', class='image'>";
    // 質問1にて右を選択
    } else if (answer_left.getAttribute('class') == 'ans01') {
      question.innerHTML = "質問4"
      answer_left.setAttribute('class', 'ans04')
      answer_right.setAttribute('class', 'ans04')
      img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
      img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    }
  });

}

window.addEventListener("load", move);