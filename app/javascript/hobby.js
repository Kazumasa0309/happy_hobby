function move() {
  var cards = document.getElementById('cards');
  var start = document.getElementById('start');
  var retry = document.getElementById('retry');

  start.addEventListener('click', function() {
    cards.className = 'move';
  });

  retry.addEventListener('click', function() {
    cards.className = '';
  });
};
window.addEventListener("load", move);