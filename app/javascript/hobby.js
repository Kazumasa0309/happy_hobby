function move() {
  var cards = document.getElementById('cards');
  var start = document.getElementById('start');
  var retry = document.getElementById('retry');

  start.addEventListener('click', function() {
    cards.className = 'move';
  });

  retry.addEventListener('click', function() {
    cards.className = 'move';
    const test = document.querySelector('#cards.move');
    console.log(test)
  });
};
window.addEventListener("load", move);