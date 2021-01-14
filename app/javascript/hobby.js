function move() {
  let question = document.getElementById('question');
  let answer_left = document.getElementById('answer_left');
  let answer_right = document.getElementById('answer_right');
  let img01 = document.getElementById('img01');
  let img02 = document.getElementById('img02');

  answer_left.addEventListener('click', function() {
    question.innerHTML = "質問1"
    answer_left.setAttribute('class', 'ans01')
    answer_right.setAttribute('class', 'ans01')
    img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
  });
  
  answer_right.addEventListener('click', function() {
    question.innerHTML = "質問2"
    answer_left.setAttribute('class', 'ans02')
    answer_right.setAttribute('class', 'ans02')
    img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
  });


};
window.addEventListener("load", move);