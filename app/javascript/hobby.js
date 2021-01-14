function move() {
  let question = document.getElementById('question');
  let img01 = document.getElementById('img01');
  let img02 = document.getElementById('img02');

  img01.addEventListener('click', function() {
    question.innerHTML = "質問2"
    img01.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
    img02.innerHTML = "<img src ='assets/guitar_stand.png', class='image'>";
  });


};
window.addEventListener("load", move);